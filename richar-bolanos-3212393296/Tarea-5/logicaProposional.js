//Ejercicio 1

true || true || false && true || false && true && true || false
//Evaluao la expresión false && true:
false && true => false //(porque el primer operando es false)
//Remplazo la expresión evaluada en la original:
true || true || false || false && true && true || false
//Evaluo la expresión false && true && true:
false && true && true => false //(porque el primer operando es false)
//Remplazo la expresión evaluada en la original:
true || true || false || false || false
//Evaluo la expresión con los operadores ||:
true || true || false || false || false => true //(porque al menos uno de los operandos es true)
//Resultado final: true


//Ejercicio 2

true && (false || false && (true && (true || false && true))) || false && (true || false)
//Evaluo la expresión true && (true || false && true):
true && (true || false && true) => true && (true || false) => true && true => true
//Remplazo la expresión evaluada en la original:
true && (false || false && true) || false && (true || false)
//Evaluamos la expresión false && true:
false && true => false
//Remplazo la expresión evaluada en la original:
true && (false || false) || false && (true || false)
//Evaluo la expresión false || false:
false || false => false
//Remplazo la expresión evaluada en la original:
true && false || false && (true || false)
//Evaluo la expresión false && (true || false):
false && (true || false) => false
//Remplo la expresión evaluada en la original:
true && false || false
//Evaluo la expresión con los operadores && y ||:
true && false || false => false || false => false
//Resultado final: false



//Ejercicio 3

!(!true && (false || false &&!!!true || (true &&!false))) || false && true
//Evaluo la expresión !!!true:
!!!true => true //(porque ! es una negación, y !!! es equivalente a !(!(!true)))
//Remplazo la expresión evaluada en la original:
!(!true && (false || false && true || (true &&!false))) || false && true
//Evaluo la expresión false && true:
false && true => false
//Remplo la expresión evaluada en la original:
!(!true && (false || false && true || true)) || false && true
//Evaluo la expresión false || false && true || true:
false || false && true || true => false || false || true => true
//Remplazo la expresión evaluada en la original:
!(!true && true) || false && true
//Evaluo la expresión !true && true:
!true && true => false && true => false
//Remplo la expresión evaluada en la original:
!(false) || false && true
//Evaluo la expresión !(false):
!(false) => true
R//remplazo la expresión evaluada en la original:
true || false && true
//Evaluo la expresión false && true:
false && true => false
//Remplazo la expresión evaluada en la original:
true || false
//Evaluo la expresión con los operadores ||:
true || false => true
//Resultado final: true