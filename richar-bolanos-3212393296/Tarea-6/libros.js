let libros = [
  { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes" },
  { titulo: "Cien años de soledad", autor: "Gabriel García Márquez" },
  { titulo: "El aleph", autor: "Jorge Luis Borges" },
];

let librosConEl = [];

for (let libro of libros) {
  if (libro.titulo.toLowerCase().includes("el")) {
    librosConEl.push(libro);
  }
}

console.log(librosConEl);
// [
//   { titulo: "El principito", autor: "Antoine de Saint-Exupéry" },
//   { titulo: "El aleph", autor: "Jorge Luis Borges" },
// ]
