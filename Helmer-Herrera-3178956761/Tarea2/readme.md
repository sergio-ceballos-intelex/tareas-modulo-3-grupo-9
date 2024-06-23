**ESTRUCTURAS DE CONTROL JS**

También conocidas como condicionales o bucles (según el tipo), las estructuras de control permiten indicar qué instrucciones y en qué orden se van a ejecutar en un programa (o trozo de código). Existen dos tipos: las de selección y las de iteración.

**Estructuras de selección**

Teniendo presente que, un conjunto de instrucciones no tiene por qué ejecutarse en orden secuencial, comprenderemos mejor la funcionalidad de las estructuras de selección o condicionales.

Tomando el ejemplo de la baraja, si quisiésemos poner una carta de corazones en ese montón, ¿cómo lo haríamos? La solución es sencilla: comparamos la carta sacada del mazo para saber si es de dicho palo. Es lo que se denomina «condición lógica» (la pregunta «¿es de corazones esta carta?»), que arrojará un resultado booleano (*true* o *false*). Y aquí entre la estructura **if / else** (si / si no).

var carta = “5c”;

if (carta[1] === “c”) {

`    `console.log(“Es una carta de corazones.”);

}

En este caso, solo se utiliza el **if** de la estructura de selección. Observando las líneas de código, se puede apreciar la comparación lógica entre la posición donde se guarda el valor del palo de la variable carta y un *string*. Al comprobar que la condición se cumple, se ejecutará la instrucción (lo que va entre las llaves {}) de mostrar por pantalla el mensaje escrito entre comillas.

Si quisiéramos incluir la posibilidad de que no se cumpla la condición, entonces utilizaremos también **else**.

var carta = “5p”;

if (carta[1] === “c”) {

`    `console.log(“Es una carta de corazones.”);

} else {

`    `console.log(“No es una carta de corazones.”);

}

Al no cumplirse la condición (es *false*), la instrucción dentro del **if** no se ejecutará; pasará al **else** y se ejecutará esa línea (la que está dentro de sus llaves {}).

**Recomendación:** para que el código sea legible (y mantenga un orden) es recomendable utilizar sangrado o indentación, mediante tabulaciones o espacios (lo que se prefiera). De este modo, se verá más claramente la pertenencia de las líneas. En el ejemplo anterior, se puede apreciar que las líneas de *console.log* están dentro del *if* y del *else*, respectivamente (he ahí la pertenencia).
Otro punto importante con el JavaScript es utilizar el punto y coma (;) al final de cada sentencia. Aunque la mayoría de navegadores actuales pueden solventar este error (olvidarse un punto y coma en alguna parte del código), lo recomendable es ponerlos como buena práctica.

Se puede anidar o encadenar un **if** dentro de otro, o dentro de un **else**. E, incluso, anidar una estructura de iteración con una de selección (por ejemplo, para recorrer una baraja completa y comparar cada carta con una condición dada).

var carta = “4p”;

if (carta[1] === “c”) {

`    `console.log(“Es una carta de corazones.”);

} else {

`    `if (carta[1] === “p”) {

`        `console.log(“Es una carta de picas”);

`    `}

}

**Nota:** se debe tener cuidado al abrir y cerrar llaves y paréntesis, puesto que es sencillo olvidarse de esto en códigos extensos, cayendo en errores de sintaxis *(syntax error)*. La mayoría de editores (Brackets, Sublime Text, Notepad++, etc.) facilitan esta labor.

**Estructuras de iteración**

Son denominadas de repetición o bucles, puesto que ejecutan las mismas líneas de código tantas veces como se especifique; hasta que se cumple la condición de parada (una condición lógica, como en las estructuras de control). Con estas estructuras podríamos recorrer la baraja de nuestro ejemplo, mostrando en la consola un *string* para cada iteración.

for (var i = 1; i <= 12; i++) {

`    `console.log(i + “ de picas”);

}

El bucle **for** es una de las estructuras de iteración. Está formado por tres parámetros (lo que va dentro de los paréntesis): una variable que funcionará como índice, una condición lógica (la condición de parada) y una instrucción de aumento o disminución (según cómo se construya el bucle), que servirá para actualizar el valor del índice. En el ejemplo anterior, la *i* tomará valores entre 1 y 12 (y se detendrá, puesto que la condición pasa a ser *false*), mostrando por pantalla (con *console.log*) doce *strings* con el valor de la *i* más la cadena “ de picas”.

Si te apetece probar este código (y cualquier otro), los navegadores actuales proporcionan una herramienta para ello. En el caso de **Firefox** y **Chrome**, se accede pulsando la tecla «F12». Luego, haz clic sobre la pestaña *«Consola»* (o *“Console”*). En la misma, podrás escribir todo el código y ver los resultados.

Otras estructuras de iteración son el bucle **while** y el bucle **do / while**. La diferencia entre estos es que, mientras el **while** puede que no se ejecute, con el **do / while** se tiene la certeza de que al menos se ejecutará una vez. Además, si conocemos el límite máximo de repeticiones, es mejor utilizar el bucle **for**; cuando no sepamos cuántas veces tiene que repetirse el código dentro de un bucle, es mejor utilizar el **while** o **do / while**.

**Ejemplo con bucle while**

var i = 1; *//se inicializa el índice a 1*

while (i <= 12) {

`    `console.log(i + “ de picas”);

`    `i = i + 1; *//importante actualizar el valor del índice, para prevenir un bucle infinito*

}

**Ejemplo con bucle do / while**

var i = 1;

do {

`    `console.log(i + “ de picas”);

`    `i = i + 1;

} while (i <= 12);

