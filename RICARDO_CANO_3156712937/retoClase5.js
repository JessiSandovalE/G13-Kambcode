const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];
const frutasMenosDe6Caracteres = frutas.filter(fruta => fruta.length < 6);
console.log(frutasMenosDe6Caracteres);

const frutasEmpiezanConM = frutas.filter(fruta => fruta.startsWith('m'));
console.log(frutasEmpiezanConM);