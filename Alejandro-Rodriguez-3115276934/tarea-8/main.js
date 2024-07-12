//Descripción: Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

//Ejercicio:

function sumarArreglo(numeros, callback) {
    // Completa esta función para sumar todos los números del arreglo y llamar al callback con el resultado
    const resultado= numeros.reduce((contador, numero)=> contador + numero, 0)
    callback(resultado)
  }
  const numeros2 = [1, 2, 3, 4, 5];
  sumarArreglo(numeros2, function (resultado) {
    console.log(`la suma de este array es = ${resultado}`); // Debería imprimir 15
  }); 
  
  // Descripción: Crea una función que tome un arreglo y un callback de filtro, y devuelva un nuevo arreglo con los elementos que pasan el filtro. Ejercicio:
  
  function filtrarArreglo(arreglo, callbackFiltro) {
    // Completa esta función para devolver un nuevo arreglo con los elementos que pasan el filtro
    
    const filtro= arreglo.filter(callbackFiltro)
    return filtro
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  const numerosPares1 = filtrarArreglo(numeros1, function (numero) {
    return numero % 2 === 0;
  });
  console.log(numerosPares1); // Debería imprimir [2, 4]
  
  //Descripción: Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.
  //Pasos a seguir:
  
  /*Crea una función llamada filtrarPares que acepte dos parámetros: un array de números y un callback.
  Dentro de la función filtrarPares, utiliza el método filter para filtrar los números pares del array.
  Llama al callback pasado como parámetro con el array de números pares como argumento.
  Implementa un callback llamado mostrarPares que acepte un parámetro numerosPares. Este callback debe imprimir los números pares en la consola.
  ¡No olvides probar tu función llamando a filtrarPares y pasando mostrarPares como callback! */
  
  // Función para filtrar números pares y llamar a un callback con el resultado
  
  function filtrarPares(numeros, callback) {
    // Tu codigo acá
    numerosPares=numeros.filter(numero=> numero %2 ===0)
  callback(numerosPares)
  
  }
  
  // Callback para mostrar los números pares en la consola
  function mostrarPares(numerosPares) {
    // Tu codigo acá
  console.log(numerosPares)
  }
  
  // Array de números de ejemplo
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  filtrarPares(numeros, mostrarPares); 
  
  /*
  Hacer un programa que simule un vuelo desde Colombia hasta Corea del Sur respetando el orden de los vuelos:
  
  Vuelo Bogota - Madrid: 7000ms (7 horas)
  Vuelo Madrid - Frankfurt: 2000ms (2 horas)
  Vuelo Frankfurt - Seul: 10000ms (10 horas)
  Llegada a Seul
  El programa debe imprimir lo siguiente:
  
    // Estoy en Bogota
    // Vuelo Bogota - Madrid, me demoré 7 horas
    // Llegué a Madrid
    // Vuelo Madrid - Frankfurt, me demoré 2 horas
    // Llegué a Frankfurt
    // Vuelo Frankfurt - Seul, me demoré 10 horas
    // Llegué a Seul
  Se puede usar setTimeout para simular el tiempo de los vuelos.*/
  
  const vueloMadrid= (callback) => {
    setTimeout(()=> {
    console.log("llegamos a Madrid")
    console.log("saldremos para Franckfurt seran 2 horas")
    callback(vueloSeul);
  },7000)
  };
  const vueloFranckfurt= (callback) => {
        setTimeout(()=> {
        console.log("llegamos a franckfurt")
        console.log("Vuelo Frankfurt - Seul, me demoré 10 horas")
        callback();
    },2000)
  };
  const vueloSeul= () => {
        setTimeout(()=> {
        console.log("llegamos a Seul")
  },10000)
  };
  
  vueloMadrid(vueloFranckfurt)
  console.log("estamos en Bogota")
  console.log("Ya salimos para Madrid el vuelo Tardara 7 horas") 