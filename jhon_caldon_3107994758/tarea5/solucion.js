// Registro de un estudiante 
const name=prompt("Digita tu nombre ");
const edad=Number(prompt("Digita tu edad"));
const notas=Number(prompt("Digita el promedio de tus notas entre 0 a 10"));
const regular = confirm("¿Eres un estudiante regular?");
const materias= Number(prompt("Digita las materias aprobadas"))
const beca= confirm("¿Eres becado?")
  document.write(
    "Nombre del estudiante:"+ name+ "<br>"+
    "Edad:"+ edad+"<br>"+
    "Promedio de Notas: " + notas+"<br>"+
    "Estudiante Regular: " +( regular? "si":"no")+"<br>"+
    "Materias Aprobadas:"+ materias+ "<br>"+
    "Es becado: "+ (beca? "si":"no")+"<br>"
  )
if (edad < 18)
    {
        document.write("Eres menor de edad no podemos registrar");
    }
    else if (notas<= 5)
        {
            document.write("No cumples con el promedio minimo de notas requerido");
        }
    else if (regular == false)
        {
            document.write("Debes primero registrarte como regular");
        
        }
    else if (beca===false)
        {
            document.write("Puedes solicitar una beca ya que cumples con los requisitos");
        }
    else if (notas>=6 && regular && beca){
            document.write("Felicidades cumples con todos los requisitos felicidades")
        }
   