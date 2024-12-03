// Primer punto

function sumarArreglo(numeros, callback) {
    // Usar reduce para sumar todos los números del arreglo
    const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

    // Se llama al callback con el resultado de la suma
    callback(suma);
}

const numeros = [1, 2, 3, 4, 5];

// Llamar a la función con el arreglo y un callback que imprima el resultado
sumarArreglo(numeros, function (resultado) {
    console.log(resultado); 
});

// Segundo punto

function filtrarArreglo(arreglo, callbackFiltro) {
    // Usar filter para crear un nuevo arreglo con los elementos que pasan el filtro
    return arreglo.filter(callbackFiltro);
}

const numeros2 = [1, 2, 3, 4, 5];

// Llama a la función con el arreglo y un callback que filtre números pares
const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
});

console.log(numerosPares); 

// Tercer punto

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
    // Filtrar los números pares usando el método filter
    const numerosPares = numeros.filter(numero => numero % 2 === 0);
    
    // Llama al callback con el resultado
    callback(numerosPares);
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
    console.log("Números pares:", numerosPares);
}

// Array de números de ejemplo
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros, mostrarPares);

// Cuarto punto

// Función que simula un vuelo con un retraso
function simularVuelo(origen, destino, tiempo, callback) {
    console.log(`Vuelo ${origen} - ${destino}, me demoré ${tiempo / 1000} horas`);
    setTimeout(() => {
        console.log(`Llegué a ${destino}`);
        callback();
    }, tiempo);
}

// Simulación del vuelo completo desde Bogotá hasta Seúl
function vueloBogotaSeul() {
    console.log("Estoy en Bogotá");
    
    simularVuelo("Bogotá", "Madrid", 7000, () => {
        simularVuelo("Madrid", "Frankfurt", 2000, () => {
            simularVuelo("Frankfurt", "Seúl", 10000, () => {
                console.log("Llegué a Seúl");
            });
        });
    });
}

// Ejecutar la simulación
vueloBogotaSeul();

