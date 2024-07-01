const Estudiante = {
    Nombre: "Harry",
    edad: 10,
    promedio: 9,
    esregular: true,
    CantidadMateriasAprobadas: 10,
    esBecado: true,
    esmayordeedad: function() {
        if (Estudiante.edad < 18) {
            console.log("eres menor de edad y no puedes registrarte.");
        }
    }
};

Estudiante.esmayordeedad();

