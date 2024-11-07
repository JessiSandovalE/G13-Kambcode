// for (let numero = 1; numero <= 50; numero++) {
//     console.log(numero);
// }


// for (let numero = 1; numero <= 2000; numero++) {
//     console.log(numero);
// }

for (let numero = 1; numero <= 2000; numero++) {
    let numeroPorCadena = numero.toString();
    if (numeroPorCadena.startsWith('2')) {
        console.log(numero);
    }
}
