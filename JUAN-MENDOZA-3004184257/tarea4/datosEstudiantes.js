function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, esBecado) {
    if (edad < 18) {
        return nombre + " es menor de edad y no puede registrarse.";
    }


    if (promedio < 6) {
        return nombre + " no cumple con el promedio mínimo requerido.";
    }


    if (esRegular == false) {
        return nombre + " debe registrarse como regular.";
    }


    if (esBecado == false) {
        return nombre + " puede solicitar una beca.";
    }


    return nombre + " cumple con todos los requisitos.";
}

var nombreEstudiante = "Juan Mendoza";
var edadEstudiante = 20;
var promedioEstudiante = 7.5;
var esRegularEstudiante = true;
var esBecadoEstudiante = false;

var mensaje = verificarEstadoEstudiante(nombreEstudiante, edadEstudiante, promedioEstudiante, esRegularEstudiante, esBecadoEstudiante);

console.log(mensaje);