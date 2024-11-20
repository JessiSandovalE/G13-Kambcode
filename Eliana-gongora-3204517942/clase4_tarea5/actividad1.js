let numero1 = 10;
let numero2= 8;
let operador= "multiplicacion";
let resultado= "";

if(operador=== "suma") {
    resultado=numero1+numero2;

} else if(operador=== "resta"){
    resultado = numero1-numero2

}else if(operador=== "multiplicacion"){
    resultado = numero1*numero2

}else if(operador=== "division"){
    if(numero2 !== 0){
    resultado = numero1/numero2;
}else{
    resultado="no se puede dividir entre 0";
}
} 
console.log("el resultado es:",resultado);