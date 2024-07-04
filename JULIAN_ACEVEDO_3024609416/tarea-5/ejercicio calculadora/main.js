//Calculadora

const number1 = Number(prompt("Digita el primer número de tu operación"));
const number2 = Number(prompt("Digita el segundo número de tu operación"));
const operation = prompt(
  "Indica la operación a realizar (suma, resta, multiplicacion, division)"
);

function calcular(numero1, numero2, operacion) {
  if (operacion === "suma" || operacion === "+") {
    return numero1 + numero2;
  } else if (operacion === "resta" || operacion === "-") {
    return numero1 - numero2;
  } else if (operacion === "multiplicacion" || operacion === "*") {
    return numero1 * numero2;
  } else if (operacion === "division" || operacion === "/") {
    if (numero2 === 0) {
      return "Error: División por cero";
    }
    return numero1 / numero2;
  } else {
    return "Error: Operación no válida";
  }
}

alert(`El resultado es ${calcular(number1, number2, operation)}`);
