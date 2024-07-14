//Tarea 6: Repaso manipulación de objetos y arrays

//Ejercicio de Bucle For con Arrays:

//Dado el siguiente array de números:

  let numeros = [1, 2, 3, 4, 5];
  let newArray = [];
//Utiliza un bucle for para multiplicar cada número por 2 y almacenar el resultado en un nuevo array. Luego, imprime el nuevo array.

for(let i = 0; i < numeros.length; i++){
    newArray.push(numeros[i]*2)
}

console.log(newArray);
console.log("______________________________________________________________________________________________________________")

//Ejercicio de Búsqueda en Arrays de Objetos:

//Dado el siguiente array de objetos que representan productos:

  
  let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 50 },
  ];
  

//Utiliza un bucle for para encontrar el producto con el precio más bajo. Luego, imprime el nombre y el precio de ese producto.

let precioBajo = productos[0];

for(let a = 1; a < productos.length; a++){
  if (productos[a].precio < precioBajo.precio){
    precioBajo = productos[a];
  }
}

console.log("El producto con el menor precio es: ", precioBajo.nombre , "Con un precio de: ", precioBajo.precio);
console.log("______________________________________________________________________________________________________________")


//Ejercicio de Modificación de Propiedades de Objetos en un Array:

//Dado el siguiente array de objetos que representan estudiantes:

  let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];


//Utiliza un bucle for para incrementar la edad de cada estudiante en 1 año. Luego, imprime el array modificado.

for(let g = 0; g < estudiantes.length; g++){
    let suma = estudiantes[g].edad + 1;
    estudiantes[g].edad = suma
    
  }
  console.log("Array sumando +1 a la edad")
  console.log(estudiantes)
  console.log("______________________________________________________________________________________________________________")

  //Ejercicio de Filtrado de Arrays de Objetos:

//Dado el siguiente array de objetos que representan libros:

 
  let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];


//Utiliza un bucle for para encontrar todos los libros cuyo título contenga la palabra "El". Luego, imprime estos libros.

console.log("Los libros que contienen El son: ")
  for (let h = 0; h < libros.length; h++){

    if(libros[h].titulo.includes("El")){
        console.log(libros[h].titulo)
    }
    
  }

  console.log("______________________________________________________________________________________________________________")


  //Ejercicio de Concatenación de Arrays:

//Dados los siguientes arrays de frutas:

  
  let frutas1 = ["Manzana", "Plátano", "Naranja"];
  let frutas2 = ["Fresa", "Uva", "Piña"];


//Utiliza un bucle for para concatenar frutas2 al final de frutas1. Luego, imprime el array resultante.

for(let k = 0; k < frutas2.length; k++){
    frutas1.push(frutas2[k])
    
}

console.log(frutas1)
console.log("______________________________________________________________________________________________________________")