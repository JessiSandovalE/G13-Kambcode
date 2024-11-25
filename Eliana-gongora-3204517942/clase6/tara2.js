const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

const nombre2=estudiantes.find((estudiantes) => estudiantes.nombre === "Juan" )
console.log(nombre2)

estudiantes.forEach((estudiantes,posicion)=>{
    if(posicion===0){
        estudiantes.edad=25;
    }
})
 console.log(estudiantes)

 