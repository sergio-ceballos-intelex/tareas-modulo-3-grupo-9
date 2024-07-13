const estudiantes = [
  {
    nombre: "Ana",
    edad: 20,
    promedio: 85,
    genero: "Femenino",
    carrera: "Ingeniería Civil",
    ciudad: "Bogotá",
  },
  {
    nombre: "Juan",
    edad: 22,
    promedio: 78,
    genero: "Masculino",
    carrera: "Medicina",
    ciudad: "Medellín",
  },
  {
    nombre: "María",
    edad: 21,
    promedio: 90,
    genero: "Femenino",
    carrera: "Administración de Empresas",
    ciudad: "Cali",
  },
  {
    nombre: "Pedro",
    edad: 23,
    promedio: 82,
    genero: "Masculino",
    carrera: "Derecho",
    ciudad: "Barranquilla",
  },
  {
    nombre: "Laura",
    edad: 24,
    promedio: 88,
    genero: "Femenino",
    carrera: "Arquitectura",
    ciudad: "Cartagena",
  },
  {
    nombre: "Carlos",
    edad: 20,
    promedio: 75,
    genero: "Masculino",
    carrera: "Ingeniería de Sistemas",
    ciudad: "Santa Marta",
  },
  {
    nombre: "Sofía",
    edad: 22,
    promedio: 95,
    genero: "Femenino",
    carrera: "Psicología",
    ciudad: "Pereira",
  },
];

// Se encuentra al estudiante con el promedio más alto
const estudianteMejorPromedio = estudiantes.filter(
  (estudiante) =>
    estudiante.promedio ===
    Math.max(...estudiantes.map((estudiante) => estudiante.promedio))
)[0];

console.log(
  `Estudiante con mejor promedio: ${estudianteMejorPromedio.nombre} - Edad: ${estudianteMejorPromedio.edad}`
);

// Se filtra los estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(
  (estudiante) => estudiante.edad > 20
);

console.log("Estudiantes mayores de 20 años:");
estudiantesMayores.forEach((estudiante) => {
  console.log(
    `Nombre: ${estudiante.nombre}, Edad: ${estudiante.edad}, Promedio: ${estudiante.promedio}, Genero: ${estudiante.genero}, Carrera: ${estudiante.carrera}, Ciudad: ${estudiante.ciudad}`
  );
});

/*Utilice el método filter para encontrar al estudiante con el promedio más alto. Primero, utilizo map para crear un array de promedios, luego utilizo Math.max para encontrar el promedio más alto, y finalmente filtro el array de estudiantes para encontrar el estudiante que coincide con ese promedio.
Imprimí en la consola el nombre y la edad del estudiante con el promedio más alto.
Utilicé el método filter para filtrar los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprimí en la consola la información completa de los estudiantes mayores de 20 años utilizando forEach.*/
