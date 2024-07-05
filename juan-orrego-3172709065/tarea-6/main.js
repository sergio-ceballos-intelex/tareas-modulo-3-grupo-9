// 1. multiplicar cada número por 2 y almacenar el resultado en un nuevo array.
const mensaje = (num) => console.log(`---PUNTO ${num}---`);

mensaje(1);
let numeros = [1, 2, 3, 4, 5];
let numPorDos = []

for (let i = 1; i <= numeros.length; i++) {
    numPorDos.push((i)*2)
}

console.log(numPorDos);

// 2. Encontrar el producto con el precio más bajo. imprime el nombre y el precio de ese producto.
mensaje(2);
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];

let precioM = productos[0].precio;
let nombreProM = productos[0].nombre;

for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    if(element.precio < precioM){
        precioM = element.precio;
        nombreProM = element.nombre;
    }
}

console.log(`${nombreProM}, es el producto con el precio más bajo, tiene un precio de: ${precioM}`);