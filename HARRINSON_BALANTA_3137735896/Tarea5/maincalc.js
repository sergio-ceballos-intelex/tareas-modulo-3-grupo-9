// calculadora
const operacion = prompt("Que operacion deseae realizar ingresa el simbolo eje suma usa el +");
const numberA = Number(prompt("ingresa numero 1"));
const numberB = Number(prompt("ingresa numero 1"));


if (operacion === "+") {
    const suma = numberA + numberB
    document.write("la suma de tus numeros es ", suma)
}
else if (operacion === "-") {
    const resta = numberA - numberB
    document.write("la resta de tus numeros es ", resta)
}
else if (operacion === "*") {
    const multiplicacion = numberA * numberB
    document.write("la multiplicacion de tus numeros es ", multiplicacion)
}
else if (operacion === "/") {
    const division = numberA / numberB
    document.write("la division de tus numeros es ", division)
}