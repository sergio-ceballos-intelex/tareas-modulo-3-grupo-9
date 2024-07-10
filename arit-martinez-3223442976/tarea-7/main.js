// Punto 1
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const newArray = productos.filter(producto => producto.stock > 0)
console.log(newArray)

const soloNombres = productos.map(name => name.nombre)
console.log(soloNombres)

const precioTotal = productos.map(total => total.precio * total.stock)
console.log(precioTotal)

//Punto 2
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

estudiantes[0].edad = 25;
console.log(estudiantes[0]);

//Punto 3
let suma = 0
estudiantes.map(num => suma += num.edad)
const promedio = suma / estudiantes.length
console.log(`La suma de las edades de los estudiantes es: ${suma}`)
console.log(`El promedio de las edades de los estudiantes es: ${promedio}`)

//Punto 4
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

const promedioMasAlto = estudiantes2.find(prom => prom.promedio > 90)
console.log(`Nombre: ${promedioMasAlto.nombre}`)
console.log(`Edad: ${promedioMasAlto.edad}`)

const estudiantesMayores = estudiantes2.filter(students => students.edad > 20)
console.log(estudiantesMayores)