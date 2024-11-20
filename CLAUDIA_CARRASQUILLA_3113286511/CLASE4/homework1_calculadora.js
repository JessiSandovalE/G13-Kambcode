//* --------- Programa que permite realizar la operación entre dos números  ------------ *//


let number1 = 3;
let number2 = 8
let operation = '/';
let resultado = 0;

if(operation == '+') {
    resultado = number1 + number2
}else if (operation == '-'){
    resultado = number1 - number2
}else if (operation == '*'){
    resultado = number1 * number2
}else if (operation == '/'){
    resultado = number1 / number2
}else{
    resultado = 'Ingrese una operación valida';
    
}

console.log(resultado)
