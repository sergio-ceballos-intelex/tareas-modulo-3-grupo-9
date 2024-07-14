//This is the 7th homework
//Punto 1: Obteniendo estadisticas de productos
const productos = [
    { nombre: "Camiseta", precio: 20, stock: 10 },
    { nombre: "Pantalón", precio: 30, stock: 5 },
    { nombre: "Zapatos", precio: 50, stock: 0 },
    { nombre: "Bufanda", precio: 15, stock: 8 },
]; 
const productosEnStock = productos.filter(i => i.stock > 0);
const productosNombres = productos.map(j => j.nombre)
const precioTotal = productos.reduce((total, item) => {
    return total + item.precio;
},0)
console.log(productosEnStock)
console.log(productosNombres)
console.log(precioTotal)
//Punto 2: Acceso y Modificación básica de datos
const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];
const segundoEstudiante = estudiantes.filter((_, indice) => indice == 1)
console.log(segundoEstudiante)
const modificarEstudiante = estudiantes.map((estudiante, index) => {
    if(index === 0 ){
        return { ...estudiante, edad: 25};
    }
    return estudiante
})
const primerEstudiante = modificarEstudiante.filter((_,indice) => indice == 0)
console.log("Esta es la modificación del primer estudiante: ",primerEstudiante)
//Punto 3: Calculo  de estadisticas basicas
let sumaEdades = 0;
estudiantes.forEach(estudiante =>  {
    sumaEdades += estudiante.edad
})
console.log("La suma de las edades es: ",sumaEdades)
let promedioEdad = sumaEdades / estudiantes.length
console.log("El promedio de edad de los estudiantes es: ", promedioEdad)
//Punto 4: Busqueda y filtrado de datos:
const estudiantes_universidad = [
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
let mejorPromedio = 0;
let mejorEstudiante = "";
let estudianteEdad = 0;
let generoMejorEstudiante = "";
estudiantes_universidad.forEach(estudiante => {
    if(estudiante.promedio > mejorPromedio){
        mejorPromedio = estudiante.promedio;
        mejorEstudiante = estudiante.nombre;
        estudianteEdad = estudiante.edad;
        if(estudiante.genero == "Femenino"){
            generoMejorEstudiante = "La"
        }else{
            generoMejorEstudiante = "El"
        }
    }
})
console.log(generoMejorEstudiante," mejor estudiante es ", mejorEstudiante, " con un proemdio de ",mejorPromedio," y tiene ",estudianteEdad," años.")
const estudiantesMayores = estudiantes_universidad.filter(estudiante => estudiante.edad > 20)
console.log("Estos son los estudiantes mayores de 20 años: ",estudiantesMayores)