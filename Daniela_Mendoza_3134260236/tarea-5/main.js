// 1. Calculadora

// const problema = prompt("suma, resta, multiplicacion, division")
// const numeroA = Number(prompt("digita el primer numero"))
// const numeroB = Number(prompt("digita el segundo numero"))

// if (problema === "suma"){
//     const resultado = numeroA + numeroB
//     document.write("tu resultado es:", resultado);
// }else if (problema === "resta"){
//     const resultado = numeroA - numeroB
//     document.write("tu resulatdo es:", resultado);
// }else if (problema === "multiplicacion"){
//     const resultado = numeroA * numeroB
//     document.write("tu resulatdo es:", resultado);
// }else if (problema === "division"){
//     const resultado = numeroA / numeroB
//     document.write("tu resulatdo es:", resultado);
// }

// 2. Sistema de Gestión de Registro de Estudiantes

// const estudiante = {
//     nombre: "Daniela",
//     edad: 15,
//     promedio: 6,
//     esRegular: true,
//     cantidadMateriasAprobadas: 5,
//     esBecado: false
//   };

// const edad = 18;
// console.log(edad <= 17 ? 'el estudiante es mayor de edad' : 'el estudiante es menor de edad y no puede registrarse');
// const promedio = 10;
// console.log(promedio < 6 ?'cumple el promedio minimo requerido' : 'estudiante no cumple con el promedio mínimo requerido');
// const promedio2 = 10;
// const edad2 = 18;
// console.log(edad2 >= 18 ? 'el estudiante debe registrarse como regular' : 'no está registrado como regular');
// const edad3 = 18;
// const promedio3 = 10;
// console.log(edad3 >= 6 ? 'puede solicitar una beca' : 'registrado como regular pero no tiene una beca');
// const edad4 = 18;
// const promedio4 = 10;
// console.log(edad4 >= 6 ? 'el estudiante cumple con todos los requisitos' : 'está registrado como regular y tiene una beca');

// 3. Lógica proposicional

// 1 // 
// console.log(true || true || false && true || false && true && true || false)

// true || true || false && true || false && true && true || false
// true || true || false || false || false
// true || true || false
// true || false
// true

// 2
// console.log(true && (false || false && (true && (true || false && true))) || false && (true || false))

// (true && (false || false && (true && (true || false))) || false && (true || false))
// (true && (false || false && true) || false && (true || false))
// (true && (false || false && true) || false && true)
// (true && (false || false) || false && true)
// (true && false || false && true)
// (false || false && true)
// (false || false)
// false

// 3
console.log(!(!true && (false || false && !!!true || (true && !false))) || false && true);

// (!(!true && (false || false && !!!true || (true && !false))) || false && true)
// (!(!true && (false || false && !!!true || (true && true))) || false && true)
// (!(!true && (false || false && !!!true || true)) || false && true)
// (!(!true && (false || false && false || true)) || false && true)
// (!(!true && (false || false && false || false && true)))
// (!(!true && (false || false || false && true)))
// (!(!true && (false || false || false)))
// (!(!true && false))
// (!(false && false))
// (!false)
// true
