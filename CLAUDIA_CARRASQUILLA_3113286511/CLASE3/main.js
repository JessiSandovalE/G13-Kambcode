//Script que muestra en consola los números del 1-50 :)

const numberList = [];

for (let i = 1; i <= 2000; i++) {
    let n = i.toString();
    if (n.startsWith('2')) {
        console.log('Número: ', i)
    }
}

