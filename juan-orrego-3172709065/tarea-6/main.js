// 1. multiplicar cada número por 2 y almacenar el resultado en un nuevo array.
let numeros = [1, 2, 3, 4, 5];
let numPorDos = []

for (let i = 1; i <= numeros.length; i++) {
    numPorDos.push((i)*2)
}

console.log(numPorDos);