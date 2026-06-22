//  IMPORTACIÓN: Traemos el paquete de herramientas que creamos
const gestor = require('./notas.js');

console.log(" Iniciando el Gestor de Notas...");

// 1. Agregamos las notas
gestor.agregarNota('Compras', 'Comprar leche, pan y huevos.');
gestor.agregarNota('Estudio', 'Practicar la estructura de Divide and Conquer.');

// 2. Listamos para verificar que se guardaron en 'notas.json'
gestor.listarNotas();

// 3. Borramos una nota específica
gestor.eliminarNota('Compras');

// 4. Volvemos a listar para confirmar que ya no existe
gestor.listarNotas();