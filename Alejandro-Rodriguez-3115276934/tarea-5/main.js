//  calculadora sencilla tarea 5 

let numero1= Number(prompt("dame un numero entero"))
let numero2= Number(prompt("dame otro numero entero")) 


let resulSuma= numero1 + numero2;
let resulResta= numero1 -numero2;
let resulMultiplicacion= numero1 * numero2;
let resulDivision= numero1 / numero2;

console.log(`tu suma es ${resulSuma}  tu resta es ${resulResta} tu multiplicacion es ${resulMultiplicacion} tu divison es ${resulDivision}`)

// tarea 5 # 2
/*2. Sistema de Gestión de Registro de Estudiantes
Imagina que estás desarrollando un sistema de gestión de registro de estudiantes para una universidad. Este 
sistema debe tomar en cuenta varios criterios para determinar el estado de un estudiante y sus privilegios. 
Debes escribir un script en JavaScript que verifique varios datos sobre un estudiante y devuelva un mensaje que 
indique su estado. Estos datos son:

nombre (string): El nombre del estudiante.
edad (number): La edad del estudiante.
promedio (number): El promedio de calificaciones del estudiante (0 a 10).
esRegular (boolean): Si el estudiante está registrado como regular.
cantidadMateriasAprobadas (number): La cantidad de materias aprobadas por el estudiante.
esBecado (boolean): Si el estudiante tiene una beca.
Requisitos:

Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando que 
el estudiante es menor de edad y no puede registrarse.
Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse
un mensaje indicando que el estudiante no cumple con el promedio mínimo requerido.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no
está registrado como regular, debe mostrarse un mensaje indicando que el estudiante
debe registrarse como regular.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, está 
registrado como regular pero no tiene una beca, debe mostrarse un mensaje indicando
que puede solicitar una beca.
Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, 
está registrado como regular y tiene una beca, debe mostrarse un mensaje 
indicando que el estudiante cumple con todos los requisitos. */

const student={
    name:"Alejandra",
    age:18,
    promedio: 8,
    regular: true,
    cantidadMateriasAprobadas: 6,
    esBecado: true,

}
if (student.age <=17){
    console.log("El estidiante es menor de edad y no puede registrarse, intenta el proximo año")
}else if(student.promedio < 6){
    console.log("No cumples con el promedio minimo requerido")
}else if(student.esBecado == false){
    console.log("Puedes solicitar una beca")
}else if (student.regular == false){
    console.log("Te deberias registrar como regular ")
}else {
    console.log("Bienvenido, cumples con todos nuestros requisitos")
} 


//  tarea 5 # 3 

// true || true || false && true || false && true && true || false
// true ||true  ||false && true || false|| false
// true || true || false || false
// true || false
// true
console.log(true || true || false && true || false && true && true || false)

// true && (false || false && (true && (true || false && true))) || false && (true || false)
// true && (false || false && true || false && (true || false))
// true && (false || false && true || false && true)
// true && (false || false || false)
// true && false
// false

console.log(true && (false || false && (true && (true || false && true))) || false && (true || false))

// !(!true && (false || false && !!!true || (true && !false))) || false && true
// !(false && (false || false && false || true)) || false 
// !(false && true) || false
// !false || false
// true



console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true)