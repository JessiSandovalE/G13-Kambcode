let num1 = 4;
let num2 = 5;
let operacion = "multiplicacion"; //Operaciones: suma, resta, division, multiplicacion
let resultado = undefined;


if(operacion==="suma"){
    resultado = num1 + num2;
}else if(operacion==="resta"){
    resultado = num1 - num2;
}else if(operacion==="multiplicacion"){
    resultado = num1 * num2;
}else if(operacion==="division"){
    resultado = num1 / num2;
}else{
    resultado = "No indicaste una operacion arítmetica válida"
}
console.log(resultado);