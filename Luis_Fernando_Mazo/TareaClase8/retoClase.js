// Variables
let comportamiento = true;
let calificaciones = true;

// Funciones con promesas
function getComportamiento() {
  return new Promise((resolve, reject) => {
    if (comportamiento) {
      resolve("El comportamiento es bueno");
    } else {
      reject("El comportamiento es malo");
    }
  });
}

function getCalificaciones() {
  return new Promise((resolve, reject) => {
    if (calificaciones) {
      resolve("Las calificaciones son buenas");
    } else {
      reject("Las calificaciones son malas");
    }
  });
}

// Función con async/await y Promise.all
async function getResultados() {
  try {
    const resultados = await Promise.all([getComportamiento(), getCalificaciones()]);
    console.log(resultados);
  } catch (error) {
    console.error(error);
  }
}

// Llamada a la función
getResultados();