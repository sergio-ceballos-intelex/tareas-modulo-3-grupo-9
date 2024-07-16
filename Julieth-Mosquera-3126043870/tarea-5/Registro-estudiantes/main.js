//Requisitos:

/*
1. Si el estudiante tiene menos de 18 años, debe mostrarse un mensaje indicando 
que el estudiante es menor de edad y no puede registrarse.
2. Si el estudiante es mayor de 18 años y tiene un promedio menor a 6, debe mostrarse un mensaje
 indicando que el estudiante no cumple con el promedio mínimo requerido.
3. Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, pero no está
 registrado como regular, debe mostrarse un mensaje indicando que el estudiante debe 
 registrarse como regular.
4. Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6,
 está registrado como regular pero no tiene una beca, debe mostrarse un mensaje
  indicando que puede solicitar una beca.
5. Si el estudiante es mayor de 18 años, tiene un promedio igual o mayor a 6, 
está registrado como regular y tiene una beca, debe mostrarse un mensaje indicando
 que el estudiante cumple con todos los requisitos
 */

const nombre = (prompt("Escribe el nombre del estudiante"));
const edad = Number(prompt("¿cual es la edad?"));
const promedio = Number(prompt("cual es el promedio de calificaciones del estudiante (0 a 10)."));
const esRegular = true;
const cantidadMateriasAprobadas = Number(prompt("¿cuantas materias tiene aprobadas?"));
const esBecado = true;

if (edad < 18) {
    document.write("El estudiante es menor de edad y no puede registrarse");
}else if (edad > 18 , promedio < 6){
    document.write("El estudiante no cumple con el promedio minimo requerido");
}else if (promedio >= 6 , edad > 18 , !esRegular){
    document.write("El estudiante debe registrarse como regular");
}else if(edad > 18 , promedio >= 6 , esRegular , !esBecado){
    document.write("Puede solicitar una beca");
}else{
    document.write("El estudiante cumple con todos los requisitos");
}



