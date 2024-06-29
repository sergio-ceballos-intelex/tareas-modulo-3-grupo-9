const screen = document.querySelector(".screen");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const botonClicked = boton.textContent;

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
                screen.textContent = eval(screen.textContent)
            } catch {
                screen.textContent = "Error! Sintaxis invalida."
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

document.addEventListener("keydown", (event) => {
    const key = event.key;
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "Enter", "Backspace", "Delete"];

    if (allowedKeys.includes(key)) {
        event.preventDefault();

        if (key === "Enter") {
            try {
                screen.textContent = eval(screen.textContent);
            } catch {
                screen.textContent = "Error! Invalid syntax.";
            }
        } else if (key === "Backspace" || key === "Delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error! Invalid syntax.") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);
            }
        } else {
            if (screen.textContent === "0" || screen.textContent === "Error! Invalid syntax.") {
                screen.textContent = key;
            } else {
                screen.textContent += key;
            }
        }
    }
});