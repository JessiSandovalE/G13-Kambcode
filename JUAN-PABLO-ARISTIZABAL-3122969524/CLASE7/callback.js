//**********TAREA CLASE 7******************************* */

//*************************Callbacks en Manejo de Datos:
//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    //Suma de los numeros para guardarlo en resultado
    let suma = 0
    numeros.forEach((item) => {
        suma += item
    });
    callback(suma)
  }
 
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
console.log({resultado}); // Debería imprimir 15
});

//**************************Callbacks para Filtrar Elementos de un Arreglo:
//Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    let numero = []
    arreglo.forEach((item)=>{
        if(callbackFiltro(item)){
            numero.push(item)
        }
    })
    return numero
  }
  
  //const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log('Números pares: ',numerosPares); // Debería imprimir [2, 4]


//************************Callbacks: Filtrar Números Pares
// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    // Tu codigo acá
    let numerosPar = []
    numeros.forEach(item => {
        if(item % 2 === 0){
            numerosPar.push(item)
        }
    })
    callback(numerosPar)
    
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log({numerosPares})
  }
  
  // Array de números de ejemplo
  const numerosP = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numerosP, mostrarPares);


//****************************Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
    //Vuelo Bogota - Madrid: 7000ms (7 horas)
    //Vuelo Madrid - Frankfurt: 2000ms (2 horas)
    //Vuelo Frankfurt - Seul: 10000ms (10 horas)
    //Llegada a Seul

    const vueloBogotaMadrid = (callback) => {
        console.log('Estoy en bogotá.........')
        setTimeout(()=>{
            console.log('Vuelo Bogotá - madrid, me demoré 7 horas')
            callback()
        },7000)
    }

    const vueloMadridFrankfurt = (callback) => {
        console.log('Llegué a Madrid.........')
        setTimeout(()=>{
            console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas')
            callback()
        },2000)
    }

    const vueloFrankfurtSeul = (callback) => {
        console.log('Llegué a Frankfurt.........')
        setTimeout(()=>{
            console.log('Vuelo Frankfurt - Seul, me demoré 10 horas')
            console.log('Llegué a Seul')
            callback()
        },10000)
        
    }

    vueloBogotaMadrid(()=>{
        vueloMadridFrankfurt(()=>{
            vueloFrankfurtSeul(()=>{
                
            })
        })
    })
