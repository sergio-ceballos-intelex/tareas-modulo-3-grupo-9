//primer punto 

function sumarArreglo(num1, callback) {
    let suma = 0;
    for (let num of num1) {
      suma += num;
    }
    callback(suma);
  }
  const num1 = [1, 2, 3, 4, 5];
  sumarArreglo(num1, function(resultado) {
    console.log(resultado); 
  });

  // segundo 

  function filtrarArreglo(arreglo, callbackFiltro) {
    let resultado = [];
    for (let elemento of arreglo) {
      if (callbackFiltro(elemento)) {
        resultado.push(elemento);
      }
    }
    return resultado;
  }
  const numeros = [1, 2, 3, 4, 5];
  const Pares = filtrarArreglo(numeros, function(numero) {
    return numero % 2 === 0;
  });
  console.log(Pares);

//tercero 

function filtrarPares(eros, callback) {
  
    const numerosPares = eros.filter(numero => numero % 2 === 0);
    callback(numerosPares);
  }
  function mostrarPares(numerosPares) {
    numerosPares.forEach(numero => {
      console.log(numero);
    });
  }
  let conteo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  filtrarPares(conteo, mostrarPares);

  //cuarto 

//   function vuelo(origen, destino, tiempo) {
//     console.log(Estoy  ${origen});
//     setTimeout(() => {
//       console.log(vuelo ${origen} - ${destino}, me demore ${tiempo/1000});
//       console.log(Llegué a ${destino});
//     });
//   }
//   function vueloDesdeColombiaHastaCorea() {
//     vuelo('Bogota', 'Madrid', 7000); 
//     setTimeout(() => {
//       vuelo('Madrid', 'Frankfurt', 2000); 
//     }, 7000); 
//     setTimeout(() => {
//       vuelo('Frankfurt', 'Seul', 10000); 
//     }, 9000); 
//   }
  
//   vueloDesdeColombiaHastaCorea();