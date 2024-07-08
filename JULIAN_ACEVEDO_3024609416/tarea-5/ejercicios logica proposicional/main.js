// EJERCICIOS LOGICA PROPOSICIONAL
// 1. true || true || false && true || false && true && true || false

// true || true || false || false || false
// true || false || false || false
// true || false || false
// true || false
// true

console.log(
  true || true || (false && true) || (false && true && true) || false
); // true

// 2. true && (false || false && (true && (true || false && true))) || false && (true || false)

// true && (false || false && (true && true)) || false && (true || false)
// true && (false || false && true) || false && (true || false)
// true && false || false && (true || false)
// false || false && true
// false || false
// false

console.log(
  (true && (false || (false && true && (true || (false && true))))) ||
    (false && (true || false))
); // false

// 3. !(!true && (false || false && !!!true || (true && !false))) || false && true

// !false && (false || false && false || (true && true)) || false && true
// !false && (false || false || true) || false && true
// !false && (false || true) || false && true
// !false && true || false && true
// true && true || false && true
// true || false && true
// true || false
// true

console.log(
  !(!true && (false || (false && !!!true) || (true && !false))) ||
    (false && true)
); // true
