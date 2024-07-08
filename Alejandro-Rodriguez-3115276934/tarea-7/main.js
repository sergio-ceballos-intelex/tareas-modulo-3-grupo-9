// Punto 1: Obteniendo estadisticas de productos: 
// Dado el siguiente array de productos.
/*Utilizando filter, genera un nuevo array que contenga los productos en 
stock (todos los productos cuyo stock es mayor a cero).
Utilizando map, genera un nuevo array con solo los nombres de los 
productos, ejemplo ["Camiseta", "Pantalón", "Zapatos", "Bufanda" ]
(Opcional) Escribe un programa que calcule el precio total de los 
productos disponibles, para ello debes recorrer todos los productos y 
obtener la suma de el precio de todos ellos */

    const productos = [
        { nombre: "Camiseta", precio: 20, stock: 10 },
        { nombre: "Pantalón", precio: 30, stock: 5 },
        { nombre: "Zapatos", precio: 50, stock: 0 },
        { nombre: "Bufanda", precio: 15, stock: 8 },
   ];

const stockMayorCero= productos.filter(producto => producto.stock > 0) // obtengo objetos con stock > 0
console.log(stockMayorCero)
console.log("..................................................................")
const nombreProductos= productos.map(producto => producto.nombre) // obtengo nombre de cada objeto
console.log(`estos son los nombre de los productos ${nombreProductos}`);
console.log("..................................................................")
const precioProductos= productos.map(producto => producto.precio) //obtengo precios de los objetos
const precioProductosSuma= precioProductos.reduce((contador, precio) => contador + precio, 0) // sumo los precios de los objetos
console.log(`Esta es la suma del precio de los productos ${precioProductosSuma}`) 
console.log("...................................................................")
//Punto 2: Acceso y Modificación Básica de Datos: Crea un array llamado estudiantes que contenga objetos representando a 
//tres estudiantes. Ejemplo
/*Cada objeto debe tener las siguientes propiedades: nombre, edad, y promedio.
Imprime en la consola el nombre del segundo estudiante.
Actualiza la edad del primer estudiante a 25 años. Imprime en la consola la información completa del primer estudiante 
después de la actualización.*/

  const estudiantes = [
      { nombre: "Camilo", edad: 33, promedio: 10 },
      { nombre: "Juan", edad: 30, promedio: 6 },
      { nombre: "Andres", edad: 29, promedio: 8.7 },
 ];

 console.log(estudiantes[1]) // imprimo informacion de segundo estudiante
 console.log("...................................................................")

 estudiantes[0].edad = 25; //cambio edad de primer estudiante a 25 años
 console.log(estudiantes[0]) // imprimo informacion de primer estudiante actualizada
 console.log("....................................................................") 
 

 /* Punto 3: Cálculo de Estadísticas Básicas: Calcula la suma de las edades de todos los estudiantes en el 
 array (puedes utilizar un map o foreach).
 Calcula el promedio de edad de los estudiantes.
 Imprime en la consola tanto la suma como el promedio de edad de los estudiantes.*/

  const sumaEdades= estudiantes.map(estudiante => estudiante.edad); // Atrapo las edades
  const resulSuma= sumaEdades.reduce((contador, edad) => contador + edad, 0 ) // sumo las edades 
  console.log(`Esta es la suma de las edades ${resulSuma}`);
console.log(".......................................................................")
  const promedioEdad= resulSuma / sumaEdades.length; // saco promedio dividiendo la suma en cantidad de elementos participantes
console.log(`Este es el promedio de edad ${promedioEdad.toFixed("2")}`)
console.log(".......................................................................")


/* Punto 4: Búsqueda y Filtrado de Datos: Utiliza filter para encontrar al estudiante con el promedio más alto en el array.
Imprime en la consola el nombre y la edad del estudiante con el promedio más alto.
Filtra los estudiantes mayores de 20 años en un nuevo array llamado estudiantesMayores.
Imprime en la consola la información completa de los estudiantes mayores de 20 años. */

const estudiantes1 = [
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
  
  const promedioMasAlto= estudiantes1.map(estudiante => estudiante.promedio)// atrapo los promedios de los estudiantes
  const elMejor= Number(Math.max(...promedioMasAlto)) // tomo el promedio mas alto
  const estudiantepromedioMejor= estudiantes1.find(estudiante =>  estudiante.promedio === elMejor) // uso find para imprimir el mejor estudiante
  console.log(estudiantepromedioMejor)
  console.log("...................................................................................")
  const estudiantesMayores= estudiantes1.filter(estudiante=> estudiante.edad > 20) // filtro estudiantes mayores a 20 años 
  console.log(estudiantesMayores) // imprimo estudiantes mayores a 20 años 