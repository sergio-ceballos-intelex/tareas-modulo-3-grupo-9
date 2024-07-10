function verificarEstadoEstudiante(nombre, edad, promedio, esRegular, cantidadMateriasAprobadas, esBecado) {
    // Verificar si el estudiante es menor de edad
    if (edad < 18) {
        return `${nombre} es menor de edad y no puede registrarse.`;
    }

    // Verificar condiciones para estudiantes mayores de 18 años
    if (promedio < 6) {
        return `${nombre} no cumple con el promedio mínimo requerido.`;
    }

    if (!esRegular) {
        return `${nombre} debe registrarse como regular.`;
    }

    if (promedio >= 6 && esRegular && !esBecado) {
        return `${nombre} puede solicitar una beca.`;
    }

    if (promedio >= 6 && esRegular && esBecado) {
        return `${nombre} cumple con todos los requisitos.`;
    }

    // Si ninguna de las condiciones anteriores se cumple
    return `${nombre} tiene un estado regular pero no cumple con los criterios especiales.`;
}

// Ejemplo de uso:
let estadoEstudiante = verificarEstadoEstudiante("Juan Pérez", 20, 7.5, true, 6, true);
console.log(estadoEstudiante);