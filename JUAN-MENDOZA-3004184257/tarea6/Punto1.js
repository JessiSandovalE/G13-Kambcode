const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
const productosEnStock = productos.filter(producto => producto.stock > 0);
const nombresDeProductos = productos.map(producto => producto.nombre);


let precioTotal = 0;
productosEnStock.forEach(producto => {
    precioTotal += producto.precio;
});

console.log("Productos en stock:", productosEnStock);
console.log("Nombres de los productos:", nombresDeProductos);
console.log("Precio total de los productos disponibles:", precioTotal);
