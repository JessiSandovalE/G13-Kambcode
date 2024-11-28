/*------------------------------------------------------------------------------------------*/
/*-----------------------------------  HOMEWORK CLASE 6  -----------------------------------*/
/*------------------------------------------------------------------------------------------*/

//Punto 1
console.log('Punto 1:')
console.log('')

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

//Nuevo array con los productos que hay en stock:
const stockProducts = productos.filter(productos => productos.stock > 0);

console.log('Los productos en stock son: ', stockProducts)

//Array con solo los nombres de los productos:
const nameProducts = productos.map((item) => {
    return {
        nombre: item.nombre
    }
})

console.log('Los nombres de los productos son: ', { nameProducts })

//Calcular el precio total de los productos
let totalValueProducts = 0;
let totalProducts = 0;
let totalProductsTemp = 0;

for (let i = 0; i < productos.length; i++) {
    totalProducts = productos[i].precio * productos[i].stock;
    totalValueProducts += totalProducts;
}

console.log('El valor total de todos los productos disponibles es: ', totalValueProducts)

//Punto 2
console.log('')
console.log('/*------------------------------------------------------*/')
console.log('Punto 2:')
console.log('')

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

//Impresión del nombre del segundo estudiante
console.log('El nombre del segundo estudiante es: ', estudiantes[1].nombre)

//Actualizar la edad del primer estudiante
estudiantes[0].edad = 25;

console.log('Los datos actualizados del primer estudiante son: ', estudiantes[0]);

//Punto 3
console.log('')
console.log('/*------------------------------------------------------*/')
console.log('Punto 3:')
console.log('');

//Calculo de la suma de los estudiantes
let ageTotalStudents = 0;


estudiantes.forEach(function (sumAgeStudents) {
    ageTotalStudents += sumAgeStudents.edad;
})

let averageAgeStudents = ageTotalStudents / estudiantes.length;

console.log('La suma de las edades de los estudiante es:', ageTotalStudents)
console.log('El promedio de la edad de los estudiantes es:', averageAgeStudents)

//Punto 4
console.log('')
console.log('/*------------------------------------------------------*/')
console.log('Punto 4:')
console.log('');

const students = [
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

//Búsqueda del estudiante con promedio más alto
let highestAverageCurrent = students[0].promedio;
const highestAverageStudent = students.filter((average) => {
    if (average.promedio > highestAverageCurrent) {
        highestAverageCurrent = average.promedio
    }
});

console.log('el promedio más alto es: ', highestAverageCurrent)

//Impresión de los datos del estudiante con el promedio más alto
const highestAverageValue = students.filter(value => value.promedio === highestAverageCurrent)
console.log('Los datos del estudiante con el promedio más alto son: ', highestAverageValue)

//Filtrar estudiantes mayores de 20 años
const olderStudents = students.filter((value) => value.edad > 20)

console.log('Los estudiantes mayores son: ', olderStudents)