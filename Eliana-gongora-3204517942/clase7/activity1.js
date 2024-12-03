function sumarArreglo(numeros, callback) {
let resultado = 0;
for(let i= 0 ; i < numeros.length;i++){
    resultado += numeros[i]   
}
callback(resultado);
}

const numeros = [1, 2, 3, 4, 5];

sumarArreglo(numeros, function (resultado) {
    console.log(resultado); // Debería imprimir 15
  });  
  

