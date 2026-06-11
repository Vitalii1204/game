// 1. Größe der Karte
 mapSize = { width: 25, height: 25 };

// 2. Dekorationen und Hindernisse
// img: Bildnummer '0001', '0002' usw.
// layer: 0 (Boden), 1 (Objekt oben drauf)
// isSolid: true (Hindernis), false (begehbar)
 worldData = [
    { x: 3, y: 8, img: '0005', layer: 1, isSolid: true },
    { x: 4, y: 8, img: '0005', layer: 1, isSolid: true }, // Beispiel: Sand
    { x: 4, y: 7, img: '0005', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 4, y: 5, img: '0005', layer: 1, isSolid: true },
    { x: 5, y: 5, img: '0005', layer: 1, isSolid: true }, // Beispiel: Stein//n
    { x: 6, y: 5, img: '0005', layer: 1, isSolid: true },
    { x: 6, y: 7, img: '0005', layer: 1, isSolid: true }, // Beispiel: Sand
    { x: 10, y: 5, img: '0005', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 8, img: '0005', layer: 1, isSolid: true },
    { x: 8, y: 5, img: '0005', layer: 1, isSolid: true }, // Beispiel: Stein//n
    { x: 3, y: 8, img: '0005', layer: 1, isSolid: true },
    { x: 7, y: 7, img: '0005', layer: 1, isSolid: true }, // Beispiel: Sand
    { x: 1, y: 9, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 2, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 3, y: 9, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 4, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 5, y: 9, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 6, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 7, y: 9, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 10, y: 9, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 11, y: 9, img: '0009', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 9, img: '0011', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 17, y: 9, img: '0044', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 18, y: 9, img: '0045', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 9, img: '0046', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 16, y: 9, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 15, y: 9, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 9, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 9, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 2, y: 5, img: '0009', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 3, y: 5, img: '0011', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 5, img: '0011', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 0, y: 5, img: '0009', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 7, img: '0015', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 9, y: 7, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 10, y: 7, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 11, y: 7, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 5, img: '0015', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 9, y: 5, img: '0015', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 0, y: 9, img: '0015', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 6, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 10, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 11, img: '0077', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 12, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 13, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 10, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 11, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 11, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 10, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 9, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 6, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 5, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 4, y: 13, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 3, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 2, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 13, img: '0078', layer: 1, isSolid: false },  // Beispiel: Baum
    { x: 0, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 0, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 4, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 7, y: 3, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 2, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 3, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 0, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 0, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 2, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 3, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 4, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 5, y: 17, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 6, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 9, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 10, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 0, y: 17, img: '0126', layer: 1, isSolid: true }, // Beispiel: Baum
    { x: 7, y: 3, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 2, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 3, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 13, y: 17, img: '0006', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 17, img: '0008', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 15, y: 17, img: '0009', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 16, y: 17, img: '0011', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 16, img: '0021', layer: 1, isSolid: false },  // Beispiel: Baum
    { x: 13, y: 16, img: '0023', layer: 1, isSolid: false },  // Beispiel: Baum
    { x: 12, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 11, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 10, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 9, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 8, y: 14, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 15, y: 8, img: '0019', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 15, y: 7, img: '0019', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 15, y: 6, img: '0017', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 16, y: 6, img: '0029', layer: 1, isSolid: false },  // Beispiel: Baum
    { x: 16, y: 5, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 14, y: 8, img: '0018', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 16, y: 8, img: '0020', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 7, img: '0018', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 16, y: 7, img: '0020', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 21, y: 9, img: '0016', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 20, y: 9, img: '0017', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 11, y: 0, img: '0080', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 0, img: '0081', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 13, y: 0, img: '0081', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 0, img: '0082', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 1, img: '0083', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 2, img: '0080', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 15, y: 2, img: '0081', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 16, y: 2, img: '0081', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 17, y: 2, img: '0082', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 12, y: 2, img: '0017', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 11, y: 2, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 10, y: 2, img: '0015', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 9, y: 2, img: '0016', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 13, img: '0030', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 15, y: 13, img: '0032', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 12, y: 7, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 0, y: 14, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 0, y: 15, img: '0029', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 15, img: '0009', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 2, y: 15, img: '0022', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 3, y: 15, img: '0011', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 15, img: '0017', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 6, y: 15, img: '0017', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 17, y: 3, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 17, y: 4, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 17, y: 5, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 13, y: 4, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 14, y: 4, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 12, y: 4, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 7, y: 15, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 6, y: 15, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 10, y: 4, img: '0003', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 1, y: 1, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 1, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 1, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 1, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 1, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 8, y: 1, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 11, y: 1, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 9, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 13, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 6, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 0, y: 2, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 10, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 12, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 11, y: 3, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 9, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 7, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 6, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 6, y: 8, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 0, y: 7, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 14, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 13, y: 8, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 13, y: 7, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 2, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 4, y: 16, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 16, y: 13, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 14, y: 18, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 14, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 6, y: 4, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 5, y: 4, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 10, y: 6, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 11, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 12, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 17, y: 14, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 17, y: 15, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 1, y: 8, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 8, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 6, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 5, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 4, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 0, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 4, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 15, y: 0, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 18, y: 10, img: '0002', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 3, y: 0, img: '0001', layer: 0, isSolid: false },  // Beispiel: Baum 
    { x: 2, y: 0, img: '0001', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 0, y: 1, img: '0001', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 1, y: 4, img: '0001', layer: 0, isSolid: false },  // Beispiel: Baum
    { x: 1, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 2, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 3, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 4, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 5, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 6, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 7, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 8, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 9, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 10, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 11, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 12, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 13, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 14, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 15, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 16, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 17, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 18, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 19, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 20, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 21, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 22, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 23, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 24, y: 20, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 10, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 11, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 19, y: 12, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 19, y: 13, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 14, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 19, y: 15, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 16, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 17, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum 
    { x: 19, y: 18, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    { x: 19, y: 19, img: '0126', layer: 1, isSolid: true },  // Beispiel: Baum
    


    







   { x: 15, y: 10, layer: 1, isCoin: true },
   { x: 13, y: 12, layer: 1, isCoin: true },
   { x: 15, y: 1, layer: 1, isCoin: true },

];  

// 3. Gegner
// type: 'static' (bleibt stehen) oder 'patrol' (läuft hin und her)
// axis: 'x' oder 'y' (Richtung der Patrouille)
 enemies = [
    { x: 8, y: 8, img: '0127', type: 'patrol', axis: 'x', range: 3, startPos: 8, dir: 1 },
    { x: 12, y: 12, img: '0128', type: 'static' },
    { x: 7, y: 1, img: '0129', type: 'patrol', axis: 'y', range: 3, startPos: 7, dir: 1 },
    { x: 5, y: 16, img: '0115', type: 'patrol', axis: 'x', range: 5, startPos: 8, dir: 1 },
    { x: 11, y: 16, img: '0118', type: 'patrol', axis: 'y', range: 3, startPos: 7, dir: 2 },
    { x: 13, y: 1, img: '0119', type: 'static' },
    { x: 11, y: 4, img: '0002', type: 'static' },




];
levelConfig = { finish: { x: 24, y: 24, img: '0074' } };