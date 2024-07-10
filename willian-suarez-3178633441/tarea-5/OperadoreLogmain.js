// punto 3.

// 11

true || true || false && true || false && true && true || false
// se evalua la operacion AND (&& )por ser de mayor presedencia.
true || true || (false && true) || false && true && true || false
// se evalua de izquierda a derecha
true || true || (false && true) || false && true && true || false
// se evalaua el siguiente grupo de operacion AND.
true || true || false || (false && true && true) || false
// Evaluamos false && true && true.
true || true || false || false || false
// evaluamos operador OR(||).
true || true || false || false
// aplicamos finalmente operacion OR.
true

// 2

//Dividimos la expresion por partes y evaluamos
true && (false || false && (true && (true || false && true))) || false && (true || false)
// Evaluamos primero las operaciones dentro del parentesis.
false || false && (true && (true || false && true))
// seguimos con las operaciones dentro del parentisis mas interno o triple }
true || false && true
// evaluamosfalse && true
false && (true && true)
//Evaluamos (true false && true).
true && (false || false && (true && true)) || false && (true || false)
//solucionamos de izquierda a derecha.
true && (false || false && true) || false && (true || false)
// Evaluamos flase && true y false || false && true
true && false || false && (true || false)
// Evaluamos false && (true && false).
true && false || false
//Evaluamos true && false
false || false
//Resultado final.
false
//Por lo tanto, el resultado de la expresión 
true && (false || false && (true && (true || false && true))) || false && (true || false) 
//es false.

// 3

// dividimos en vaerias etapas
!(!true && (false || false && !!!true || (true && !false))) || false && true
// Primeros evaluamos las negaciones.
// !true -> false
// !false -> true
// !!!true -> !(!true) -> !false -> true
// convertimos la expresion.
!(false && (false || false && true || (true && true))) || false && true
// Evaluamos las opraciones dentro de los parentesis.
// true && true -> true
// false || false && true -> false || false -> false
// false || true -> true
//Convertir 
!(false && true) || false && true
//Evaluamos false && true.
false
// seconvierte
!false || false && true
// Evaluamos !false.
true
// Se convierte.
true || false && true
// Resultado.
false
//Esto convierte la expresión en
true || false
//Finalmente, evaluamos true || false.
true
//or lo tanto, el resultado de la expresión 
//!(!true && (false || false && !!!true || (true && !false))) || false && true es true.


