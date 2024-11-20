const nombre= prompt("ingrese su nombre")
const edad=  Number(prompt("ingrese su edad"))
const promedio= Number(prompt("ingrese su promedio"))
const esRegular= prompt("eres regular (si/no)").toLocaleLowerCase () === "si";
const cantidadMateriaAprobadas= Number(prompt("cuales materias aprobo"))
const esBecado= prompt("tienes beca (si/no)").toLocaleLowerCase () === "si";

if (edad<18){
    console.log("Eres menor de edad no te puedes registar.");
} else if (promedio<6){
    console.log("no cumples con el promdeio minimo.");
} else if(!esRegular){
    console.log("te debes registrar como regular.");
} else if (!esBecado){
    console.log("puedes soliciar para una beca.");
} else{
    console.log ("cumples con todos los requisitos.");
}