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

// Punto 3. Callbacks: Filtrar Números Pares
/* Descripción: Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

Pasos a seguir:

Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
Llama al callback pasado como parámetro con el array de números pares como argumento.
Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.*/


// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
  const numPares = numeros.filter((num) => num % 2 == 0)
  callback(numPares) 
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosPares) {
  console.log(numerosPares)
}

// Array de números de ejemplo
const numerosTres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numerosTres, mostrarPares);