// Punto 1. Callbacks en Manejo de Datos:
// Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

function sumarArreglo(numeros, callback) {
    const resultado = numeros.reduce((a, b) => a + b, 0);
    callback(resultado);
  }
  const numeros = [1, 2, 3, 4, 5];

sumarArreglo(numeros, function (resultado) {
  console.log(resultado); // Debería imprimir 15
});