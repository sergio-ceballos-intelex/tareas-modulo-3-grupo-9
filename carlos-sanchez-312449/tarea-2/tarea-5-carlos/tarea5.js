// primer punto 

    let num1 = Number(prompt("Ingresa tu primer numero"));
    let num2 = Number(prompt("Ingresa tu segundo numero"));
    let op = prompt("¿Que operacion matematica quiere hacer? en simbolos").toUpperCase();
            
            
        if(op == '+'){
        result = num1 + num2
        document.write("El resultado es: ",result);
         } else if (op == '-'){
         result = num1 - num2
         document.write("El  resultado es: ",result);
          } else if (op == '/'){
           result = num1 / num2
           document.write("Tu resultado es: ",result);
            } else if (op == '*'){
                result = num1 * num2
                document.write("Tu resultado es: ",result);
            } else if (op != String) {
                document.write("Incorrecto")
            }
            
