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

// Punto 2. Callbacks para Filtrar Elementos de un Arreglo:
// Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

function filtrarArreglo(arreglo, callbackFiltro) {
  return arreglo.filter(callbackFiltro);
}

const numerosDos = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numerosDos, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]