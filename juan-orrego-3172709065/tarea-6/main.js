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

// 3. incrementa la edad de cada estudiante en 1 año.
mensaje(3);

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
];

for (let i = 0; i < estudiantes.length; i++) {
    const element = estudiantes[i];
    element.edad = element.edad + 1
    console.log(element)
}

// 4. concatenar frutas2 al final de frutas1.
mensaje(4);
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
for (let i = 0; i < frutas2.length; i++) {
    const element = frutas2[i];
    frutas1.push(element)
}

console.log(frutas1)