// 1. Größe der Karte
mapSize = { width: 20, height: 20 };

// 2. Dekorationen und Hindernisse
// img: Bildnummer '0001', '0002' usw.
// layer: 0 (Boden), 1 (Objekt oben drauf)
// isSolid: true (Hindernis), false (begehbar)
worldData = [
    { x: 0, y: 6, img: '0125', layer: 0, isSolid: false },
    { x: 1, y: 1, img: '0049', layer: 0, isSolid: false }, // Beispiel: Sand
    { x: 2, y: 2, img: '0049', layer: 1, isSolid: true },
    { x: 3, y: 3, img: '0049', layer: 1, isSolid: true },
    { x: 4, y: 4, img: '0049', layer: 1, isSolid: true },
    { x: 5, y: 5, img: '0049', layer: 1, isSolid: true },
    { x: 6, y: 6, img: '0049', layer: 1, isSolid: true },
    { x: 7, y: 7, img: '0049', layer: 1, isSolid: true },
    { x: 8, y: 8, img: '0049', layer: 1, isSolid: true },
    { x: 2, y: 4, img: '0049', layer: 1, isSolid: true },
    { x: 9, y: 4, img: '0049', layer: 1, isSolid: true },
    { x: 7, y: 4, img: '0114', layer: 1, isSolid: true },
    { x: 13, y: 14, img: '0081', layer: 1, isSolid: true },
    { x: 8, y: 10, img: '0014', layer: 1, isSolid: true },
    { x: 11, y:13, img: '0062', layer: 1, isSolid: true },
    { x: 17, y: 17, img: '0063', layer: 1, isSolid: true },
    { x: 16, y: 16, img: '0060', layer: 1, isSolid: true },
    { x: 15, y: 15, img: '0051', layer: 1, isSolid: true },
    { x: 15, y: 14, img: '0061', layer: 1, isSolid: true },
    { x: 15, y: 13, img: '0061', layer: 1, isSolid: true },  
     { x: 14, y: 13, img: '0078', layer: 1, isSolid: true },   
    { x: 11, y: 11, img: '0049', layer: 1, isSolid: true },
     { x: 14, y: 13, img: '0078', layer: 1, isSolid: true },   
    { x: 14, y: 14, img: '0061', layer: 1, isSolid: true },
     { x: 14, y: 13, img: '0078', layer: 1, isSolid: true },   
    { x: 11, y: 11, img: '0049', layer: 1, isSolid: true },
     { x: 14, y: 13, img: '0078', layer: 1, isSolid: true },   
    { x: 11, y: 11, img: '0049', layer: 1, isSolid: true },
     { x: 12, y: 14, img: '0081', layer: 1, isSolid: true },   
    { x: 11, y: 14, img: '0081', layer: 1, isSolid: true },
     { x: 12, y: 14, img: '0080', layer: 1, isSolid: true },   
    { x: 10, y: 14, img: '0080', layer: 1, isSolid: true },
     { x: 9, y: 14, img: '0081', layer: 1, isSolid: true },   
    { x: 8, y: 14, img: '0080', layer: 1, isSolid: true },
     { x: 7, y: 14, img: '0078', layer: 1, isSolid: true },   
    { x: 6, y: 14, img: '0081', layer: 1, isSolid: true },
 { x: 5, y: 14, img: '0081', layer: 1, isSolid: true },   
    { x: 4, y: 14, img: '0081', layer: 1, isSolid: true },
    
    
    
    ]; 
    
    
    
    
    
    
    
    
enemies = [
    { x: 8, y: 8, img: '0050', type: 'patrol', axis: 'x', range: 3, startPos: 8, dir: 1 },
    { x: 12, y: 12, img: '0051', type: 'static' }
];

levelConfig = { finish: { x: 19, y: 19, img: '0074' } };
