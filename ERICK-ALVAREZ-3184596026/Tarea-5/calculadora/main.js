let num1 = Number(prompt("Ingresa el primer numero"))
let num2 = Number(prompt("Ingresa el segundo numero"))
let op = prompt("¿Que operacion deseas hacer?").toUpperCase();

if(op === "SUMA"){
    let result = (num1 + num2)
    document.write("El resultado de tu suma es: ",result)
} else if (op === "RESTA"){
    let result = (num1 - num2)
    document.write("El resultado de tu resta es: ",result)
} else if (op === "MULTIPLICACION"){
    let result = (num1 * num2)
    document.write("El resultado de tu multiplicacion es: ",result)
} else if (op === "DIVISION"){
    let result = (num1 / num2)
    document.write("El resultado de tu division es: ",result)
} else {
    document.write("Datos incorrectos")
}