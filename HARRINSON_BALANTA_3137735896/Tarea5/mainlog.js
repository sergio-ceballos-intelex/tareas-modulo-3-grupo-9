// Lógica proposicional punto 1
console.log (true || true || false && true || false && true && true || false)
console.log (true || false && true || false && true && true || false)
console.log (true  && true || false && true && true || false)
console.log (true || false && true && true || false)
console.log (true && true && true || false)
console.log (true && true || false)
console.log (true || false)
console.log (true)
// Lógica proposicional punto 2
console.log(true && (false || false && (true && (true || false && true))) || false && (true || false))
console.log(true && (false || false && (true && (true || false && true))) || false && true )
console.log(true && (false || false && (true && (true || false))) || false && true )
console.log(true && (false || false && (true && true)) || false && true )
console.log(true && (false || false &&  true) || false && true )
console.log(true && (false || false ) || false && true )
console.log(true && false || false  || false)
console.log( false || false  || false)
console.log( false  || false)
console.log(false)

// Lógica proposicional punto 3
console.log (!(!true && (false || false && !!!true || (true && !false))) || false && true)
console.log (!(!true && (false || false && !!!true || true)) || false && true)
console.log (!(!true && (false || false && false || true)) || false && true)
console.log (!(!true && (false || true)) || false && true)
console.log (!(!true && true) || false && true)
console.log (!(false && true) || false && true)
console.log (!false || false && true)
console.log (true || false && true)
console.log (true || false)
console.log (true)
