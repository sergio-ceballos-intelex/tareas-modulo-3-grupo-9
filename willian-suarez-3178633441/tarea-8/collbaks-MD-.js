// 1. Crea una función que tome un arreglo de números y un callback, 
//y llame al callback con el resultado de sumar todos los números del arreglo.


// function sumarArreglo(numeros, callback) {
    // const suma = numeros.reduce((a, b) => a + b, 0);
    // callback(suma);
  // }
  // 
  // const numeros = [1, 2, 3, 4, 5];
  // sumarArreglo(numeros, function(resultado) {
    // console.log(resultado); 
  // });
//15

// 2.  Crea una función que tome un arreglo y un callback de filtro, 
//y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:

// function filterArray(array, filterCallback) {
  // const filteredArray = [];
  // for (let i = 0; i < array.length; i++) {
    // if (filterCallback(array[i])) {
      // filteredArray.push(array[i]);
    // }
  // }
  // return filteredArray;
// }
// 
// 
// const numbers = [1, 2, 3, 4, 5, 6];
// const paresNumbers = filterArray(numbers, function(number) {
  // return number % 2 === 0;
// });

// console.log(paresNumbers); 
// 
// Salida: [2, 4, 6]

// 3 punto.
// Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

// function filtrarPares(numeros2, callback) {
  // const numerosPares = numeros2.filter((numero) => numero % 2 === 0);
  // callback(numerosPares);
// }

// function mostrarPares(numerosPares) {
  // console.log(numerosPares);
// }
// const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filtrarPares(numeros2, mostrarPares);

//[2,4,6,8,10]

// Punto 4.
//Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
//Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:

//Vuelo Bogota - Madrid: 7000ms (7 horas)
//Vuelo Madrid - Frankfurt: 2000ms (2 horas)
//Vuelo Frankfurt - Seul: 10000ms (10 horas)
//Llegada a Seul

function vueloBogotaMadrid(callback) {
  console.log("Estoy en Bogota");
  setTimeout(() => {
    console.log("Vuelo Bogota - Madrid, me demoré 7 horas");
    console.log("Llegué a Madrid");
    callback();
  }, 7000);
}

function vueloMadridFrankfurt(callback) {
  setTimeout(() => {
    console.log("Vuelo Madrid - Frankfurt, me demoré 2 horas");
    console.log("Llegué a Frankfurt");
    callback();
  }, 2000);
}

function vueloFrankfurtSeul(callback) {
  setTimeout(() => {
    console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
    callback();
  }, 10000);
}

function simulacionVuelo() {
  vueloBogotaMadrid(() => {
    vueloMadridFrankfurt(() => {
      vueloFrankfurtSeul(() => {
        console.log("Llegué a Seul");
      });
    });
  });
}

simulacionVuelo()

//Estoy en Bogota
//vuelo Bogota - Madrid, me demoré 7 horas
//llegué a Madrid
//vuelo Madrid - Frankfurt, me demoré 2 horas
//llegué a Frankfurt
//vuelo Frankfurt - Seul, me demoré 10 horas
//legué a Seul
























