//* --------- Programa que permite la gestión de estudiantes  ------------ *//
let message = '';

let student = {
    name: 'Pepito Perez',
    age: 15,
    average: 6,
    isRegular: false,
    approvedSubjects: 6,
    scholarShip: true
}

const managmentStudents = (objectStudent) => {

    if(student.age < 18){
        message = console.log('El estudiante es menor de edad y no puede registrarse')
    }else if(student.average < 6){
        message = console.log('El estudiante no cumple con el promedio mínimo requerido')
    }else if(student.isRegular === false){
        message = console.log('El estudiante debe registrarse como regular')
    }else if(student.scholarShip === false){
        message = console.log('El estudiante puede solicitar una beca')
    }else{
        message = console.log('El estudiante cumple con todos los requisitos')
    }

    return message;
}

managmentStudents(student);

