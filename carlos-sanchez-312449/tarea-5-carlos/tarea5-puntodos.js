// punto dos  
let nombre = prompt("ingrese el nombre del estudiante ")
let edad = Number(prompt("ingrese la edad del estudiante"))
let promedio = (Math.random()*10).toFixed(1)  
let esRegular =String(prompt("ingrese  si el estudiante esta matriculado como regular(s/n) "))
let cantidadMateriasAprobadas= (Math.random()*10).toFixed(1)
let esBecado= String(prompt("ingrese  si el estudiante tiene beca o no (s/n) "))

const error = () => {
    document.write("estudiante es menor de edad y no puede registrarse.")
} 
const menor = () => {
    document.write("estudiante es menor de edad y no puede registrarse.")
} 
const solicitar = () => {
    document.write("puede solicitar una beca.")
} 

const minimo = () => {
    document.write(`el estudiante ${nombre} no cumple con el promedio mínimo requerido.`)
}

const regulr = () => {
    document.write(`el estudiante debe registrarse como regular`)
}



function registro () {
    if  (edad >= 18 && promedio > 6 && esRegular == "s" && esBecado == "s") {
        document.write(`el estudiante ${nombre} cumple con todos los requisitos que tiene la edad de ${edad} años y un promedio de ${promedio}`)
    }else if(edad < 18) {
       return menor()
    } else if(edad >= 18 && promedio < 6 ){
        return minimo()
    }else if(edad >= 18 && promedio > 6 && esRegular != "s" ){
        return regulr()
    }else if(edad >= 18 && promedio > 6 && esRegular == "s" && esBecado != "s"){
        return solicitar()
    }else{
        document.write("Ingresaste algún valor mal")
    }
}
registro()


 //tercer punto
 
//ejercicio 1 
console.log(true || true || false && true || false && true && true || false) //=true 
//explicacion
true || true//  true + true = true 
false && true //  false + ture = false 
false && true && true//  false + true = false + true = false
false //  false 
//  entonces = true || false || false || false
//el ejercicio es true


//ejercicio 2
console.log(true && (false || false && (true && (true || false && true))) || false && (true || false)) //=false

(true || false && true)// true  || (false + true) = false = true || false = true 
(true && (true || false && true))//  la anterior fue true por tanto = true && true = true
false && (true && (true || false && true))// seria = false +  = false + true = false
(false || false && (true && (true || false && true))) // seria = false || = false || false = false
true && (false || false && (true && (true || false && true)))// = true &&  = true && false = false
false && (true || false)// =false && (true || false) = false) = false &&true =false
//entonces al final seria 
true && false || false// = false || false = false


//ejercicio 3
console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true) //true

(true && !false) // = true && not false = true && true = true 
false && !!!true || (true && !false) // = false && (no true + true + no true) || (true && not false) = false && false || true = true
!true && (false || false && !!!true || (true && !false)) || false && true//= no true &&  = false && true =false
(!true && (false || false && !!!true || (true && !false))) || false && true// = false || false && true = false || false = false
(!(!true && (false || false && !!!true || (true && !false))) || false && true)//  = !false = true