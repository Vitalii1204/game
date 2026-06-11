window.allLevels = [];

function addLevelFromChild(name) {
    // Wir speichern die aktuellen Werte der Variablen in das Array
    window.allLevels.push({
        levelName: name,
        mapSize: JSON.parse(JSON.stringify(mapSize)),
        worldData: JSON.parse(JSON.stringify(worldData)),
        enemies: JSON.parse(JSON.stringify(enemies)),
        finish: typeof levelConfig !== 'undefined' ? levelConfig.finish : { x: 15, y: 10 }
    });
}