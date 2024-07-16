//1 Punto

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

//Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
//Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo `["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]`
//(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos

const newfilter = productos.filter(element => element.stock > 0);
const product = productos.map(product => product.nombre);

console.log("Los productos en stock son: ",newfilter);
console.log("Nombre de los productos: ",product);
console.log("______________________________________________________________________________________________________")


//2 Punto

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];


//Imprime en la consola el nombre del segundo estudiante.
//Actualiza la edad del primer estudiante a 25 años.
//Imprime en la consola la información completa del primer estudiante después de la actualización.

estudiantes[0].edad = 25;
console.log("El nombre del segundo estudiante es: ",estudiantes[1].nombre);
console.log(estudiantes[0]);

//3 Punto

//Calcula el promedio de edad de los estudiantes.
//Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.

let sum = 0;
estudiantes.map(numero => sum += numero.edad)
const sumaPromedio = sum / estudiantes.length

console.log("La suma de las edades es: ", sum)
console.log("y el promedio es: ",sumaPromedio)
console.log("_________________________________________________________________________________________")

//4 Búsqueda y Filtrado de Datos:** Utiliza filter para encontrar al estudiante con el promedio más alto en el array.

const classmates = [
    {
      nombre: "Ana",
      edad: 19,
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

  let estudiantesMayores = [];


  //Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
  //Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
  //Imprime en la consola la información completa de los estudiantes mayores de 20 años.

  const promAlto = classmates.find((element) => element.promedio >90)
  const mayor20 = classmates.filter(element => element.edad >20)
  estudiantesMayores.push(mayor20)
  console.log("El estudiante con el promedio mas alto es: ",promAlto.nombre, "con un promedio de: ",promAlto.promedio)
  console.log("Los estudiantes mayores de 20 son: ",estudiantesMayores)
  
