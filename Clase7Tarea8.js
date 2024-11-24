// Callbacks en Manejo de Datos:

function sumarArreglo(numeros, callback) {
    const total = numeros.reduce((sum, num) => sum + num, 0);
    callback(total);
  }
  
  const numeros = [1, 2, 3, 4, 5];
  sumarArreglo(numeros, function (resultado) {
    console.log(resultado);
  });

  // Callbacks para Filtrar Elementos de un Arreglo:

  function filtrarArreglo(arreglo, callbackFiltro) {
    const filtrados = arreglo.filter(callbackFiltro);
    return filtrados;
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros1, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares);


  // Callbacks: Filtrar Números Pares: 


function filtrarPares(numeros, callback) {
    const pares = numeros.filter(num => num % 2 === 0);
    callback(pares);
  }
  
  function mostrarPares(numerosPares) {
    console.log('Números pares:', numerosPares);
  }
  
  const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  filtrarPares(numeros3, mostrarPares);


// Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur: 


  function vuelo(desde, hasta, tiempo, callback) {
    console.log(`Vuelo ${desde} - ${hasta}, me demoré ${tiempo}ms`);
    setTimeout(() => {
      callback();
    }, tiempo);
  }
  
  console.log('Estoy en Bogotá');
  
  vuelo('Bogotá', 'Madrid', 7000, () => {
    console.log('Llegué a Madrid');
    vuelo('Madrid', 'Frankfurt', 2000, () => {
      console.log('Llegué a Frankfurt');
      vuelo('Frankfurt', 'Seúl', 10000, () => {
        console.log('Llegué a Seúl');
      });
    });
  }); 