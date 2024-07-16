//Punto1

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
  
 // Inicializamos variables para almacenar el estudiante con el promedio más alto
//   let estudiantePromedioMasAlto = estudiantes[0];
//   let promedioMasAlto = estudiantes[0].promedio;
//   
  //Recorremos el array de estudiantes con forEach
//   estudiantes.forEach(estudiante => {
    // if (estudiante.promedio > promedioMasAlto) {
    //   promedioMasAlto = estudiante.promedio;
    //   estudiantePromedioMasAlto = estudiante;
    // }
//   });
//   
//   
//   console.log(`Estudiante con el promedio más alto:
//   Nombre: ${estudiantePromedioMasAlto.nombre}
//   Edad: ${estudiantePromedioMasAlto.edad}`);
// 
  //studiante con el promedio más alto:
//   Nombre: Sofía
//   Edad: 22
// 
  //Punto2


// Filtrar estudiantes mayores de 20 años
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad > 20);

console.log(estudiantesMayores );

//[
    // {
        // nombre: 'Juan',
        // edad: 22,
        // promedio: 78,
        // genero: 'Masculino',
        // carrera: 'Medicina',
        // ciudad: 'Medellín'
    //   },
    //   {
        // nombre: 'María',
        // edad: 21,
        // promedio: 90,
        // genero: 'Femenino',
        // carrera: 'Administración de Empresas',
        // ciudad: 'Cali'
    //   },
    //   {
        // nombre: 'Pedro',
        // edad: 23,
        // promedio: 82,
        // genero: 'Masculino',
        // carrera: 'Derecho',
        // ciudad: 'Barranquilla'
    //   },
    //   {
        // nombre: 'Laura',
        // edad: 24,
        // promedio: 88,
        // genero: 'Femenino',
        // carrera: 'Arquitectura',
        // ciudad: 'Cartagena'
    //   },
    //   {
        // nombre: 'Sofía',
        // edad: 22,
        // promedio: 95,
        // genero: 'Femenino',
        // carrera: 'Psicología',
        // ciudad: 'Pereira'
    //   }
    // ]