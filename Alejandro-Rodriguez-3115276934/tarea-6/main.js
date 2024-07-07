// Dado el siguiente array de números: ============================================================================================

let numeros = [1, 2, 3, 4, 5];
let resultado =[];
// Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.
for (let i=0; i <= numeros.length; i++){
resultado.push(i*2)
}
console.log(resultado) 

//==========================================================================================================================================

// Dado el siguiente array de objetos que representan productos:
// Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
];
let menorPrecio = productos[0];
for(let i = 0; i < productos.length; i++){
    if(productos[i].precio < menorPrecio.precio){
        menorPrecio = productos[i]
    }
}
console.log(menorPrecio); 

// ================================================================================================================================================

// Dado el siguiente array de objetos que representan estudiantes:
// Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for (let i = 0; i < estudiantes.length; i++) {
    const suma = estudiantes[i].edad + 1;
    estudiantes[i].edad = suma;
}
console.log(estudiantes)  

// ======================================================================================================================================================

// Dado el siguiente array de objetos que representan libros:
// Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.

let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },

];
const clasificaLibro=[];
for (let i = 0; i < libros.length; i++) { 
    if(libros[i].titulo.includes("El")){
        clasificaLibro.push(libros[i])
    }
}
console.log(clasificaLibro) 

// Dados los siguientes arrays de frutas:
// Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

 let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];
for (let i = 0; i < frutas2.length; i++) {
    frutas1.push(frutas2[i]);
    }

console.log(frutas1) 
