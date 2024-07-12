// TAREA # 7
// PUNTO 1
// Obteniendo estadisticas de productos: Dado el siguiente array de productos.
const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];

// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const productosEnStock = productos.filter((producto) => producto.stock > 0);
console.log(productosEnStock);

// Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda"]

const nombresProductos = productos.map((producto) => producto.nombre);
console.log(nombresProductos);

//Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos
// y obtener la suma de el precio de todos ellos

let precioTotal = 0;
productosEnStock.forEach((producto) => {
  precioTotal += producto.precio;
});
console.log(`Precio total de los productos disponibles: ${precioTotal}`);

// PUNTO 2
// Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes.

const estudiantes = [
  { nombre: "Felipe", edad: 23, promedio: 5 },
  { nombre: "Carlos", edad: 29, promedio: 7.5 },
  { nombre: "Catalina", edad: 32, promedio: 6.6 },
];

// Imprime en la consola el nombre del segundo estudiante.

console.log(`Nombre del segundo estudiante: ${estudiantes[1].nombre}`);

// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.

estudiantes[0].edad = 25;
console.log("Información actualizada del primer estudiante: ", estudiantes[0]);

// PUNTO 3
// Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).

let sumaEdades = 0;
estudiantes.forEach((estudiante) => {
  sumaEdades += estudiante.edad;
});

// Calcula el promedio de edad de los estudiantes.

const promedioEdad = sumaEdades / estudiantes.length;

// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes

console.log(`Suma de las edades de todos los estudiantes: ${sumaEdades}`);
console.log("Promedio de edad de los estudiantes:", promedioEdad.toFixed(2));

// PUNTO 4

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

// Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

const estudianteConMejorPromedio = estudiantes.filter(
  (estudiante) => estudiante.promedio >= 95
);
console.log(estudianteConMejorPromedio);

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.

estudianteConMejorPromedio.forEach((estudiante) => {
  console.log(estudiante.nombre, estudiante.edad);
});

// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.

const estudiantesMayores = estudiantes.filter(
  (estudiante) => estudiante.edad > 20
);

// Imprime en la consola la información completa de los estudiantes mayores de 20 años.

estudiantesMayores.forEach((estudiante) => {
  console.log(estudiante);
});
