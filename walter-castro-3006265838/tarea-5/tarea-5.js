//*  1. Calculadora

// let numero1 = Number(prompt("Registre el primer numero"));
// let numero2 = Number(prompt("Registre el segundo numero"));
// let operacion = Number(
//   prompt("Opciones: 1 :Suma; 2 :resta; 3 :multiplicacion; 4 :division")
// );

// switch (operacion) {
//   case 1:
//     let suma = numero1 + numero2;
//     console.log(`La suma es ${suma}`);
//     break;
//   case 2:
//     let resta = numero1 - numero2;
//     console.log(`La resta es ${resta}`);
//     break;
//   case 3:
//     let multiplicacion = numero1 * numero2;
//     console.log(`La multiplicacion es ${multiplicacion}`);
//     break;
//   case 4:
//     let division = numero1 / numero2;
//     console.log(`La division es ${division}`);
//     break;
//   default:
//     console.log(`Opcion incorrecta`);
//     break;
// }

//**************** */
//* 2. Sistema de Gestión de Registro de Estudiantes

let nombreEstudiante = prompt("Registra nombre del estudiante");
let edad = Number(prompt("Digita tu edad"));
let cantidadMateriaAprobadas;

if (edad > 18) {
  let promedio = Number(prompt("Registra el promedio de tus calificaciones"));
  if (promedio >= 6) {
    let esRegular = Number(prompt("Estudiante regular? 1: Si, 2: No "));
    cantidadMateriaAprobadas = Number(
      prompt("Registra la cantidad de materias aprobadas")
    );
    if (esRegular === 1) {
      let becado = Number(prompt("Estudiante becado? 1: Si, 2: No "));

      if (becado === 1) {
        console.log("Cumple con todos los requisitos");
      } else {
        console.log("Puedes solicitar el derecho a una beca");
      }
    } else {
      console.log("Debes registrarte en registro academico");
    }
  } else {
    console.log(
      "No cumple con el promedio minimo requerido por la institucion "
    );
  }
} else {
  console.log("No puede registrase en nuestra institucion. ");
}

//*************** */
//*3. Lógica proposicional
//*Resolver los siguientes ejercicios:

// 1. true || true || false && true || false && true && true || false
//true || true || false  || false  || false
// true || fasle
// true
//console.log(true || true || false && true || false && true && true || false)
//********************** */
// 2. true && (false || false && (true && (true || false && true))) || false && (true || false)
// (true && (false || false && (true && (true || false) ) ) || false && (true || false) )
// (true && (false || false && (true && (true) ) ) || false && (true) )
// (true && (false || false && (true) || false )
// (true && (false || false || false )
// (true && (false)
// (true && (false)
// false
//console.log( true && (false || false && (true && (true || false && true) ) ) || false && (true || false) )
//*********************** */
// 3. !(!true && (false || false && !!!true || (true && !false))) || false && true
//  !(false && (false || false && false || (true && true) ) ) || false
//  !(false && (false || false && false || (true) ) ) || false
//  !(false && (false || false || (true) ) )  || false
//  !(false && (true) )  || false
//  !(false )  || false
//    true  || false
//    true
//console.log(!(!true && (false || false && !!!true || (true && !false) ) ) || false && true)
