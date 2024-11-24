// ### Ejercicio de Bucle For con Arrays:

let numeros = [1, 2, 3, 4, 5];
let numerosMultiplicados = [];

for (let numero = 0; numero < numeros.length; numero++) {
    numerosMultiplicados.push(numeros[numero] * 2);
}
console.log(numerosMultiplicados);

//### Ejercicio de Búsqueda en Arrays de Objetos:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let productoMasBarato = productos[0];

for (let producto = 1; producto < productos.length; producto++) {
    if (productos[producto].precio < productoMasBarato.precio) {
        productoMasBarato = productos[producto];
    }
}

console.log(`Producto más barato: ${productoMasBarato.nombre}, Precio: ${productoMasBarato.precio}`);

//### Ejercicio de Modificación de Propiedades de Objetos en un Array:

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let estudiante = 0; estudiante < estudiantes.length; estudiante++) {
    estudiantes[estudiante].edad += 1;
}

console.log(estudiantes);


//### Ejercicio de Filtrado de Arrays de Objetos:


let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let librosConEl = [];

for (let book = 0; book < libros.length; book++) {
    if (libros[book].titulo.includes("El")) {
        librosConEl.push(libros[book]);
    }
}

console.log(librosConEl); 


//### Ejercicio de Concatenación de Arrays:


let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let fruta = 0; fruta < frutas2.length; fruta++) {
    frutas1.push(frutas2[fruta]);
}

console.log(frutas1);