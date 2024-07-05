//Ejercicio de bucle For con Arrays:
let numeros = [1, 2, 3, 4, 5];
let newArray = []

for(let i = 0; i < numeros.length; i++){
    newArray.push(numeros[i] * 2)
}
console.log(newArray)

//Ejercicio de busqueda en Arrays de Objetos:
let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];

let productoBarato = productos[0];

for (let number = 1; number < productos.length; number++) {
    if (productos[number].precio < productoBarato.precio){
        productoBarato = productos[number];
    }
}
console.log(`El producto más barato es ${productoBarato.nombre} con un precio de ${productoBarato.precio}`);

// Ejercicio de Modificación de Propiedades de Objetos en un Array:
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },  
];

for(let inicio = 0; inicio < estudiantes.length; inicio++){
    estudiantes[inicio].edad++;
}
console.log(estudiantes);

//Ejercicio de Filtrado de Arrays de Objetos:
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
];
let libroSeleccionado = [];

for(let num = 0; num < libros.length; num++){
    if(libros[num].titulo.startsWith("El")){
        libroSeleccionado.push(libros[num]);
    }
}
console.log(libroSeleccionado);

//Ejercicio de Concatenación de Arrays:
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let cont = 0; cont < frutas2.length; cont++){
    frutas1.push(frutas2[cont]);
}
console.log(frutas1)