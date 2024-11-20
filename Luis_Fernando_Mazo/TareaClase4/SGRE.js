let estudianteConsulta = "Fernanda";

const estudiantes = [
{
    nombre : "Luis",
    edad : 18 ,
    promedio : 7.7 ,
    esRegular : true ,
    cantidadMateriasAprobadas : 15 ,
    esBecado : true,
},
{
    nombre : "Andres",
    edad : 21 ,
    promedio : 6.5 ,
    esRegular : true ,
    cantidadMateriasAprobadas : 23 ,
    esBecado : false,
},
{
    nombre : "Fernanda",
    edad : 18 ,
    promedio : 7.9 ,
    esRegular : false,
    cantidadMateriasAprobadas : 19,
    esBecado : true,
},
{
    nombre : "Sara",
    edad : 17 ,
    promedio : 4.7 ,
    esRegular : false ,
    cantidadMateriasAprobadas : 11 ,
    esBecado : false,
}
];

let estudianteRegistrado = 0;

estudiantes.forEach(estudiante => {    
    if (estudiante.nombre === estudianteConsulta) {
        estudianteRegistrado = 1;            
        let edad = estudiante.edad;
        let promedio = estudiante.promedio;
        let esRegular = estudiante.esRegular;
        let esBecado = estudiante.esBecado;
        function evaluador (edad, promedio, esRegular, esBecado) {
            if(edad<18){
               console.log(`El estudiante es menor de edad y no puede registrarse.`) 
            }else if(promedio<6){
                console.log(`El estudiante no cumple con el promedio mínimo requerido.`)
            }else if(esRegular==false){
                console.log(`El estudiante debe registrarse como regular.`)
            }else if(esBecado==false){
                console.log(`El estudiante puede solicitar una beca`)
            }else{
                console.log(`El estudiante cumple con todos los requisitos.`)
            }            
        };
        evaluador(edad, promedio, esRegular, esBecado);
    }
  });

//Muestra el error si el estudiante no existe

  if(estudianteRegistrado==0){
    console.log(`Error: El estudiante no existe`)    
  }

