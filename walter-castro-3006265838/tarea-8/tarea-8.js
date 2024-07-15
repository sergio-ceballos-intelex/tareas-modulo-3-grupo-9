//!Tarea 8: Callbacks

//* 1. Callbacks en Manejo de Datos:
//* Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar
//* todos los números del arreglo.

// const numeros=[1,2,3,4,5]
// let suma=0;

// function arregloNumeros(numeros,callback){
//   for (let i = 0; i< numeros.length; i++) {
//     suma = suma + numeros[i];
//   }
//   callback(suma)
// }
// arregloNumeros(numeros, suma=> console.log(suma) )

// //* Segunda forma del ejercicio anterior.
// const numeross=[1,2,3,4,5]
// const sumar=(numeross)=> console.log(numeross.reduce((acumulador, valorActual) => acumulador + valorActual, 0)) ;

// const operacion = (callback) => {
//   callback();
// };
// operacion(()=>sumar(numeross))

//* 2. Callbacks para Filtrar Elementos de un Arreglo:
//* Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos
//* que pasan el filtro. Ejercicio:
//* manejar el resultado.

const numeros = [1, 2, 3, 4, 5];

function filtrarArreglo(arreglo, callbackFiltro) {
  return arreglo.filter(callbackFiltro);
}

const numerosPares = filtrarArreglo(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares);

//* 3.Callbacks: Filtrar Números Pares
//* Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.
//* Pasos:

function filtrarPares(numeros, callback) {
    const numerosPares= numeros.filter((numero) => numero % 2 === 0);  
    callback(numerosPares)
  }
  function mostrarPares(numerosPares){
     console.log(numerosPares)
  }
  //mostrarPares=(numerosPares)=>{console.log(numerosPares)}   
  filtrarPares(numeros,mostrarPares);

  //* 4. Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur
//* Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:
//* Se puede usar setTimeout para simular el tiempo de los vuelos.

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
      console.log("Llegué a Seul");
      callback();
    }, 10000);
  }
  
  function destinos() {
    vueloBogotaMadrid(() => {
    vueloMadridFrankfurt(() => {
         vueloFrankfurtSeul(() => {
          
        });
      });
    });
  }
  
  destinos()