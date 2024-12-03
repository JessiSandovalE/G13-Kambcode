const products = [
    {
        name: "Laptop",
        price: 1000, stock: 5
    },

    {
        name: "Mouse",
        price: 25, stock: 0
    },

    {
        name: "Keyboard",
        price: 75, stock: 3
    },

    {
        name: "Monitor",
        price: 200, stock: 2

    }
];

const productsEnStock = products.filter(product => product.stock > 0);
console.log("Productos en stock:", productsEnStock);

const actualizarPrecios = products.map(product => {
    return { ...product, price: product.price * 1.10 };

});

console.log("Precios actualizados:", actualizarPrecios);

const keyboard = products.find(product => product.name === "Keyboard");
console.log("Producto encontrado (Keyboard):", keyboard);

const productoAgotado = products.some(product => product.stock === 0);
console.log("¿Hay un producto agotado?", productoAgotado);

const productosMasde20 = products.every(product => product.price > 20);
console.log("¿Todos los productos cuestan más de 20?", productosMasde20);

console.log("Nombres de los productos:");
products.forEach(product => {
    console.log(product.name);
});