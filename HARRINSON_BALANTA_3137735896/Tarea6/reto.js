// mostrar el nombre y edad de una persona usando uan guncion si la persona es mayor de edad 
// debe decir que es mayor de edad

function verificaredad (nombre,edad) {
  if(edad >= 18){
    console.log(`${nombre} es mayor de edad. Tiene ${edad} años.`)
  }else{
    console.log(`${nombre} es menor de edad. Tiene ${edad} años.`)
  }
}
verificaredad("Juan",17)