// 1. Größe der Karte
 mapSize = { width: 20, height: 20 };

// 2. Dekorationen und Hindernisse
// img: Bildnummer '0001', '0002' usw.
// layer: 0 (Boden), 1 (Objekt oben drauf)
// isSolid: true (Hindernis), false (begehbar)
 worldData = [
    { x: 0, y: 0, img: '0005', layer: 0, isSolid: false },
    { x: 0, y: 0, img: '0000', layer: 0, isSolid: false }, // Beispiel: Sand
    { x: 0, y: 3, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein
    { x: 1, y: 3, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 2, y: 3, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein
    { x: 3, y: 3, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 4, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 3, y: 5, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 6, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 8, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 4, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 6, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 7, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 8, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 10, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 9, y: 11, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 12, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 12, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 10, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 15, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 12, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 13, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 14, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 15, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 15, y: 17, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 15, y: 18, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 1, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 2, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 3, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 4, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 1, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 2, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 3, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 4, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 5, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 6, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 5, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 6, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 7, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 8, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 9, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 10, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 7, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 12, y: 8, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 4, y: 3, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 11, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 10, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 11, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 12, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 13, y: 12, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 13, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 13, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 11, y: 12, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 14, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 15, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 16, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 17, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 18, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 19, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 15, y: 19, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 12, y: 11, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 17, y: 16, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 17, y: 17, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 17, y: 18, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 17, y: 19, img: '0126', layer: 1, isSolid: false }, // Beispiel: Stein    
    { x: 18, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 19, y: 14, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    
    { x: 0, y: 0, img: '0126', layer: 1, isSolid: true }, // Beispiel: Stein    










{ x: 19, y: 19, layer: 1, isCoin: true }

];


// 3. Gegner
// type: 'static' (bleibt stehen) oder 'patrol' (läuft hin und her)
// axis: 'x' oder 'y' (Richtung der Patrouille)
 enemies = [
    { x: 8, y: 8, img: '0129', type: 'patrol', axis: 'x', range: 3, startPos: 8, dir: 1 },
    { x: 12, y: 12, img: '0051', type: 'static' },
 { x: 15, y: 15, img: '0127', type: 'patrol', axis: 'x', range: 4, startPos: 15, dir: 1 },

];
levelConfig = { finish: { x: 19, y: 19, img: '0074' } };


