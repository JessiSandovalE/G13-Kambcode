function filtrarArreglo(arreglo, callbackFiltro) {
   const resultado= [];
   for(let i=0; i<arreglo.length;i++){
    const elem= arreglo[i];

    if (callbackFiltro(elem)){
      resultado.push(elem);
    }
   }
   return resultado;
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosPares = filtrarArreglo(numeros, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares); // Debería imprimir [2, 4]