// Punto 1: Obteniendo estadisticas de productos:

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);

const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

const precioTotal = productos.reduce((total, producto) => {
    return total + (producto.stock > 0 ? producto.precio * producto.stock : 0);
}, 0);

console.log(`Precio total de productos en stock: ${precioTotal}`);


// Punto 2: Acceso y Modificación Básica de Datos:

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log(estudiantes[1].nombre);

estudiantes[0].edad = 25;

console.log(estudiantes[0]);

// Punto 3: Cálculo de Estadísticas Básicas:

const sumaEdades = estudiantes.reduce((total, estudiante) => total + estudiante.edad, 0);
console.log(`Suma de edades: ${sumaEdades}`);

const promedioEdad = sumaEdades / estudiantes.length;
console.log(`Promedio de edad: ${promedioEdad}`);


// Punto 4: Búsqueda y Filtrado de Datos:


const estudianteConMayorPromedio = estudiantes.reduce((mejor, estudiante) => {
    return (estudiante.promedio > mejor.promedio) ? estudiante : mejor;
});

console.log(`Estudiante con mayor promedio: ${estudianteConMayorPromedio.nombre}, Edad: ${estudianteConMayorPromedio.edad}`);

const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);
console.log('Estudiantes mayores de 20 años:', estudiantesMayores);
