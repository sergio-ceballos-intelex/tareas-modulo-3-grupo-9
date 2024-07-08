//!Tarea 7: Manipulación Básica de Arrays y Objetos orientado a ES6
//********************************************************************* */

//* Punto 1. Desarrolla las siguientes actividades:
//* A. Utilizando filter, genera un nuevo array que contenga los productos en stock
//* (todos los productos cuyo stock es mayor a cero).

const productos = [
  { nombre: "Camiseta", precio: 20, stock: 10 },
  { nombre: "Pantalón", precio: 30, stock: 5 },
  { nombre: "Zapatos", precio: 50, stock: 0 },
  { nombre: "Bufanda", precio: 15, stock: 8 },
];

const stockProductos = productos.filter((producto) => producto.stock !== 0);
console.log(stockProductos);

//* B. Utilizando map, genera un nuevo array con solo los nombres de los productos

const nombresProdutos = productos.map((producto) => producto.nombre);
console.log(nombresProdutos);

//* C. Encontrar la suma del precio de todos los productos.

const precios = productos.map((producto) => producto.precio);
//* Hago la suma de los precios con reduce.
const totalPrecios = precios.reduce((acumula, precio) => acumula + precio, 0);
console.log(`La suma total de precios es: ${totalPrecios}`);

//* Punto 2. Desarrolla las siguientes actividades:

const estudiantes = [
  { nombre: "Camilo", edad: 33, promedio: 10 },
  { nombre: "Juan", edad: 30, promedio: 6 },
  { nombre: "Andres", edad: 29, promedio: 8.7 },
];

//* A.Imprime en la consola el nombre del segundo estudiante.
//* Nota: El segundo estudiante es juan.

estudiantes.map((estudiante, i) => {
  if (i === 1) {
    console.log(`El nombre del segundo estudiante es : ${estudiante.nombre}`);
  }
});

//* B. Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa
//* del primer estudiante después de la actualización.

estudiantes.forEach((estudiante, i) => {
  if (i === 0) {
    estudiante.edad = 25;
    console.log(estudiante);
  }
});

//* Punto 3. Desarrolla las siguientes actividades:
//* A. Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el array
//*(puedes utilizar un map o foreach).OJO la edad del primer alumno Camilo, cambio de 33 a 25.

const edades = estudiantes.map((estudiante) => estudiante.edad);
//* Hago la suma de las edades de todos los estudiantes con reduce.
const sumaEdades = edades.reduce((acumula, edad) => acumula + edad, 0);
console.log(`La suma de las edades de los estudiantes es :` + sumaEdades);

//* B.  Calcula el promedio de edad de los estudiantes. Imprima en la consola tanto la suma como el promedio de
//* edad de los estudiantes.

console.log(`La suma de las edades de los estudiantes es :` + sumaEdades);
console.log(`El promedio de las edades de los estudiantes es :`+ sumaEdades / estudiantes.length
);

//* Punto 4. Dado el siguiente arreglo de objetos, desarrollar el punto A y B.
const estudiantes2 = [
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
  
  //* A.Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
  
  let mayProm = estudiantes2[0];
  
  estudiantes2.forEach((estudiante) => {
    if (estudiante.promedio > mayProm.promedio) {
      mayProm= estudiante;    
    }
  });
  console.log(`${mayProm.nombre} ${mayProm.edad}  promedio ${mayProm.promedio} `)
  console.log(mayProm)
  
  
  //* Otra forma de realizarlo con reduce.
  //* Devuelve un arreglo con el objeto que tiene el promedio mayor
  //* Si el ternario es verdadero, mayor se actualiza a el objeto de estudiante.
  
  const estudMayorProm=estudiantes2.reduce((mayor, estudiante)=>{
     return estudiante.promedio>mayor.promedio? estudiante : mayor
  }, estudiantes2[0])
  
  console.log(`${estudMayorProm.nombre} ${estudMayorProm.edad} promedio ${estudMayorProm.promedio}`)
  
  //* B. Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
  //* Me devuelve un arreglo de objetos que cumplen con la condicion del callback
  
  const constestudiantesMayores =estudiantes2.filter((estudiante)=>estudiante.edad>20)
  console.log(constestudiantesMayores)