window.allLevels = window.allLevels || [];

function addLevelFromChild(name, mapSize, worldData, enemies, levelConfig, author) {
    window.allLevels.push({
        name: name,
        mapSize: JSON.parse(JSON.stringify(mapSize)),
        worldData: JSON.parse(JSON.stringify(worldData)),
        enemies: JSON.parse(JSON.stringify(enemies)),
        finish: JSON.parse(JSON.stringify(levelConfig.finish)),
        author: author || "Anonym"
    });
}
