//Crea una función que tome un arreglo de números y un callback, y llame al callback con el resultado de sumar todos los números del arreglo.

//   const numeros = [1, 2, 3, 4, 5];

//  const sumarArreglo =(numero, callback) => {
//     let Suma = 0;
//     numero.forEach(numer => {
//         Suma+=numer;
//     });
//     callback(Suma)
//  };
//  const resultado=(resulta)=>{
//     console.log(resulta); 
// }
// sumarArreglo (numeros,resultado)

///////////////////////////////////////////////////////////////////////////////////////////////

//Callbacks para Filtrar Elementos de un Arreglo:

// function  arreglos(arreglo,callbackfil){
//     const filtro= arreglo.filter(callbackfil)
//     return filtro
// }
// const numeros = [1, 2, 3, 4, 5];
// const Pares = arreglos(numeros,
//     function (numero){
//     return numero % 2 === 0;
// });
// console.log(Pares);

/////////////////////////////////////////////////////////////////////////////////////////////

//Creea una función en JavaScript que filtre los números pares de un array y utilicen un callback para manejar el resultado.

// function filtrarPares(numeros, callback) {
//     const numPares = numeros.filter((num) => num % 2 == 0)
//     callback(numPares) 
//   }
  
  // Callback para mostrar los números pares en la consola
//   function mostrarPares(numerosPares) {
//     console.log(numerosPares)
//   }
  
  // Array de números de ejemplo
  //const numerosTres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  // Llamar a la función filtrarPares y pasar el callback mostrarPares
  //filtrarPares(numerosTres, mostrarPares);

  //////////////////////////////////////////////////////////////////////////////////////////

  // Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur

  const aeropuerto = () => console.log('Estoy en Bogota');

const vueloBogotaMadrid = (callback) => {
    setTimeout(() => {
        console.log('Vuelo Bogota - Madrid, me demoré 7 horas');
        callback();
    }, 7000);
};

const aeropuertoMadrid = () => console.log('Llegué a Madrid');

const vueloMadridFrankfurt = (callback) => {
    setTimeout(() => {
        console.log('Vuelo Madrid - Frankfurt, me demoré 2 horas');
        callback();
    }, 2000);
};
const aeropuertofrankfurt = () => console.log('Llegué a Frankfurt');

const vueloFrankfurtSeul = (callback) => {
    setTimeout(() => {
        console.log('Vuelo Frankfurt - Seul, me demoré 10 horas');
        callback();
    }, 10000);
}

const areropuertoSeul = () => console.log('Llegué a Seul');

aeropuerto();
vueloBogotaMadrid(() => {
    aeropuertoMadrid();
        vueloMadridFrankfurt(() => {
            aeropuertofrankfurt(); 
                vueloFrankfurtSeul(() => {
                    areropuertoSeul();
                });
            });
        });


