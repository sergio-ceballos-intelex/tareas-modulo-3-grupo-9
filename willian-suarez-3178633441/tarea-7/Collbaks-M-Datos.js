
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
  ];
  
  //Generar un nuevo array con solo los nombres de los productos
  const nombres = productos.map(producto => producto.nombre);
console.log(nombres);//[ 'Camiseta', 'Pantalón', 'Zapatos', 'Bufanda' ]

//Calcular el precio total de los productos disponibles

const precioTotalProductosDisponibles = productos.reduce((total, producto) => total + producto.precio, 0);
console.log(precioTotalProductosDisponibles);//115

//Generar un nuevo array que contenga los productos en stock

const productosEnStock = productos.filter(producto => producto.stock > 0);
console.log(productosEnStock);

// { nombre: 'Camiseta', precio: 20, stock: 10 },
// { nombre: 'Pantalón', precio: 30, stock: 5 },
// { nombre: 'Bufanda', precio: 15, stock: 8 }
  








