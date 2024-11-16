//TAREA CLASE 5

//Ejercicio de Bucle For con Arrays:
//Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
let numeros = [1, 2, 3, 4, 5];
const numerosDoble = []
for(let i = 0; i < numeros.length; i++){
    numerosDoble.push(numeros[i]*2)
}
console.log({numerosDoble})

//Ejercicio de Búsqueda en Arrays de Objetos:
//Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  let productFind = []
  let precioProd = productos[0].precio;
  
  for (let i=0; i <productos.length; i++){
    if(productos[i].precio <= precioProd){
        precioProd = productos[i].precio
        productFind = productos[i]
    }
  }
  console.log({productFind})

  //Ejercicio de Modificación de Propiedades de Objetos en un Array:
  //Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.
  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  estudiantes.forEach((item, )=>{
    item.edad+=1
   })
  console.log('Estudiantes con edad aumentada: ',estudiantes)


  //Ejercicio de Filtrado de Arrays de Objetos:
  //Dado el siguiente array de objetos que representan libros:
  //Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  let librosConEl = []
  libros.forEach((item)=>{
    if(item.titulo.includes('El')){
        librosConEl.push(item)
    }
  })
  console.log({librosConEl})

    //Ejercicio de Concatenación de Arrays:
    //Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.
    let frutas1 = ["Manzana", "Plátano", "Naranja"];
    let frutas2 = ["Fresa", "Uva", "Piña"];
    
    frutas2.forEach((item)=> {
        frutas1.push(item)
    })
    console.log('Frutas concatenado: ',frutas1)