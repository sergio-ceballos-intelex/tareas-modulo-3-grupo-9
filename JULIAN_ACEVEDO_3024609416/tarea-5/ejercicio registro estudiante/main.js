// Sistema de Gestión de Registro de Estudiantes

const nameStudent = prompt("Escriba el nombre del estudiante");
const age = Number(prompt("Digite edad del estudiante"));
const average = Number(prompt("Indique promedio del estudiante (0-10"));
const isRegular = confirm("Presione OK si el estudiante es regular");
const passedCourses = Number(
  prompt("Indique cantidad de materias aprobadas por el estudiante")
);
const hasScholarship = confirm("Presione OK si el estudiante es becado");

function studentRegistration(edad, promedio, esRegular, becado) {
  if (edad < 18) {
    return " es menor de edad y NO se puede registrar";
  } else if (edad >= 18 && promedio < 6) {
    return " no cumple con el promedio minimo requerido";
  } else if (edad >= 18 && promedio >= 6 && esRegular == false) {
    return " debe registrarse como regular";
  } else if (edad >= 18 && promedio >= 6 && esRegular && becado == false) {
    return " puede solicitar una beca";
  } else if (edad >= 18 && promedio >= 6 && esRegular && becado) {
    return " cumple con todos los requisitos";
  } else {
    return "ERROR se estan introduciendo datos fuera de los parametros";
  }
}
alert(
  `Durante el registro encontramos que el estudiante de nombre ${nameStudent} ${studentRegistration(
    age,
    average,
    isRegular,
    hasScholarship
  )}`
);
