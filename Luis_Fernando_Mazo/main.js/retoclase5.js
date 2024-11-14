const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];

let menorSeis = [];
let empiezanM = [];

frutas.forEach((item) => {
    if(item.length < 6){
        menorSeis.push (item);
    }
    if(item.startsWith('m')){
        empiezanM.push (item);
    }
});

console.log(menorSeis);
console.log(empiezanM);

