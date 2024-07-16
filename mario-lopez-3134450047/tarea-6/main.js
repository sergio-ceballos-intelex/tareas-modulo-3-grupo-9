let numeros = [1, 2, 3, 4, 5];
let new_numeros = []
for(let i=0;i<numeros.length;i++){
    new_numeros.push(numeros[i] * 2)
}
console.log(new_numeros)

//2nd exercise

let productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 30 },
    { nombre: "Zapatos", precio: 5 },
];

//Inicializar variables para el producto con el precio mas bajo

let precioMasBajo =productos[0]

for(let j=0;j<productos.length;j++){
    if(productos[j].precio < precioMasBajo.precio){
        precioMasBajo = productos[j]
    }
}
console.log("El producto más barato es: "+precioMasBajo.nombre+" y tiene un valor de: "+precioMasBajo.precio)

//Exercise 3,Modificacion de propierdades de Objetos en un Array
let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];

for(let y=0;y<estudiantes.length;y++){
    estudiantes[y].edad += 1;    
}
console.log(estudiantes)

//Exercise 4, Filtrado de Array de objetos
let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
let new_libros = []
for(let x=0;x<libros.length;x++){
    if(libros[x].titulo.includes("El")){
        new_libros.push(libros[x])
    }
}
console.log(new_libros)

//Exercise 4th Concatenación de Arrays
let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for(let k=0;k<frutas2.length;k++){
    frutas1.push(frutas2[k])
}

console.log(frutas1)