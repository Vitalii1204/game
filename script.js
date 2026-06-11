// --- Globale Variablen & Einstellungen ---
const tileSize = 20; 
let playerPos = { x: 1, y: 1 };
let keys = {};
let enemyInterval; 
let score = 0;
let currentLevelIndex = 0;
const game = document.getElementById("game");

// --- Level-Verwaltung ---
function getCurrentLevel() {
    if (window.allLevels && window.allLevels[currentLevelIndex]) {
        return window.allLevels[currentLevelIndex];
    }
    return {
        mapSize: typeof mapSize !== 'undefined' ? mapSize : { width: 20, height: 20 },
        worldData: typeof worldData !== 'undefined' ? worldData : [],
        enemies: typeof enemies !== 'undefined' ? enemies : [],
        finish: typeof levelConfig !== 'undefined' ? levelConfig.finish : { x: 15, y: 10 }
    };
}

// --- Welt-Initialisierung ---
function initGame() {
    const level = getCurrentLevel();
    
    // Spielfeld leeren und Intervalle stoppen
    game.innerHTML = "";
    if (enemyInterval) clearInterval(enemyInterval);

    // CSS-Grid Größe anpassen
    game.style.setProperty('--cols', level.mapSize.width);
    game.style.setProperty('--rows', level.mapSize.height);

    // Tiles zeichnen
    for (let y = 0; y < level.mapSize.height; y++) {
        for (let x = 0; x < level.mapSize.width; x++) {
            const tile = document.createElement("div");
            tile.className = "tile";
            tile.dataset.x = x;
            tile.dataset.y = y;

            const layers = level.worldData
                .filter(d => d.x === x && d.y === y)
                .sort((a, b) => a.layer - b.layer);

            layers.forEach(data => {
                const imgLayer = document.createElement("div");
                
                if (data.isCoin) {
                    imgLayer.className = "coin-layer";
                    tile.dataset.coin = "true";
                } else {
                    imgLayer.className = "layer";
                    imgLayer.style.backgroundImage = `url('images/Tiles/tile_${data.img}.png')`;
                }

                if (data.isSolid) tile.dataset.solid = "true";
                tile.appendChild(imgLayer);
            });

            if (x === level.finish.x && y === level.finish.y) {
                tile.classList.add("finish-tile");
            }
            game.appendChild(tile);
        }
    }

    // Gegner erstellen
    level.enemies.forEach((en, index) => {
        const enDiv = document.createElement("div");
        enDiv.className = "enemy";
        enDiv.id = `enemy-${index}`;
        enDiv.style.backgroundImage = `url('images/Tiles/tile_${en.img}.png')`;
        game.appendChild(enDiv);
    });

    // Spieler erstellen
    const p = document.createElement("div");
    p.id = "player";
    game.appendChild(p);
    
    renderPlayer();

    if (level.enemies.length > 0) moveEnemies(level.enemies);
}

// --- Darstellung ---
function renderPlayer() {
    const pElement = document.getElementById("player");
    if (pElement) {
        pElement.style.transform = `translate(${playerPos.x * tileSize}px, ${playerPos.y * tileSize}px)`;
    }
}

// --- Status-Prüfung ---
function checkGameStatus(levelEnemies) {
    const level = getCurrentLevel();
    const currentTile = document.querySelector(`.tile[data-x="${playerPos.x}"][data-y="${playerPos.y}"]`);

    if (currentTile && currentTile.dataset.coin === "true") {
        delete currentTile.dataset.coin;
        const coinVisual = currentTile.querySelector(".coin-layer");
        if (coinVisual) coinVisual.remove();
        
        score++;
        updateUI();
    }

    // 1. Gegner-Kollision (Macht "Hard Reset" auf Level 1)
    const hit = levelEnemies.find(en => Math.round(en.x) === playerPos.x && Math.round(en.y) === playerPos.y);
    if (hit) {
        currentLevelIndex = 0; 
        playerPos = { x: 1, y: 1 };
        score = 0; 
        keys = {}; 
        updateUI();
        showLevelTitle("GAME OVER - START BEI LEVEL 1");
        initGame();
        renderAxes();
        return;
    }

    // 2. Ziel-Erkennung
    if (playerPos.x === level.finish.x && playerPos.y === level.finish.y) {
        nextLevel();
    }
}


