# Estructuras de Control en JavaScript

Las estructuras de control en programación son construcciones que permiten alterar el flujo de ejecución del código, es decir, permiten tomar decisiones, repetir acciones y realizar operaciones de forma condicional. Estas estructuras son fundamentales para crear algoritmos complejos y funcionales. En JavaScript, las estructuras de control más comunes incluyen:

## 1. Estructuras de Control Condicionales

Estas estructuras permiten ejecutar bloques de código basados en ciertas condiciones.

### if

Ejecuta un bloque de código si una condición es verdadera.

```javascript
if (condicion) {
  // código a ejecutar si la condición es verdadera
}
```

### if...else

Ejecuta un bloque de código si la condición es verdadera y otro bloque si es falsa.

```javascript
if (condicion) {
  // código a ejecutar si la condición es verdadera
} else {
  // código a ejecutar si la condición es falsa
}
```

### if...else if...else

Permite evaluar múltiples condiciones.

```javascript
if (condicion1) {
  // código a ejecutar si condicion1 es verdadera
} else if (condicion2) {
  // código a ejecutar si condicion2 es verdadera
} else {
  // código a ejecutar si ninguna condición anterior es verdadera
}
```

### switch

Permite evaluar múltiples condiciones.

```javascript
switch (expresion) {
  case valor1:
    // código a ejecutar si expresion === valor1
    break;
  case valor2:
    // código a ejecutar si expresion === valor2
    break;
  default:
    // código a ejecutar si ningún caso coincide
}
```

## 2. Estructuras de Control de Bucles

Estas estructuras permiten repetir un bloque de código varias veces.

### for

Permite evaluar múltiples condiciones.

```javascript
for (inicializacion; condicion; actualizacion) {
  // código a ejecutar en cada iteración
}
```

### while

Permite evaluar múltiples condiciones.

```javascript
while (condicion) {
  // código a ejecutar mientras la condición sea verdadera
}
```

### do...while

Repite un bloque de código al menos una vez y luego mientras la condición sea verdadera.

```javascript
do {
  // código a ejecutar al menos una vez
} while (condicion);
```

### for...in

Itera sobre las propiedades enumerables de un objeto.

```javascript
for (let propiedad in objeto) {
  // código a ejecutar para cada propiedad en el objeto
}
```

### for...of

Itera sobre valores de objetos iterables como arrays, strings, maps, etc.

```javascript
for (let valor of iterable) {
  // código a ejecutar para cada valor en el objeto iterable
}
```

## 3. Estructuras de Control de Salto

Estas estructuras permiten cambiar el flujo de ejecución de forma directa.

### break

Permite evaluar múltiples condiciones.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // salir del bucle cuando i es igual a 5
  }
  console.log(i);
}
```

### continue

Salta a la siguiente iteración del bucle.

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // saltar a la siguiente iteración cuando i es igual a 5
  }
  console.log(i);
}
```

\* Estas son las principales estructuras de control que puedes usar en JavaScript para manejar el flujo de tu programa. Cada una de ellas tiene su uso específico y es fundamental para escribir código eficiente y legible.

