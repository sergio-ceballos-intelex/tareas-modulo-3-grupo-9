const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];
const productosEnStock = productos.filter((producto) => producto.stock > 0);
console.log(productosEnStock);
// Output: [{ nombre: "Camiseta", precio: 20, stock: 10 }, { nombre: "Pantalón", precio: 30, stock: 5 }, { nombre: "Bufanda", precio: 15, stock: 8 }]
// nuevo array con map
const nombresDeProductos = productos.map((producto) => producto.nombre);
console.log(nombresDeProductos);
// Output: ["Camiseta", "Pantalón", "Zapatos", "Bufanda"]
//forEach para rrecorrer el array y calcular el precio
let precioTotal = 0;
productos.forEach((producto) => {
  if (producto.stock > 0) {
    precioTotal += producto.precio * producto.stock;
  }
});
console.log(`El precio total de los productos disponibles es: ${precioTotal}`);
// Output: El precio total de los productos disponibles es: 470
