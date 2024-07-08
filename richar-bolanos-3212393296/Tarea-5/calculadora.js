//  usuario que ingrese los dos valores
const valor1 = parseFloat(prompt("Ingrese el primer valor: "));
const valor2 = parseFloat(prompt("Ingrese el segundo valor: "));

//  ingrese la operación que desea realizar
const operacion = prompt(
  "Ingrese la operación que desea realizar (suma,+, resta,-, multiplicación,*, división,/): "
);

// Realizamos la operación correspondiente
let resultado;
switch (operacion) {
  case ("suma", "+"):
    resultado = valor1 + valor2;
    break;
  case ("resta", "-"):
    resultado = valor1 - valor2;
    break;
  case ("multiplicación", "*"):
    resultado = valor1 * valor2;
    break;
  case ("división", "/"):
    if (valor2 === 0) {
      alert("Error: no se puede dividir entre cero!");
    } else {
      resultado = valor1 / valor2;
    }
    break;
  default:
    alert("Error: operación no válida!");
}

// Mostrar el resultado
if (resultado !== undefined) {
  alert(`El resultado de la operación es: ${resultado}`);
}
