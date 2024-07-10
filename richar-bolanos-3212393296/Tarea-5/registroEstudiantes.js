function verificarEstadoEstudiante() {
  const nombre = prompt("Ingrese el nombre del estudiante:");
  const edad = parseInt(prompt("Ingrese la edad del estudiante:"));
  const promedio = parseFloat(
    prompt("Ingrese el promedio del estudiante (0-10):")
  );
  const esRegular = confirm("¿El estudiante está registrado como regular?");
  const cantidadMateriasAprobadas = parseInt(
    prompt("Ingrese la cantidad de materias aprobadas:")
  );
  const esBecado = confirm("¿El estudiante tiene una beca?");

  if (edad < 18) {
    alert(`El estudiante ${nombre} es menor de edad y no puede registrarse.`);
  } else if (promedio < 6) {
    alert(
      `El estudiante ${nombre} no cumple con el promedio mínimo requerido.`
    );
  } else if (!esRegular) {
    alert(`El estudiante ${nombre} debe registrarse como regular.`);
  } else if (!esBecado) {
    alert(`El estudiante ${nombre} puede solicitar una beca.`);
  } else {
    alert(`El estudiante ${nombre} cumple con todos los requisitos.`);
  }
}

verificarEstadoEstudiante();
