let number1 = Number(prompt("Ingrese el primer numero: "))
let number2 = Number(prompt("Ingrese el segundo numero: "))
let operacion = prompt("Ingrese el tipo de operacion (suma,resta,multiplicacion o division): ")
let result = 0

function calculadora(x){
    if(x == "suma"){
        return result = number1 + number2
    }else if(x == "resta"){
        return result = number1 - number2
    }else if(x == "multiplicacion" || x == "multiplicación"){
        return result = number1 * number2
    }else if(x == "division" || x == "división"){
        return result = number1 / number2
    }else{
        return alert("Operación no reconocida, por favor digitar suma, resta, multiplicacion o division")
    }
}

document.write("EL resultado es: ", calculadora(operacion))

