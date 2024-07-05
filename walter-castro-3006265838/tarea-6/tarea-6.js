//* TAREA NUMERO 6  Repaso manipulación de objetos y arrays
// 1. Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array.
//Luego, imprime el nuevo array.
let numeros = [1, 2, 3, 4, 5];

let numeros2 = [];

numeros.forEach((numero) => {
  numeros2.push(numero * 2);
});
console.log(numeros2);

//****************** */
// 2. Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego,
//imprime el nombre y el precio de ese producto.

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 10 },
  
  ];
  
  let productoMasBajo = productos[0];
  productos.forEach((producto) => {
    if (producto.precio < productoMasBajo.precio) {
      productoMasBajo = producto;
    }
  });
  console.log(productoMasBajo);

  //****************** */
// 3. Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  let estudiantes2 = [];
  estudiantes.forEach((estudiante) => {
    estudiantes2.push(estudiante.edad + 1);
  });
  console.log(estudiantes2);

  //****************** */
// 4.Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  let librosInician=[]
  libros.forEach(libro => {    
     if(libro.titulo.startsWith('El')){
       librosInician.push(libro)
     }       
  });
  console.log(librosInician)

  //****************** */
// 5. Utiliza un bucle for para concatenar frutas20 al final de frutas10. Luego, imprime el array resultante.

let frutas10 = ["Manzana", "Plátano", "Naranja"];
let frutas20 = ["Fresa", "Uva", "Piña"];

let newFrutas=[]
frutas10.forEach(fruta => {
      newFrutas.push(fruta)   
});
frutas20.forEach(fruta => {
    newFrutas.push(fruta)
 });
console.log(newFrutas)