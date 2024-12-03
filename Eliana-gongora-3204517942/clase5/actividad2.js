let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
let masBajo=[] 
 for(let i=1; i < productos.length;i++){
    if(productos[i].precio < masBajo.precio){
        masBajo=productos[i];
    }

 }
 console.log (`el producto barato es: ${masBajo.nombre}, con el precio de ${masBajo.precio}`);
 // profe no entendi muy bien este punto lo hice como pude

