// TAREA 6 Repaso manipulacion de objetos y arrays

// Ejercicio bucle for con arrays

let numeros = [1, 2, 3, 4, 5];
let multiplicadoPorDos = [];

for (i = 0; i < numeros.length; i++) {
  let porDos = numeros[i] * 2;
  multiplicadoPorDos.push(porDos);
}

console.log(multiplicadoPorDos);

// Ejercicio busqueda en arrays de objetos

let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];

let productoMasBarato = productos[0];

for (let i = 1; i < productos.length; i++) {
  if (productos[i].precio < productoMasBarato.precio) {
    productoMasBarato = productos[i];
  }
}

console.log(
  `El producto más barato es: ${productoMasBarato.nombre} con un precio de $${productoMasBarato.precio}`
);

// Ejercicio de modificacion de propiedades de objetos en un array

let estudiantes = [
  { nombre: "Juan", edad: 20 },
  { nombre: "María", edad: 22 },
  { nombre: "Pedro", edad: 19 },
];
// Metodo 1
for (let i = 0; i < estudiantes.length; i++) {
  estudiantes[i].edad += 1;
}
console.log(estudiantes);

// Metodo 2
estudiantes.forEach((masUno) => (masUno.edad += 1));
console.log(estudiantes);

// Ejercicio de filtrado de arrays de objetos

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];

let contieneEl = [];

for (let i = 0; i < libros.length; i++) {
  if (libros[i].titulo.includes("El")) {
    contieneEl.push(libros[i]);
  }
}

console.log(contieneEl);

// Ejercicio de concatenacion de arrays

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for (let i = 0; i < frutas2.length; i++) {
  frutas1.push(frutas2[i]);
}

console.log(frutas1);
