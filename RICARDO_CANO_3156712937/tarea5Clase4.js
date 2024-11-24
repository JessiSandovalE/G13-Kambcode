function calculadora() {
    const num1 = parseFloat(prompt("Digita el primer número:"));
    const num2 = parseFloat(prompt("Digita el segundo número:"));
    const operacion = prompt("Digita la operación (suma, resta, multiplicación, división):").toLowerCase();

    let resultado;

    if (operacion === "suma") {
        resultado = num1 + num2;
    } else if (operacion === "resta") {
        resultado = num1 - num2;
    } else if (operacion === "multiplicación") {
        resultado = num1 * num2;
    } else if (operacion === "división") {
        if (num2 !== 0) {
            resultado = num1 / num2;
        } else {
            alert("Error: No se puede dividir por cero.");
            return;
        }
    } else {
        alert("Operación no válida.");
        return;
    }

    alert(`El resultado de la ${operacion} es: ${resultado}`);
}

calculadora();

// 2. Sistema de Gestión de Registro de Estudiantes

const nombre = "Ricardo";
const edad = 37;
const promedio = 9.5;
const esRegular = true;
const cantidadMateriasAprobadas = 5;
const esBecado = false;

if (edad < 18) {
    console.log(`${nombre} es menor de edad y no puede registrarse.`);
} else if (promedio < 6) {
    console.log(`${nombre} no cumple con el promedio mínimo requerido.`);
} else if (!esRegular) {
    console.log(`${nombre} debe registrarse como regular.`);
} else if (esRegular && !esBecado) {
    console.log(`${nombre} puede solicitar una beca.`);
} else {
    console.log(`${nombre} cumple con todos los requisitos.`);
}

// 3. Lógica proposicional

const resultado1 = true || true || (false && true) || (false && true && true) || false;
console.log("Resultado Ejercicio 1:", resultado1);


const resultado2 = true && (false || (false && (true && (true || (false && true))))) || (false && (true || false));
console.log("Resultado Ejercicio 2:", resultado2);


const resultado3 = !(!true && (false || (false && !true) || (true && !false))) || (false && true);
console.log("Resultado Ejercicio 3:", resultado3);


