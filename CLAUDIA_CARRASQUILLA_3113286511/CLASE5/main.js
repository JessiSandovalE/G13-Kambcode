//Ejercicio de Bucle For con Arrays

let numbers = [1, 2, 3, 4, 5]
let newNumbers = [];
let newValue = 0;

for (let i = 0; i < numbers.length; i++){
    newValue = numbers[i] * 2;

    newNumbers.push(newValue)
}
console.log("Impresión ejercicio 1: ", newNumbers);

//Ejercicio de Búsqueda en Arrays de Objetos

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 10 },
    { nombre: "Zapatos", precio: 50 },
  ];

  let minValue = productos[0].precio;

  for(let i = 0; i < productos.length; i++){
    if(productos[i].precio < minValue){
        minValue = productos[i].precio;
    }
  }

  console.log("El menor precios es: ", minValue)

  //Ejercicio de Edad de los estudiantes
  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

    let newage = 0;
  for( let i = 0 ; i < estudiantes.length; i++) {
    estudiantes[i].edad = estudiantes[i].edad + 1        
}

console.log("La nueva edad de los estudiantes es: ", estudiantes)
  
//Ejercicio de Filtrado de Arrays de Objetos

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];

  let newBook = [];

  for(let i = 0; i < libros.length; i++){
    if(libros[i].titulo.indexOf('El') !== -1){
        newBook.push(libros[i].titulo, libros[i].autor);
    }
  }


console.log("Lista de libros con título 'El': ", newBook)


//Ejercicio de Concatenación de Arrays

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let i = 0; i < frutas2.length; i++){
   frutas1.push(frutas2[i]) 
}

console.log("Lista de frutas concatenada: ", frutas1)