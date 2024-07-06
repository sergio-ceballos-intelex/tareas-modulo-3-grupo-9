/* 1. genera un nuevo array que contenga los productos en stock (todos los productos cuyo stock es mayor a cero).
genera un nuevo array con solo los nombres de los productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
(Opcional) Escribe un programa que calcule el precio total de los productos disponibles, para ello debes recorrer todos los productos y obtener la suma de el precio de todos ellos */
function mensaje (num) {
    console.log("");
    console.log(`---PUNTO ${num}---`);
    console.log("");
};

mensaje(1);

const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];

const prodStock = productos.filter((prod) => prod.stock > 0);
const prodNames = productos.map((prod) => prod.nombre);

// Con forEach
let total = 0;
productos.forEach((element) => {
    element = element.precio
    total += element
    return total
})

// Con .reduce
const totalReduce = productos.reduce((total, prod) => total + prod.precio, 0);

console.log("Productos en Stock: ", prodStock)
console.log("Nombres de los productos: ", prodNames)
console.log("Precio total de todos los productos: ", total)
console.log("Precio total de todos los productos (optimizado): ", totalReduce)

mensaje(2);

/* 2. Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
Imprime en la consola el nombre del segundo estudiante.
Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante después de la actualización.*/

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);

estudiantes[0].edad = 25;
console.log("Información completa del primer estudiante después de la actualización:", estudiantes[0]);

mensaje(3);

/* 3. Calcula la suma de las edades de todos los estudiantes en el array (puedes utilizar un map o foreach).
Calcula el promedio de edad de los estudiantes.
Imprime en la consola tanto la suma como el promedio de edad de los estudiantes. */ 

let edadTotal = 0;

estudiantes.forEach(est => {
    est = est.edad;
    edadTotal += est;
    return edadTotal;
});
const promEdad = edadTotal / estudiantes.length;

console.log(`La suma de edades de todos los estudiantes: (edad del primer estudiante actualizada): ${edadTotal}`);
console.log(`Promedio de edad: ${promEdad}`);

mensaje(4);

/* 4. Utiliza filter para encontrar al estudiante con el promedio más alto en el array. 
Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprime en la consola la información completa de los estudiantes mayores de 20 años. */ 

const newStudents = [
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

let estPromMayor = newStudents[0].promedio;
let estNamePromMayor = newStudents[0].nombre;
let estudiantesMayores = newStudents.filter((est) => est.edad > 20);

const promMayor = newStudents.filter((est) => {
    if(est.promedio > estPromMayor) {
        estPromMayor = est.promedio;
        estNamePromMayor = est.nombre;
    }
});

console.log("Estudiantes con edad mayor a 20: ", estudiantesMayores);
console.log(`\nEstudiante con mayor promedio: ${estNamePromMayor}, promedio de: ${estPromMayor}.`);