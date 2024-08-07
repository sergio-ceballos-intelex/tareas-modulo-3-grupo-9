const estudiantes = [
  { nombre: "Camilo", edad: 33, promedio: 10 },
  { nombre: "Juan", edad: 30, promedio: 6 },
  { nombre: "Andres", edad: 29, promedio: 8.7 },
];

//  se imprime en la consola el nombre del segundo estudiante
console.log(estudiantes[1].nombre); // Output: Juan

// Se actualiza la edad del primer estudiante a 25 años
estudiantes[0].edad = 25;

// Se imprime en la consola la información completa del primer estudiante después de la actualización
console.log(estudiantes[0]); // Output: { nombre: "Camilo", edad: 25, promedio: 10 }
