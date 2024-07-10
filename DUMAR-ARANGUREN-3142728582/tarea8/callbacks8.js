
// PUNYO 1
// **Callbacks en Manejo de Datos:**

// const numeros = [1, 2, 3, 4, 5];

// const sumarArreglo = (numerosArr, callback) => {
//   let saveSuma = 0;
//   numerosArr.forEach(numero => {
//     saveSuma += numero;
//   });
//   callback(saveSuma);
// };
// const mostrarResultadoCallback = (resultado) => {
//   console.log(resultado); // Debería imprimir 15
// }
// sumarArreglo(numeros, mostrarResultadoCallback);



// PUNTO 2
// **Callbacks para Filtrar Elementos de un Arreglo:**



// const numeros = [1, 2, 3, 4, 5];
// const filtrarNumerosPares = (arr, callback) => {
//   const numerosPares = arr.filter(numero => numero % 2 === 0);
//   callback(numerosPares);
// }

// const mostrarResultado = numerosPares => {
//   console.log(numerosPares); // Debería imprimir [2, 4]

// };
// filtrarNumerosPares(numeros, mostrarResultado);




// const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filtrarPares = (arr , callback) => {
// const numerosPares = arr.filter(numero => numero % 2 === 0);
// callback(numerosPares);
// }
// const mostrarPares = numerosPares => {
//     console.log(numerosPares);
// };
// filtrarPares(numeros, mostrarPares);


// PUNTO 3.
// **Callback asíncrono: Simulacion vuelo desde Colombia hasta Corea del Sur**

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


// OPCIONAL 

const suenaElDespertador = () => console.log('Timbra la alarma a las 6.30 am hora de trabajar,pospongo 10 minutos');

const alarma1 = (callback) => {
    setTimeout(() => {
        console.log('Timbra la alarma a las 6.40 am, pospongo 10 minutos');
        callback();
    }, 5000);
};

const alarma2 = (callback) => {
    setTimeout(() => {
        console.log('Timbra la alarma a las 6.50 am, pospongo 10 minutos');
        callback();
    }, 5000);
};

const alarma3 = (callback) =>{
    setTimeout(() => {
        console.log('Pailas, Me cogio la tarde');
    }, 5000);
};

suenaElDespertador()
alarma1(() => {
    alarma2(() => {
        alarma3();
    });
});

    

    
