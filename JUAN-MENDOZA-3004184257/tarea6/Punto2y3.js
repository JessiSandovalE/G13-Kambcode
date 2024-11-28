const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
console.log("Nombre del segundo estudiante:",estudiantes[1].nombre);
estudiantes[0].edad = 25;


console.log("Información del primer estudiante actualizada:", estudiantes[0]);

const sumaEdades = estudiantes.reduce((acumulador, estudiante) => acumulador + estudiante.edad, 0);

const promedioEdades = sumaEdades / estudiantes.length;

console.log("Suma de las edades:",sumaEdades);
console.log("Promedio de las edades:",promedioEdades.toFixed(2));
