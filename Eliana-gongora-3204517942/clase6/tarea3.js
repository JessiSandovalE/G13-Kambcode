const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
let suma=0;
let promedio=3
estudiantes.forEach((estudiantes)=>{
   suma += estudiantes.edad;
   promedio= suma/3
});
console.log(`la suma es de:${suma}`)
console.log(`el promdeio es de:${promedio}`)