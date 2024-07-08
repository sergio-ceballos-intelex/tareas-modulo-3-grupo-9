//Multiplicar los numeros por 2 con un for y un array
// let numeros = [1, 2, 3, 4, 5];
// let numero1=[];

// for(let i=0; i<numeros.length; i++){
//     numero1.push(numeros[i]*2);
// }
// console.log(numero1)

//Bluque para en contrar el presio mas economico 
// let productos = [
//     { nombre: "Camisa", precio: 20 },
//     { nombre: "Pantalón", precio: 30 },
//     { nombre: "Zapatos", precio: 50 },
//   ];

// let economico=productos[0];
// productos.forEach((producto) => {
//     if(producto.precio< economico.precio){
//         economico=producto
//     }
// });
// console.log(economico)

// incrementacion de 1 año 
// let estudiantes = [
//     { nombre: "Juan", edad: 20 },
//     { nombre: "María", edad: 22 },
//     { nombre: "Pedro", edad: 19 },
//   ];
//   for (let i=0; i<estudiantes.length;i++){
//     estudiantes[i].edad++;
//   }
//   console.log (estudiantes)

// Encuenta los libros con "el"
// let libros = [
//     { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//     { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
//     { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
//   ];
//   let libroe=[]
//   for ( let i=0; i<libros.length;i++){
//     if (libros[i].titulo.startsWith("El"))
//         libroe.push(libros[i])
//   }
//   console.log(libroe)

//Ordenar frutas 
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let i = 0; i < frutas2.length; i++){
    frutas1.push(frutas2[i]);
}
console.log(frutas1)