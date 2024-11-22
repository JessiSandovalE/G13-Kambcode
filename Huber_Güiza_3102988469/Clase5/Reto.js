// RETO
// Partiendo de este array de frutas ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']

// 1. Cuales frutas tienen menos de 6 caracteres (length)
// 2. Cuales empiezan por la letra m (starsWith)
// El resultado en cada ejercicio debe ser un array con las frutas que pasaron las condiciones

let frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];
let frutasLess6 = [];
let frutasWithM = [];

for (let i = 0; i < frutas.length; i++){
    if (frutas[i].startsWith('m')) {
        frutasWithM.push(frutas[i]);
    }
}

for (let i = 0; i < frutas.length; i++){
    if (frutas[i].length < 6) {
        frutasLess6.push(frutas[i]);
    }
}

console.log({ frutasWithM });
console.log({ frutasLess6 });
