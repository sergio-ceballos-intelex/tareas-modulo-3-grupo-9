// punto 1

function calculadora() {
    
    let num1 = Number("Ingrese el primer númer1");
    let num2 = Number("Ingrese el segundo número");

    let ope = ("¿Que operacion matematica quiere hacer? en simbolos").toUpperCase();
    

    
    if (ope === "suma") {
        return `El resultado de la suma es: (num1 + num2)`;
    } else if (ope === "resta") {
        return `El resultado de la resta es: {num1 - num2}`;
    } else if (ope === "multiplicación") {
        return `El resultado de la multiplicación es: ${num1 * num2}`;
    } else if (ope === "división") {
        if (num2 !== 0) {
            return `El resultado de la división es: ${num1 / num2}`;
        } else {
            return "Error: No se puede dividir entre cero.";
        }
    } else {
        return "Operación no válida.";
    }
}


const resultado = calculadora();
console.log(resultado);

l






































