const dataStudent = {
    nombre: "Mario",
    edad: 28,
    promedio: 7,
    esRegular: true,
    cantidadMateriasAprobadas: 5,
    esBecado: true
}

function sistemaGestion(data){
    if(data.edad < 18){
        return "es menor de edad y no puede registrarse"
    }else if(data.promedio < 6){
        return "no cumple con el promedio requerido"
    }else if(data.esRegular == false){
        return "debe registrarse como regular"
    }else if(data.esBecado == false){
        return "debe solicitar una beca"
    }else{
        return "cumple con todos los requisitos para el registro"
    }
}
let result = sistemaGestion(dataStudent)    

console.log("El estudiante "+dataStudent.nombre+" "+result)