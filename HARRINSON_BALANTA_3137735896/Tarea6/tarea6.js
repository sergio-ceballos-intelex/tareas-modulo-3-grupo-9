// Tarea 6: Repaso manipulación de objetos y arrays 
// ejecicio 1

// multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
let numeros = [1, 2, 3, 4, 5];
let numerosope = [];

for (let i = 0; i < numeros.length; i++) {
    numerosope.push(numeros[i] * 2);
}
console.log(numerosope);
// ejercicio 2
// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  let productoe = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio< productoe.precio) {
    productoe = productos[i];
  }
}
console.log("el producto con el pracio mas bajo es",productoe.nombre, productoe.precio);

// ejercicio 3
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  for (let i = 0; i < estudiantes.length; i++) {
    estudiantes[i].edad +=1;
  }
  console.log(estudiantes)

//   ejercico 4
// utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  const libros2 = [];
  for (let i = 0; i < libros.length; i++) {
  if (libros[i].titulo.includes("El"))
    libros2.push(libros[i])
  }
  console.log(libros2)

//   ejercicio 3
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);
}

console.log(frutas1);