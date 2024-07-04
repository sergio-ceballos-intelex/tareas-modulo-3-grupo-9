// calculadora
const numero1=Number(prompt("Digita el primer numero"));
const numero2=Number(prompt("Digita el segundo numero"));
const operacion=prompt("Digita la  operacion que quieres hacer");

if(operacion==="suma"||operacion==="+")
    {
        document.write("La suma de tus numeros es: ", numero1 + numero2);
    }
    else if (operacion==="resta"||operacion==="-")
        {
            document.write("La resta de tus numeros es: ", numero1 - numero2);
        }
    else if (operacion==="divicion"||operacion==="/")
        {
            if (numero2 === 0){
                document.write("ERROR: la divicion por 0")}
            if (numero2 != 0)
            document.write("La divicion de tus numeros es: ", numero1 / numero2);
        
        }
    else if (operacion==="multiplicacion"||operacion==="*")
        {
            document.write("La multiplicacion de tus numeros es: ", numero1 * numero2);
        }
