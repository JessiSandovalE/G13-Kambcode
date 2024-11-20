// Punto 1: Obteniendo estadisticas de productos

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosExistentes = productos.filter((producto)=> producto.stock > 0 );

console.log(productosExistentes);

const nombreProdutos = productos.map((producto)=> producto.nombre);

console.log(nombreProdutos);

let precioTotal = 0 ;

productos.forEach(element => {
    precioTotal += element.precio * element.stock;
});

console.log(`La suma del precio de todos los productos es de: ${precioTotal}`);

// Punto 2: Acceso y Modificación Básica de Datos

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(`El segundo estudiante es: ${estudiantes[1].nombre}`);

estudiantes[0].edad = 25;

console.log(estudiantes);

// Punto 3: Cálculo de Estadísticas Básicas

let sumaEdades = 0 ;
let promedioEstudiantes = 0 ;

estudiantes.forEach(estudiante => {
    sumaEdades += estudiante.edad;
    promedioEstudiantes += estudiante.promedio;
});

console.log(`La suma de todos los estudianes es: ${sumaEdades}`);
console.log(`El promedio de todos los estudianes es: ${promedioEstudiantes/estudiantes.length}`);

// Punto 4: Búsqueda y Filtrado de Datos

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

  let estudianteProAlto = 0;
  let nombreEstudianteProAlto = "";
  let edadEstudianteProAlto = 0;


//   const promedioMasAlto = 
  
  estudiantes2.forEach((estudiante)=> {estudiante.promedio>estudianteProAlto 
    estudianteProAlto = estudiante.promedio;
    nombreEstudianteProAlto = estudiante.nombre;
    edadEstudianteProAlto = estudiante.edad;
  });

  console.log(`El estudiante con el promedio mas alto es ${nombreEstudianteProAlto} tiene un promedio de ${estudianteProAlto} y su edad ${edadEstudianteProAlto}`);

  const estudiantesMayores = estudiantes2.filter(estudiante => estudiante.edad>20);

  console.log(estudiantesMayores);