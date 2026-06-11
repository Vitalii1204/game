// --- map2.js (Максимально заполненная и плотная версия) ---

// 1. Размер карты
mapSize = { width: 20, height: 20 };

// 2. Полное заполнение карты блоками, стенами и монетами
worldData = [
    // --- ЗОНА 1: СТАРТОВЫЙ ЛАБИРИНТ (Строки 0-5) ---
    { x: 1, y: 1, img: '0049', layer: 0, isSolid: false }, // Старт (Песок)
    { x: 0, y: 0, img: '0081', layer: 1, isSolid: true },
    { x: 1, y: 0, img: '0080', layer: 1, isSolid: true },
    { x: 2, y: 0, img: '0080', layer: 1, isSolid: true },
    { x: 2, y: 1, img: '0081', layer: 1, isSolid: true },
    { x: 2, y: 2, img: '0081', layer: 1, isSolid: true },
    { x: 0, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 0, y: 3, img: '0014', layer: 1, isSolid: true }, // Дерево-тупик
    { x: 1, y: 3, layer: 1, isCoin: true },                // Монетка на старте
    
    // Перегородки сверху
    { x: 4, y: 0, img: '0081', layer: 1, isSolid: true },
    { x: 4, y: 1, img: '0081', layer: 1, isSolid: true },
    { x: 4, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 5, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 6, y: 2, img: '0081', layer: 1, isSolid: true },
    { x: 5, y: 0, layer: 1, isCoin: true },                // Секрет вверху
    
    // --- ЗОНА 2: ЦЕНТРАЛЬНЫЕ ЗАКУТКИ И ПРЕГРАДЫ (Строки 4-10) ---
    { x: 0, y: 5, img: '0114', layer: 1, isSolid: true },
    { x: 1, y: 5, img: '0114', layer: 1, isSolid: true },
    { x: 2, y: 5, img: '0081', layer: 1, isSolid: true },
    { x: 4, y: 4, img: '0014', layer: 1, isSolid: true },
    { x: 4, y: 5, img: '0014', layer: 1, isSolid: true },
    { x: 5, y: 5, img: '0080', layer: 1, isSolid: true },
    { x: 6, y: 5, img: '0080', layer: 1, isSolid: true },
    { x: 7, y: 5, img: '0081', layer: 1, isSolid: true },
    
    // Монеты в коридорах
    { x: 3, y: 4, layer: 1, isCoin: true },
    { x: 6, y: 4, layer: 1, isCoin: true },
    { x: 8, y: 3, layer: 1, isCoin: true },

    // Вертикальные стены по центру
    { x: 9, y: 1, img: '0081', layer: 1, isSolid: true },
    { x: 9, y: 2, img: '0081', layer: 1, isSolid: true },
    { x: 9, y: 3, img: '0081', layer: 1, isSolid: true },
    { x: 9, y: 4, img: '0080', layer: 1, isSolid: true },
    
    { x: 11, y: 3, img: '0062', layer: 1, isSolid: true },
    { x: 12, y: 3, img: '0062', layer: 1, isSolid: true },
    { x: 13, y: 3, img: '0081', layer: 1, isSolid: true },
    { x: 13, y: 4, img: '0081', layer: 1, isSolid: true },
    { x: 13, y: 5, img: '0081', layer: 1, isSolid: true },
    { x: 12, y: 5, layer: 1, isCoin: true },

    // Правый верхний блок стен
    { x: 16, y: 0, img: '0080', layer: 1, isSolid: true },
    { x: 16, y: 1, img: '0081', layer: 1, isSolid: true },
    { x: 16, y: 2, img: '0081', layer: 1, isSolid: true },
    { x: 17, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 18, y: 2, img: '0080', layer: 1, isSolid: true },
    { x: 19, y: 2, img: '0014', layer: 1, isSolid: true },
    { x: 18, y: 1, layer: 1, isCoin: true },

    // --- ЗОНА 3: СЛОЖНЫЙ ЗИГЗАГ (Строки 8-13) ---
    { x: 2, y: 8, img: '0080', layer: 1, isSolid: true },
    { x: 3, y: 8, img: '0080', layer: 1, isSolid: true },
    { x: 4, y: 8, img: '0081', layer: 1, isSolid: true },
    { x: 5, y: 8, img: '0081', layer: 1, isSolid: true },
    { x: 6, y: 8, img: '0014', layer: 1, isSolid: true },
    { x: 7, y: 8, img: '0014', layer: 1, isSolid: true },
    { x: 8, y: 8, img: '0080', layer: 1, isSolid: true },
    
    // Монеты вокруг центрального патруля
    { x: 1, y: 9, layer: 1, isCoin: true },
    { x: 5, y: 9, layer: 1, isCoin: true },
    { x: 9, y: 9, layer: 1, isCoin: true },

    { x: 11, y: 8, img: '0081', layer: 1, isSolid: true },
    { x: 11, y: 9, img: '0081', layer: 1, isSolid: true },
    { x: 11, y: 10, img: '0081', layer: 1, isSolid: true },
    { x: 12, y: 10, img: '0080', layer: 1, isSolid: true },
    { x: 13, y: 10, img: '0080', layer: 1, isSolid: true },
    { x: 14, y: 10, img: '0080', layer: 1, isSolid: true },
    { x: 15, y: 10, img: '0081', layer: 1, isSolid: true },
    { x: 15, y: 9, img: '0081', layer: 1, isSolid: true },
    { x: 15, y: 8, img: '0081', layer: 1, isSolid: true },
    { x: 13, y: 9, layer: 1, isCoin: true },

    // --- ЗОНА 4: БОЛЬШОЙ ЗАБОР И ТУПИКИ (Строки 13-17) ---
    { x: 0, y: 13, img: '0080', layer: 1, isSolid: true },
    { x: 1, y: 13, img: '0080', layer: 1, isSolid: true },
    { x: 2, y: 13, img: '0081', layer: 1, isSolid: true },
    { x: 3, y: 13, img: '0081', layer: 1, isSolid: true },
    
    // Твой оригинальный забор, плотно вмонтированный в лабиринт
    { x: 4, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 5, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 6, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 7, y: 14, img: '0078', layer: 1, isSolid: true },
    { x: 8, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 9, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 10, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 11, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 12, y: 14, img: '0080', layer: 1, isSolid: true },
    { x: 13, y: 14, img: '0081', layer: 1, isSolid: true },
    
    // Монетки под забором
    { x: 5, y: 15, layer: 1, isCoin: true },
    { x: 8, y: 15, layer: 1, isCoin: true },
    { x: 11, y: 15, layer: 1, isCoin: true },

    // Стены перед финишной прямой
    { x: 15, y: 13, img: '0051', layer: 1, isSolid: true },
    { x: 15, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 15, y: 15, img: '0081', layer: 1, isSolid: true },
    { x: 16, y: 16, img: '0060', layer: 1, isSolid: true },
    { x: 17, y: 17, img: '0063', layer: 1, isSolid: true },
    
    // Финальный зигзаг-коридор
    { x: 18, y: 12, img: '0080', layer: 1, isSolid: true },
    { x: 17, y: 12, img: '0080', layer: 1, isSolid: true },
    { x: 16, y: 12, img: '0081', layer: 1, isSolid: true },
    
    { x: 19, y: 10, layer: 1, isCoin: true },
    { x: 19, y: 14, layer: 1, isCoin: true },
    { x: 19, y: 19, layer: 1, isCoin: true } // Монетка в самом углу
]; 

// 3. Динамичные враги
enemies = [
    // Враг 1: Патрулирует центр (по оси X от 3 до 7 клетки)
    { x: 3, y: 7, img: '0050', type: 'patrol', axis: 'x', range: 4, startPos: 3, dir: 1 },
    
    // Враг 2: Патрулирует проход за забором (по оси Y от 11 до 14 клетки)
    { x: 14, y: 11, img: '0050', type: 'patrol', axis: 'y', range: 3, startPos: 11, dir: 1 },
    
    // Враг 3: НОВЫЙ быстрый охранник на финишной прямой (по оси X от 16 до 19 клетки)
    { x: 16, y: 18, img: '0050', type: 'patrol', axis: 'x', range: 3, startPos: 16, dir: 1 },
    
    // Враг 4: Засада (статичный, закрывает прямой путь, заставляя обходить)
    { x: 10, y: 10, img: '0051', type: 'static' }
];

// 4. Финишная черта
levelConfig = { finish: { x: 19, y: 15, img: '0074' } };
