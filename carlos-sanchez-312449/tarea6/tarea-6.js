// primer punto 
let numeros = [1, 2, 3, 4, 5];
let resultados = [];

for (let operacion = 0; operacion < numeros.length; operacion++) {
    resultados.push(numeros[operacion] * 2);
}

console.log(resultados);

//segundo punto
let productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
let MasBarato = productos[0];  

for (let objeto = 1; objeto < productos.length; objeto++) {
    if (productos[objeto].precio < MasBarato.precio) {
        MasBarato = productos[objeto];

    }
}
console.log(MasBarato)

// tercer punto

let estudiantes = [
    { nombre: "Juan", edad: 20 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 19 },
  ];
  
  for (let persona= 0; persona < estudiantes.length; persona++) {
        estudiantes[persona].edad++;
  }
  
  console.log(estudiantes)
  
//cuarto punto

let libros = [
    { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
    { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  ];
  
  let El = [];
  
  
  for (let book = 0; book < libros.length; book++) {
      if (libros[book].titulo.includes("El")) {
          El.push(libros[book]);
      }
  }
  
  console.log("Libros cuyo título contiene 'El':");
  console.log(El);
  
//quinto ejercicio

let frutas1 = ["Manzana", "Plátano", "Naranja"];
let frutas2 = ["Fresa", "Uva", "Piña"];

for ( let comida= 0; comida< frutas2.length; comida++){
  frutas1.push(frutas2[comida])
}

console.log("Array resultante después de concatenar:");
console.log(frutas1);


//quinto ejercicio

let frutas1p = ["Manzana", "Plátano", "Naranja"];
let frutas2p = ["Fresa", "Uva", "Piña"];

for ( let comida= 0; comida< frutas2p.length; comida++){
  frutas1.push(frutas2p[comida])
}

console.log("Array resultante después de concatenar:");
console.log(frutas1p)    