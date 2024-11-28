/*------------------------------------------------------------------------------------------*/
/*-----------------------------------  HOMEWORK CLASE 7  -----------------------------------*/
/*------------------------------------------------------------------------------------------*/


//Ejercicio 1
console.log('<------------------------------------------------->')
console.log('<-----------------  Ejercicio 1  ----------------->')
console.log('<------------------------------------------------->')

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    let sumNumbers = 0;
    for (let i = 0; i < numeros.length; i++) {
        sumNumbers += numeros[i];
    }
    callback(sumNumbers)
}

const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
    console.log('La suma de todos los números del arreglo es: ', resultado); // Debería imprimir 15
});


//Ejercicio 2
console.log('<------------------------------------------------->')
console.log('<-----------------  Ejercicio 2  ----------------->')
console.log('<------------------------------------------------->')

function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    let resultado = [];

    for(let i = 0; i < arreglo.length; i++){
        if(callbackFiltro(arreglo[i]) ){
            resultado.push(arreglo[i])
        }    
    }    

    return resultado;
}

const numbers = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numbers, function (number) {
    console.log('valor numero: ', number)
    return number % 2 === 0;
});
console.log('Array nuevo con números pares', numerosPares); // Debería imprimir [2, 4]


//Ejercicio 3
console.log('<------------------------------------------------->')
console.log('<-----------------  Ejercicio 3  ----------------->')
console.log('<------------------------------------------------->')

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    // Tu codigo acá
    const resultadoPares = numeros2.filter(number2 => number2 % 2 === 0)
    callback(resultadoPares)
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
    // Tu codigo acá
    console.log('El array de números pares es: ', numerosPares)
}

// Array de números de ejemplo
const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros2, mostrarPares)


//Ejercicio 4
console.log('<------------------------------------------------->')
console.log('<-----------------  Ejercicio 4  ----------------->')
console.log('<------------------------------------------------->')

//Simular vuelo desde Colombia hasta Corea del Sur

setTimeout(() => {
    console.log("Estoy en Bogotá");
    console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
}, 7000);
setTimeout(() => {
    console.log("Llegué a Madrid");
    console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
}, 9000);
setTimeout(() => {
    console.log("Llegué a Frankfurt");
    console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
    console.log("Llegué a Seul");
}, 19000);

