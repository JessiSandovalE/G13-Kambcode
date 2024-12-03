//   Ejercicio

// const products = [
//     { name: "Laptop", price: 1000, stock: 5 },
//     { name: "Mouse", price: 25, stock: 0 },
//     { name: "Keyboard", price: 75, stock: 3 },
//     { name: "Monitor", price: 200, stock: 2 }
// ];

//  1. Usar filter para obtener los productos en Stock > 0
//  2. Usar map para aumentar el precio de cada producto un 10%
//  3. Usar Find para encontrar el procducto Keyboard
//  4. Usar Some para verifivar si hay producto agotado
//  5. Usar un every para validar si los productos cuestan mas de 20
//  6. Recorrer con forEach e imprimir los nombres de los productos

const products = [
    { name: "Laptop", price: 1000, stock: 5 },
    { name: "Mouse", price: 25, stock: 0 },
    { name: "Keyboard", price: 75, stock: 3 },
    { name: "Monitor", price: 200, stock: 2 }
];

let productsStock = products.filter((item) => item.stock > 0);
let productsUp = products.map((item) => { 
    return {
        ...item,
        price: item.price * 1.1
    }
})
let procductsFind = products.find((item) => item.name === "Keyboard");
let procductsVerificar = products.some((item) => item.stock === 0);
let procductsEvery = products.every((item) => item.price > 20);

console.log('Los productos con stock son:',{ productsStock });
console.log('El aumento de precio es:',{ productsUp });
console.log('El producto encontrado es:',{ procductsFind });
console.log('Hay productos agotados?',{ procductsVerificar });
console.log('Productos con un valor mayor a 20:', { procductsEvery });
products.forEach(item => console.log(item.name))

// Primer punto

const productos = [
    
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },

];

let stock = productos.filter((item) => item.stock > 0)
console.log('Los productos en Stock son:', { stock })

let name = productos.map((item) => item.nombre)
console.log('Nombre de los Productos:', { name })

// Segundo punto

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log('Nombre del estudiante:',estudiantes[1].nombre);
console.log('Actualizacion de edad:',estudiantes[0].edad = 25);
console.log('Informacion del estudiante:',estudiantes[0]);

// Tercer punto

const estudiantes2 = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

let sumaEdades = 0;
estudiantes2.forEach(estudiante => {
    sumaEdades += estudiante.edad;
});

const promedioEdades = sumaEdades / estudiantes2.length;

console.log("Suma de las edades:", sumaEdades);
console.log("Promedio de edad:", promedioEdades.toFixed(2));

// Cuarto punto

const estudiantes3 = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Cali",
  },
  {
    nombre: "Pedro",
    edad: 23,
    promedio: 82,
    genero: "Masculino",
    carrera: "Derecho",
    ciudad: "Barranquilla",
  },
  {
    nombre: "Laura",
    edad: 24,
    promedio: 88,
    genero: "Femenino",
    carrera: "Arquitectura",
    ciudad: "Cartagena",
  },
  {
    nombre: "Carlos",
    edad: 20,
    promedio: 75,
    genero: "Masculino",
    carrera: "Ingeniería de Sistemas",
    ciudad: "Santa Marta",
  },
  {
    nombre: "Sofía",
    edad: 22,
    promedio: 95,
    genero: "Femenino",
    carrera: "Psicología",
    ciudad: "Pereira",
  },
];


const estudianteTop = estudiantes3.reduce((top, estudiante) => {
  return estudiante.promedio > top.promedio ? estudiante : top;
}, estudiantes[0]);
console.log(`Estudiante con el promedio más alto: ${estudianteTop.nombre}, Edad: ${estudianteTop.edad}`);


const estudiantesMayores = estudiantes3.filter(estudiante => estudiante.edad > 20);

console.log("Estudiantes mayores de 20 años:");
estudiantesMayores.forEach(estudiante => console.log(estudiante));