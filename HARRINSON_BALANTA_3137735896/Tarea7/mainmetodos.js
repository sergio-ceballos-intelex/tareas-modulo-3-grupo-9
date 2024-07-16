
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];
// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).

const newarray = productos.filter(productos => productos.stock > 0)
console.log(newarray)

// Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]

const newarray2 = productos.map(productos => productos.nombre);
console.log(newarray2)

// Crea un array llamado estudiantes que contenga objetos representando a tres estudiantes. Ejemplo

  const estudiantes = [
      { nombre: "Camilo", edad: 33, promedio: 10 },
      { nombre: "Juan", edad: 30, promedio: 6 },
      { nombre: "Andres", edad: 29, promedio: 8.7 },
 ];
 
console.log(estudiantes[1].nombre); 
estudiantes[0].edad = 25;
console.log(estudiantes[0]);

// Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
// Calcula el promedio de edad de los estudiantes.
// Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.
let suma = 0;
estudiantes.forEach((estudiante) => {
    suma += estudiante.edad;
});
console.log(suma);
let calcularpromedio = 0;
estudiantes.forEach((estudiante) => {
    calcularpromedio += estudiante.promedio;
});
console.log(calcularpromedio);

// Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

// Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
// Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
// Imprime en la consola la información completa de los estudiantes mayores de 20 años.


const estudiantes4 = [
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
//  nota este ultimo no lo logre desarollar