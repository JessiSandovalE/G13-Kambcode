// Tarea 8: Callbacks

// ejercicio1 

function sumarArreglo(numeros, callback) {
    let suma = 0;    
    numeros.forEach((numero) => {
      suma += numero;
    });
    
    callback(suma);
  }
  
  const numeros = [1, 2, 3, 4, 5,6,7];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
  });

// ejercicio 2


  function filtrarArreglo(arreglo, callbackFiltro) {    
    const resultado = [];
    arreglo.forEach((elemento) => {
      if (callbackFiltro(elemento)) {
        resultado.push(elemento);
      }
    });
    
    return resultado;
  }
  
  const numeros2 = [1, 2, 3, 4, 5, 6, 10];
  const numerosPares = filtrarArreglo(numeros2, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); 

  // ejercicio 3
 
function filtrarPares(numeros, callback) {
    const numerosPares2 = numeros.filter((numero) => {
      return numero % 2 === 0;
    });
    
    callback(numerosPares2);
  }
  
  function mostrarPares(numerosPares2) {
    console.log("Números pares:", numerosPares2);
  }
    
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];    
  filtrarPares(numeros3, mostrarPares);

// Ejercicio 4

function simularVuelo(ciudadOrigen, ciudadDestino, duracion, callback) {
    setTimeout(() => {
      console.log(`Vuelo ${ciudadOrigen} - ${ciudadDestino}, me demoré ${duracion / 1000} horas`);
      callback(ciudadDestino);
    }, duracion);
  }
  
  // Función principal para simular el viaje
  function viajar() {
    console.log("Estoy en Bogota");
    
    // Vuelo Bogota - Madrid
    simularVuelo("Bogota", "Madrid", 7000, (ciudad) => {
      console.log(`Llegué a ${ciudad}`);
      
      // Vuelo Madrid - Frankfurt
      simularVuelo("Madrid", "Frankfurt", 2000, (ciudad) => {
        console.log(`Llegué a ${ciudad}`);
        
        // Vuelo Frankfurt - Seul
        simularVuelo("Frankfurt", "Seul", 10000, (ciudad) => {
          console.log(`Llegué a ${ciudad}`);
        });
      });
    });
  }
  
  // Llamar a la función principal para iniciar el viaje
  viajar();