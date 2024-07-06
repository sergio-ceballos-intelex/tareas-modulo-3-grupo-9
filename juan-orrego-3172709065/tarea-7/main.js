/* 1. genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos
*/
const mensaje = (num) => console.log(`---PUNTO ${num}---`);
mensaje(1);

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const prodStock = productos.filter((prod) => prod.stock > 0);
const prodNames = productos.map((prod) => prod.nombre);

// Con forEach
let total = 0;
productos.forEach((element) => {
    element = element.precio
    total += element
    return total
})

// Con .reduce
const totalReduce = productos.reduce((total, prod) => total + prod.precio, 0);

console.log("Productos en Stock: ", prodStock)
console.log("Nombres de los productos: ", prodNames)
console.log("Precio total de todos los productos: ", total)
console.log("Precio total de todos los productos (optimizado): ", totalReduce)