// --- Level-Logik & КИНОФИНАЛ ---
function nextLevel() {
    keys = {}; // Stop Bewegung
    
    if (window.allLevels && currentLevelIndex < window.allLevels.length - 1) {
        currentLevelIndex++;
        playerPos = { x: 1, y: 1 };
        showLevelTitle("LEVEL " + (currentLevelIndex + 1));
        initGame();
        renderAxes();
    } else {
        // --- НАДЁЖНЫЙ КИНОФИНАЛ (ИСПРАВЛЕННЫЙ ДЛЯ ХОСТИНГА) ---
        
        // КРИТИЧЕСКИ ВАЖНО: Останавливаем движение врагов, чтобы они не убили игрока во время кино!
        if (enemyInterval) clearInterval(enemyInterval);
        
        const overlay = document.getElementById("cinema-overlay");
        const creditsText = document.getElementById("movie-credits");
        
        if (overlay && creditsText) {
            // 1. Прячем элементы интерфейса игры (используем принудительный !important через JS)
            const scoreDisplay = document.getElementById("score-display");
            const interfaceContainer = document.querySelector(".interface-container");
            const levelBanner = document.getElementById("level-banner");
            
            if (scoreDisplay) scoreDisplay.style.setProperty("display", "none", "important");
            if (interfaceContainer) interfaceContainer.style.setProperty("display", "none", "important");
            if (levelBanner) levelBanner.style.setProperty("display", "none", "important");

            // 2. Полностью сбрасываем анимацию, удаляя класс и заставляя браузер пересчитать стили
            creditsText.classList.remove("run");
            void creditsText.offsetWidth; // Магия JS: заставляет браузер забыть старую анимацию на хостинге

            // 3. Собираем имена детей из массива уровней
            let designersHTML = window.allLevels ? 
                window.allLevels.map((lvl, idx) => `<div class='role'>Level ${idx + 1} Designer</div><div>${lvl.author || "Anonym"}</div>`).join("") 
                : "<div>Die ganze Klasse!</div>";

            // 4. Заполняем титры текстом
            creditsText.innerHTML = `
                <br><br>
                <h2>VIKTORIA!</h2>
                <div class="role">Hauptdarsteller (Hero)</div>
                <div>Matino das Eichhörnchen</div>
                
                ${designersHTML}
                
                <div class="role">Publisher</div>
                <div>Vercel & GitHub</div>
                
                <br><br>
                <h2>DANKE FÜRS SPIELEN!</h2>
            `;

            // 5. Показываем чёрный экран
            overlay.style.setProperty("display", "flex", "important");
            
            // 6. ЗАПУСК КИНОТИТРОВ
            setTimeout(() => {
                creditsText.classList.add("run");
            }, 100);

            // 7. Возврат к игре после окончания фильма (через 14 секунд)
            setTimeout(() => {
                overlay.style.setProperty("display", "none", "important");
                creditsText.classList.remove("run");
                
                // Возвращаем интерфейс на место
                if (scoreDisplay) scoreDisplay.style.setProperty("display", "block", "");
                if (interfaceContainer) interfaceContainer.style.setProperty("display", "grid", "");
                
                // Полный сброс параметров для новой игры
                currentLevelIndex = 0;
                playerPos = { x: 1, y: 1 };
                score = 0; 
                updateUI();
                initGame();
                renderAxes();
            }, 14000);
        }
    }
}

// --- Gegner-Bewegung ---
function moveEnemies(levelEnemies) {
    enemyInterval = setInterval(() => {
        levelEnemies.forEach((en, index) => {
            if (en.type === 'patrol') {
                en[en.axis] += en.dir;
                if (Math.abs(en[en.axis] - en.startPos) >= en.range) en.dir *= -1;
            }
            const el = document.getElementById(`enemy-${index}`);
            if (el) el.style.transform = `translate(${en.x * tileSize}px, ${en.y * tileSize}px)`;
        });
        checkGameStatus(levelEnemies);
    }, 400);
}

// --- Steuerung ---
document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

setInterval(() => {
    const level = getCurrentLevel();
    let nx = playerPos.x, ny = playerPos.y;

    if (keys["ArrowUp"]) ny--;
    if (keys["ArrowDown"]) ny++;
    if (keys["ArrowLeft"]) nx--;
    if (keys["ArrowRight"]) nx++;

    const tile = document.querySelector(`.tile[data-x="${nx}"][data-y="${ny}"]`);
    if (tile && tile.dataset.solid !== "true") {
        playerPos = { x: nx, y: ny };
        renderPlayer();
        checkGameStatus(level.enemies);
    }
}, 150);

// --- UI-Elemente ---
function renderAxes() {
    const level = getCurrentLevel();
    const xA = document.getElementById("x-axis");
    const yA = document.getElementById("y-axis");
    xA.innerHTML = ""; yA.innerHTML = "";

    xA.style.setProperty('--cols', level.mapSize.width);
    yA.style.setProperty('--rows', level.mapSize.height);

    for (let x = 0; x < level.mapSize.width; x++) {
        const d = document.createElement("div"); d.className = "axis-cell"; d.innerText = x; xA.appendChild(d);
    }
    for (let y = 0; y < level.mapSize.height; y++) {
        const d = document.createElement("div"); d.className = "axis-cell"; d.innerText = y; yA.appendChild(d);
    }
}

function showLevelTitle(text) {
    let banner = document.getElementById("level-banner");
    if (!banner) {
        banner = document.createElement("div");
        banner.id = "level-banner";
        document.body.appendChild(banner);
    }
    banner.innerText = text;
    banner.classList.remove("show");
    void banner.offsetWidth; // Reset Animation
    banner.classList.add("show");
    
    if (banner.dataset.timeoutId) clearTimeout(Number(banner.dataset.timeoutId));
    let tId = setTimeout(() => banner.classList.remove("show"), 2500);
    banner.dataset.timeoutId = tId;
}

function updateUI() {
    let scoreDisplay = document.getElementById("score-display");
    if (!scoreDisplay) {
        scoreDisplay = document.createElement("div");
        scoreDisplay.id = "score-display";
        document.body.appendChild(scoreDisplay);
    }
    scoreDisplay.innerHTML = "💰 Münzen: " + score;
}

// Start
initGame();
renderAxes();
updateUI();
