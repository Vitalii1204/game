// --- map2.js (Прокачанная версия от ИИ) ---

// 1. Größe der Karte
mapSize = { width: 20, height: 20 };

// 2. Dekorationen, Hindernisse und Münzen
worldData = [
    // --- ПЕРИМЕТР / ВНЕШНИЕ СТЕНЫ ---
    // Левая и правая границы лабиринта
    { x: 0, y: 0, img: '0081', layer: 1, isSolid: true },
    { x: 0, y: 19, img: '0081', layer: 1, isSolid: true },
    { x: 19, y: 0, img: '0081', layer: 1, isSolid: true },
    
    // --- ЗОНА 1: НАЧАЛЬНЫЙ ЛАБИРИНТ (Слева сверху) ---
    { x: 1, y: 1, img: '0049', layer: 0, isSolid: false }, // Безопасный старт (Песок)
    { x: 2, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 3, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 4, y: 2, img: '0081', layer: 1, isSolid: true },
    { x: 4, y: 3, img: '0081', layer: 1, isSolid: true },
    { x: 4, y: 4, img: '0081', layer: 1, isSolid: true },
    
    // Секретная монетка в тупике сверху
    { x: 3, y: 1, layer: 1, isCoin: true }, 

    // --- ЗОНА 2: ЦЕНТРАЛЬНЫЙ КОРИДОР И ДЕКОР ---
    { x: 7, y: 4, img: '0114', layer: 1, isSolid: true }, // Каменное препятствие
    { x: 8, y: 10, img: '0014', layer: 1, isSolid: true }, // Дерево/Куст
    { x: 11, y: 13, img: '0062', layer: 1, isSolid: true },
    
    // --- ЗОНА 3: БОЛЬШАЯ СТЕНА (Твоя оригинальная стена-забор) ---
    { x: 4, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 5, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 6, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 7, y: 14, img: '0078', layer: 1, isSolid: true }, // Угловой элемент забора
    { x: 8, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 9, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 10, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 11, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 12, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 13, y: 14, img: '0081', layer: 1, isSolid: true }, // Конец стены

    // Монетки за забором (нужно обойти врага, чтобы забрать их!)
    { x: 6, y: 15, layer: 1, isCoin: true },
    { x: 10, y: 15, layer: 1, isCoin: true },

    // --- ЗОНА 4: ОПАСНЫЙ ПУТЬ К ФИНИШУ (Справа снизу) ---
    { x: 15, y: 15, img: '0051', layer: 1, isSolid: true },
    { x: 16, y: 16, img: '0060', layer: 1, isSolid: true },
    { x: 17, y: 17, img: '0063', layer: 1, isSolid: true },
    
    // Длинная защитная стена перед финишем (заставляет игрока маневрировать)
    { x: 18, y: 13, img: '0080', layer: 1, isSolid: true },
    { x: 17, y: 13, img: '0080', layer: 1, isSolid: true },
    { x: 16, y: 13, img: '0081', layer: 1, isSolid: true },
    { x: 15, y: 13, img: '0081', layer: 1, isSolid: true },
    
    // Монетка-приманка прямо над финишем в опасной близости от статического врага
    { x: 19, y: 11, layer: 1, isCoin: true },
    { x: 19, y: 19, layer: 1, isCoin: true } // Твоя монетка в самом углу
]; 

// 3. Умные и опасные враги
enemies = [
    // Твой оригинальный патрульный (ходит по горизонтали x: от 8 до 11)
    { x: 8, y: 8, img: '0050', type: 'patrol', axis: 'x', range: 3, startPos: 8, dir: 1 },
    
    // НОВЫЙ патрульный (охраняет коридор перед финишем, ходит по вертикали y: от 14 до 17)
    { x: 14, y: 14, img: '0050', type: 'patrol', axis: 'y', range: 3, startPos: 14, dir: 1 },
    
    // Твой статический враг-засада (стоит прямо возле прохода к финишу)
    { x: 12, y: 12, img: '0051', type: 'static' }
];

// 4. Финишная черта
levelConfig = { finish: { x: 19, y: 15, img: '0074' } };
