// Ejercicio de Bucle For con Arrays:

let numeros = [1, 2, 3, 4, 5];

const numMultiplicados = [];

for (i=0 ; i<numeros.length; i++){
    numMultiplicados.push(numeros[i]*2);
}

console.log(numMultiplicados);

// Ejercicio de Búsqueda en Arrays de Objetos:

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let productoMasBajo = productos[0].precio;
let nombreProductoMasBajo = productos[0].nombre;

for (i=0; i<productos.length; i++){    
    if(productos[i].precio < productoMasBajo){
        productoMasBajo = productos[i].precio;
        nombreProductoMasBajo = productos[i].nombre;
    }
    
}

console.log(nombreProductoMasBajo, productoMasBajo);

// Ejercicio de Modificación de Propiedades de Objetos en un Array

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];


  for (i=0; i<estudiantes.length; i++){
    estudiantes[i].edad+=1;
  }

  console.log(estudiantes);

 // Ejercicio de Filtrado de Arrays de Objetos

 let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
    { titulo: "El amor en los tiempos del cólera", autor: "Gabriel García Márquez" },
  ];
  
  for (let i = 0; i < libros.length; i++) {
    if (libros[i].titulo.includes("El")) {
      console.log(`Título: ${libros[i].titulo}, Autor: ${libros[i].autor}`);
    }
  }

  // Ejercicio de Concatenación de Arrays:

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (i=0; i<frutas2.length; i++){
    frutas1.push(frutas2[i]);
}

console.log(frutas1)