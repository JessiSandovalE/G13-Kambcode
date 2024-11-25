//TAREA CLASE 6
//************************************************************************************
//Punto 1: Obteniendo estadisticas de productos: Dado el siguiente array de productos.
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
//Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
const stockProducts = productos.filter((product) => product.stock > 0)
//***console.log(stockProducts)

//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
const namesproducts = productos.map((productos) => productos.nombre)
//***console.log({namesproducts})

//Escribe un programa que calcule el precio total de los productos disponibles, 
//para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
let sumaPrecios = 0
productos.forEach((productos)=> {
    sumaPrecios += productos.precio
})
//***console.log({sumaPrecios})

//**************************************************************************************
//Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes 
//que contenga objetos representando a tres estudiantes. Ejemplo
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
//Imprime en la consola el nombre del segundo estudiante.
const estFind = estudiantes.find((item)=> item.nombre === "Juan")
//***console.log('Segundo Estudiante',estFind.nombre)

//Actualiza la edad del primer estudiante a 25 años. Imprime en la consola
//la información completa del primer estudiante después de la actualización.

estudiantes.find((item)=> {
    if(item.nombre === "Camilo"){
        item.edad = 25
    }})
//***console.log('Estudiantes con edad actualiazada del primer estudiante',estudiantes)

//**************************************************************************************
//Punto 3: Cálculo de Estadísticas Básicas: 
//Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
let sumaEdades = 0
estudiantes.map((estudiante) => {
    sumaEdades += estudiante.edad
})
//***console.log({sumaEdades})
//Calcula el promedio de edad de los estudiantes.
const promedioEdades=sumaEdades/estudiantes.length
//***console.log(`El promedio de las edades = ${promedioEdades}`)

//**************************************************************************************
//Punto 4: Búsqueda y Filtrado de Datos: 
//array
const estudiantes2 = [
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
//Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
//const estudianteProm = estudiantes2.filter((estudiante) => Math.max(estudiante.promedio) )
//console.log(estudianteProm)
//Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

//Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
//Imprime en la consola la información completa de los estudiantes mayores de 20 años.
const estudiantesMayores = estudiantes2.filter((estudiante) => estudiante.edad >= 18 )
console.log('Estudiantes Mayores de edad:',estudiantesMayores)
