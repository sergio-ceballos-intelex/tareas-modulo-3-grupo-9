// primer punto 
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
];


const Stock = productos.filter(producto => producto.stock > 0);

console.log("Productos en stock:");
console.log(Stock);


const Productos = productos.map(producto => producto.nombre);

console.log("\nNombres de los productos:");
console.log(Productos);


const Total = productos.reduce((total, producto) => {
    if (producto.stock > 0) {
        return total + (producto.precio * producto.stock);
    } else {
        return total;
    }
}, 0);

console.log("\nPrecio total de los productos disponibles:", Total);

// segundo punto 

const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];


console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);


estudiantes[0].edad = 25;


console.log("\nInformación estudiantes al actualizar");
console.log("Nombre:", estudiantes[0].nombre);
console.log("Edad:", estudiantes[0].edad);
console.log("Promedio:", estudiantes[0].promedio);

//terceer punto 

const estudiantes = [
    { nombre: "Camilo", edad: 25, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];

let sumaedades = 0;
estudiantes.forEach(estudiante => {
    sumaedades += estudiante.edad;
});

const Estudiantes = estudiantes.length;
const promedioedad = sumaedades / Estudiantes;

console.log("Suma  edades estudiantes:", sumaedades);
console.log("Promedio de edad:", promedioedad);

// cuarto punto 

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
      promedio: 98,
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

const PromedioMasAlto = estudiantes.reduce((prev, current) => (prev.promedio > current.promedio) ? prev : current);

console.log("Promedio más alto:");
console.log("Nombre:", PromedioMasAlto.nombre);
console.log("Edad:", PromedioMasAlto.edad);


const Mayores = estudiantes.filter(estudiante => estudiante.edad > 20);

console.log("\nMayores de 20 años:");
console.log(Mayores);



