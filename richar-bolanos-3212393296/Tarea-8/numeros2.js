function filtrarArreglo(arreglo, callbackFiltro) {
  const nuevoArreglo = [];
  for (let i = 0; i < arreglo.length; i++) {
    if (callbackFiltro(arreglo[i])) {
      nuevoArreglo.push(arreglo[i]);
    }
  }
  return nuevoArreglo;
}

const numeros = [1, 2, 3, 4, 5];
const numerosPares = filtrarArreglo(numeros, function (numero) {
  return numero % 2 === 0;
});
console.log(numerosPares); // Se imprime [2, 4]
