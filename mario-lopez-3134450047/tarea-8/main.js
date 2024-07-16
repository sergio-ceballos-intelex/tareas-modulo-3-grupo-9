//Callbacks en manejo de datos:
function sumarArreglo(numeros, callback) {
  // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
  // Usamos reduce  para sumar todos los  numeros del arreglo
  const suma = numeros.reduce((acumulador,numero) => acumulador + numero,0)
  callback(suma)
}
const numeros = [1, 2, 3, 4, 5];
sumarArreglo(numeros, function (resultado) {
  console.log(resultado); // Debería imprimir 15
});

//Callbacks para filtrar elementos de un Arreglo
function filtrarArreglo(arreglo, callbackFiltro) {
  // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
  return arreglo.filter(callbackFiltro)
}

const numeros_punto_dos = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros_punto_dos, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // Debería imprimir [2, 4]

//PUNTO 3 Callbacks: Filtrar numeros pares

// Función para filtrar números pares y llamar a un callback con el resultado
function filtrarPares(numeros, callback) {
  const numeros_pares = numeros.filter(indice => indice % 2 === 0)
  callback(numeros_pares)
}

// Callback para mostrar los números pares en la consola
function mostrarPares(numerosParesNew) {
  // Tu codigo acá
  console.log(numerosParesNew)
}

// Array de números de ejemplo
const numeros_punto_tres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Llamar a la función filtrarPares y pasar el callback mostrarPares
filtrarPares(numeros_punto_tres, mostrarPares);

//PUNTO 4: Callback  asíncrono: Simulación vuelo desde Colombia hasta Corea del Sur
const vuelo1 = (callback) => {
  console.log("Estoy en Bogotá")
  setTimeout(() => {
      console.log('Vuelo Bogota - Madrid, me demoré 7 horas');
      callback();
  }, 7000);
};

const vuelo2 = (callback) => {
  console.log("Llegué a Madrid")
  setTimeout(() => {
      console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas');
      callback();
  }, 2000);
};

const vuelo3 = (callback) => {
  console.log('Llegué a Frankfurt')
  setTimeout(()=> {
    console.log("Vuelo Frankfurt - Seul, me demoré 10 horas");
    callback();
  },10000);
}

vuelo1(() => {
  vuelo2(() => {
      vuelo3(() =>{
        console.log("Llegué a Seul")
      });
  });
});