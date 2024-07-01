
//*  1. Calculadora

let numero1 = Number(prompt("Registre el primer numero"));
let numero2 = Number(prompt("Registre el segundo numero"));
let operacion = Number(
  prompt("Opciones: 1 :Suma; 2 :resta; 3 :multiplicacion; 4 :division")
);

switch (operacion) {
  case 1:
    let suma = numero1 + numero2;
    console.log(`La suma es ${suma}`);
    break;
  case 2:
    let resta = numero1 - numero2;
    console.log(`La resta es ${resta}`);
    break;
  case 3:
    let multiplicacion = numero1 * numero2;
    console.log(`La multiplicacion es ${multiplicacion}`);
    break;
  case 4:
    let division = numero1 / numero2;
    console.log(`La division es ${division}`);
    break;
  default:
    console.log(`Opcion incorrecta`);
    break;
}

//**************** */

//* 2. Sistema de Gestión de Registro de Estudiantes











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



