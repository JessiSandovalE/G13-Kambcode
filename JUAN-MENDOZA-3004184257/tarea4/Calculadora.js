let numberA = prompt(" Por favor, ingrese el primer número");
let numberB = prompt("Por favor, ingrese el segundo número");
let op = prompt("Por favor, ingrese la operación matematica que desea realizar(suma,resta,multiplicación o división)").toLowerCase() ;
if(op == "suma" ){
console.log("la suma de los números es " ,numberA + numberB);
}else if(op == "resta"){
console.log("la resta de los números es " ,numberA - numberB);
}else if(op === "division" || "división" ){
console.log("la división de los números es " ,numberA / numberB);
}else if(op == "multiplicacion" || "multiplicación" ){
console.log("la multiplicación de los números es " ,numberA * numberB);
}
