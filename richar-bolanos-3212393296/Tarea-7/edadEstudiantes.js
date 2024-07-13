const estudiantes = [
  { nombre: "Camilo", edad: 33, promedio: 10 },
  { nombre: "Juan", edad: 30, promedio: 6 },
  { nombre: "Andres", edad: 29, promedio: 8.7 },
];

// Calcule la suma de las edades de todos los estudiantes utilizando foreach
let sumaEdades = 0;
estudiantes.forEach((estudiante) => {
  sumaEdades += estudiante.edad;
});

// Calcule el promedio de edad de los estudiantes
const promedioEdad = sumaEdades / estudiantes.length;

// Imprimo en la consola tanto la suma como el promedio de edad de los estudiantes
console.log(`Suma de edades: ${sumaEdades}`);
console.log(`Promedio de edad: ${promedioEdad.toFixed(2)}`);

//Suma de edades: 92
//Promedio de edad: 30.67
