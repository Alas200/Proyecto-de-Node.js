const fs = require('fs');
const filePath = './notas.json';

/**
 * Agrega una nueva nota al archivo JSON.
 */
function agregarNota(titulo, contenido) {
  let notas = [];

  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    notas = JSON.parse(data);
  }

  const nuevaNota = { titulo, contenido };
  notas.push(nuevaNota);

  fs.writeFileSync(filePath, JSON.stringify(notas, null, 2));
  console.log(`✅ Nota "${titulo}" agregada con éxito.`);
}

/**
 * Lista todas las notas guardadas en la consola.
 */
function listarNotas() {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);
    
    console.log('\n📋 --- TUS NOTAS ---');
    notas.forEach((nota, index) => {
        console.log(`${index + 1}. [${nota.titulo}]: ${nota.contenido}`);
    });
    console.log('--------------------\n');
  } else {
    console.log('❌ No hay notas guardadas.');
  }
}

/**
 * Elimina una nota específica según su título.
 */
function eliminarNota(titulo) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf8');
    const notas = JSON.parse(data);

    const notasRestantes = notas.filter((nota) => nota.titulo !== titulo);

    fs.writeFileSync(filePath, JSON.stringify(notasRestantes, null, 2));
    console.log(`🗑️ Nota con título "${titulo}" eliminada.`);
  } else {
    console.log('❌ No hay notas para eliminar.');
  }
}

//  EXPORTACIÓN: Hacemos públicas nuestras herramientas
module.exports = {
    agregarNota,
    listarNotas,
    eliminarNota
};