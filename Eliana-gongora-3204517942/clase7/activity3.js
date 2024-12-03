function filterPares(numeros,callback){
    const Npar = numeros.filter(function (numero){
        return numero%2===0;
    });
    callback(Npar);
}
function lookpares(Npar){
    console.log("los numeros pares son estos:",Npar);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
filterPares(numeros,lookpares);