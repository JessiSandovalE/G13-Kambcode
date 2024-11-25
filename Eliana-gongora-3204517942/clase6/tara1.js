const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const stockMayores= productos.filter(productos => productos.stock>0);
console.log(stockMayores);

const soloNombre=
productos.map(productos => productos.nombre)
console.log(soloNombre)