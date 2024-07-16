// Actividad 1
// const productos = [
//     { nombre: "Camiseta", precio: 20, stock: 10 },
//     { nombre: "Pantalón", precio: 30, stock: 5 },
//     { nombre: "Zapatos", precio: 50, stock: 0 },
//     { nombre: "Bufanda", precio: 15, stock: 8 },
// ];
// Utilizando filter, genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
// const newArry =productos.filter(productos=>productos.stock > 0);
// console.log (newArry)

// Utilizando map, genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
// const nombres = productos.map((producto)=>producto.nombre)
// console.log(nombres)

// (Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer 
// todos los productos y obtener la suma de el precio de todos ellos

// const precioTotal = productos.map(total => total.precio * total.stock)
// console.log(precioTotal)

// Actividad 2
// const estudiantes = [
//     { nombre: "Camilo", edad: 33, promedio: 10 },
//     { nombre: "Juan", edad: 30, promedio: 6 },
//     { nombre: "Andres", edad: 29, promedio: 8.7 },
// ];
// Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
// console.log(estudiantes[1].nombre);

// Actualiza la edad del primer estudiante a 25 años. Imprime en la consola 
// la información completa del primer estudiante después de la actualización.
// estudiantes[0].edad=25;
// console.log(estudiantes[0])
 
// Actividad 3
// const edad = estudiantes.map((estudiante)=>estudiante.edad);
// const promedio = edad.reduce((acumula, edad)=>acumula+edad,0)
// console.log ("La suma de las de edades es de:",promedio)
// console.log(`El promedio de las edades es de:`, promedio/estudiantes.length);

//Actividad 4
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

//Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
 const alto = estudiantes.reduce ((mayor,max)=>(max.promedio>mayor.promedio ? max:mayor),estudiantes[0]);
 console.log (`nombre:`,alto.nombre,"Edad:", alto.edad);

//Imprime en la consola la información completa de los estudiantes mayores de 20 años.
 const Mayores = estudiantes.filter(students => students.edad > 20)
console.log(Mayores)
