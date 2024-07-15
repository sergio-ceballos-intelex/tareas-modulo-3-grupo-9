const numeros = [1, 2, 3, 4, 5];
function sumarArreglo(numeros, callback) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  callback(suma);
}


sumarArreglo(numeros, function (resultado) {
  console.log(resultado); //  imprime el numero 15
});
