// const estudiantes = [
    // { nombre: "Camilo", edad: 33, promedio: 10 },
    // { nombre: "Juan", edad: 30, promedio: 6 },
    // { nombre: "Andres", edad: 29, promedio: 8.7 },
// ];
// 
// console.log("Nombre del segundo estudiante:", estudiantes[1].nombre);//Nombre del segundo estudiante: Juan
// 
// estudiantes.forEach((estudiante, i) => {
    // if (i === 0) {
      // estudiante.edad = 25;
      // console.log(estudiante);
    // }
  // });
  
  //{ nombre: 'Camilo', edad: 25, promedio: 10 }

  // punto 3
  
  const estudiantes = [
    { nombre: "Camilo", edad: 33, promedio: 10 },
    { nombre: "Juan", edad: 30, promedio: 6 },
    { nombre: "Andres", edad: 29, promedio: 8.7 },
];


const edades = estudiantes.map(estudiante => estudiante.edad);


const promedioEdad = edades.reduce((total, edad) => total + edad, 0) / edades.length;

console.log(promedioEdad); 
  
  
  //30.666666666666668

  // const estudiantes = [
    // { nombre: "Camilo", edad: 33, promedio: 10 },
    // { nombre: "Juan", edad: 30, promedio: 6 },
    // { nombre: "Andres", edad: 29, promedio: 8.7 },
// ];
// 
// let sumaEdades = 0;
// 
// estudiantes.forEach(estudiante => {
    // sumaEdades += estudiante.edad;
// });
// 
// const promedioEdad = sumaEdades / estudiantes.length;
// 
// console.log(`El promedio de edad de los estudiantes es: {promedioEdad}`);

//El promedio de edad de los estudiantes es: 30.666666666666668







