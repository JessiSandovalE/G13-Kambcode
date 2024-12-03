// Primer Punto

let numeros = [1, 2, 3, 4, 5];
const resultado = [];

for (let i = 0; i < numeros.length; i++){
    resultado.push(numeros[i] * 2);
}
console.log(resultado);
// Segundo Punto

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let productoBarato = productos[0];

for (i = 0; i < productos.length; i++){
    if (productos[i].precio < productoBarato.precio) {
        productoBarato = productos[i].precio
    }

}
console.log('el producto mas barato es:', productoBarato.nombre,productoBarato.precio)

// Tercer ejercicio

  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for (i = 0; i < estudiantes.length; i++){
    estudiantes[i].edad += 1;  
}

console.log(estudiantes);

// Cuarto punto

  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let tituloConEl = [];
  
for (i = 0; i < libros.length; i++){
    if (libros[i].titulo.startsWith('El')) {
        tituloConEl.push(libros[i]);
    }
}

console.log({ tituloConEl });

// Quinto punto

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++){
    frutas1.push(frutas2[i]);
}

console.log(frutas1)