let nombre = prompt("¿Cual es tu nombre?")
let age = Number(prompt("¿Cual es tu edad?"))
let prom = Number(prompt("¿Cual es tu promedio?"))
let register = true;
let themes = Number(prompt("¿Cuantas materias aprobaste?"))
let beca = true;

if (age < 18){
    document.write(nombre," eres menor de edad y no puedes registrate")
} else if (age > 18 && prom < 6){
    document.write(nombre," no cumples con el promedio requerido")
} else if ( age > 18 && prom >= 6 && register == false){
    document.write(nombre, " debes registrarte como regular")
} else if ( age > 18 && prom >= 6 && register == true && beca == false){
    document.write(nombre, " puedes solicitar una beca")
} else if (age > 18 && prom >=6 && register == true && beca == true){
    document.write(nombre, " cumples con todos los requisitos")
}

