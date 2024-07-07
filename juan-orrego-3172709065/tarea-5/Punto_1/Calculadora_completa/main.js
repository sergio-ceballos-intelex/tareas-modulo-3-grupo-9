// 1. Selecciona el primer elemento con la clase screen donde se muestran resultados y entradas
// 2. Selecciona TODOS los botones de la calculadora
const screen = document.querySelector(".screen"); 
const botones = document.querySelectorAll(".btn"); 


// Para eventos de tipo CLIC

botones.forEach(boton => {
    boton.addEventListener("click", () => { // Se itera sobre cada boton, se escucha el evento, y se ejecuta función anonima.
        const botonClicked = boton.textContent; // .textContent Obtiene el texto del boton que fue clickeado ya sea número o operador

        if (boton.id === "deleteAll"){
            screen.textContent = "0";
            return;
        }

        if (boton.id === "delete"){
            if (screen.textContent.length === 1 || screen.textContent === "Error! Sintaxis invalida."){
                screen.textContent = "0";
            }else{
                screen.textContent = screen.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id === "equal"){
            try {
                screen.textContent = eval(screen.textContent) // Eval evalua la exprecion matematica que este en screen
            } catch {
                screen.textContent = "Error! Sintaxis invalida." // El catch captura cualquier error sintactico presente en screen y muestra el mensaje de error
            }
            return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error! Sintaxis invalida."){
            screen.textContent = botonClicked;
        }else{
            screen.textContent += botonClicked;
        }
    })
})

// Para eventos de tipo keyboard Numpad y tecla de numero 

// 1. Selecciona el elemento del documento que representa la pantalla de la calculadora donde se muestran los resultados y las entradas.
// 2. Selecciona todos los elementos del documento que representan los botones de la calculadora.

document.addEventListener("keydown", (event) => {
    const key = event.key; // Obtiene la tecla presionada del evento.
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "Enter", "Backspace", "Delete"]; // Define las teclas permitidas.

    if (allowedKeys.includes(key)) { // Verifica si la tecla presionada está permitida.
        event.preventDefault(); // Evita el comportamiento predeterminado del evento.

        if (key === "Enter") { // Si la tecla presionada es "Enter".
            try {
                screen.textContent = eval(screen.textContent); // Evalúa la expresión matemática en la pantalla y muestra el resultado.
            } catch {
                screen.textContent = "Error! Invalid syntax."; // Muestra un mensaje de error si la sintaxis es inválida.
            }
        } else if (key === "Backspace" || key === "Delete") { // Si la tecla presionada es "Backspace" o "Delete".
            if (screen.textContent.length === 1 || screen.textContent === "Error! Invalid syntax.") { // Si la pantalla tiene un solo carácter o muestra un mensaje de error.
                screen.textContent = "0"; // Restablece la pantalla a cero.
            } else {
                screen.textContent = screen.textContent.slice(0, -1); // Elimina el último carácter de la pantalla.
            }
        } else { // Si la tecla presionada es un número, operador o punto decimal.
            if (screen.textContent === "0" || screen.textContent === "Error! Invalid syntax.") { // Si la pantalla muestra cero o un mensaje de error.
                screen.textContent = key; // Reemplaza el contenido de la pantalla con la tecla presionada.
            } else {
                screen.textContent += key; // Agrega la tecla presionada al contenido de la pantalla.
            }
        }
    }
});