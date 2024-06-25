# ESTRUCTURAS DE CONTROL EN JAVASCRIPT

las estructuras de control en javascritp se usan para controlar el flujo de nuestro codigo,
entre ellos tenemos algunos como estos:
- condicionales if else (if se traduce como "si" se cumple tal condicion dentro de parentesis ponemos la condicion, entonces abrimos llaves, y dentro de las llaves 
va lo que queremos se realice si se cumple la condicion, despues de esas llaves podemos si se requiere colocar un else y ejecutar otra opcion a ejecutarse en caso de la la primer condicion no sea cumplida, podemos agregar tantos if else como sean necesarios, y al  final cerramos con un else )
- swith funcion esmuy similar a if else, y usamos palabras claves como *case:* donde sera la condicion a cumplirse, luego un *return* que seria la respuesta que esperamos se ejecute si la condicion se cumple, podemos agregar tantos case como sean necesarios, luego de cada return va un *break* y que hace que si se cumple la condicion hay termine la ejecucion del codigo, y al final como ultima opcion ya por descarte iria *default* con la sentecia que se debe ejecutar sino se cumplen ninguna de las anteriores. 
- for es un bucle que se inicia creando una variable como iniciador y que normalmente se abrevia con la i, inicia diciendo en la mayoria de casos i=0; "luego hasta cuando se va a ejecutar, puede ser" i<= 5; y luego el incremento que es muy comun verlo asi; i++ (y es que i vaya incrementando de a 1 en cada iteracion)
ejemplo: // for( let i= 0; i <= 5; i ++) {"aca se coloca la operacion que queremos se ejecute en cada item del array"}.

y tambien tenemos metodos para trabajar los arrays como:
.map: este nos recorre el array y nos devuelve uno nuevo con cada objeto modificado.
.reduce: este reduce el array a un solo item despues de operar con cada uno de ellos. 
.find:  este nos devulve true o false tan pronto se cumpla la condicion solicitada.
.sort: este nos sirve para ordenar los elementos de nuestro array que estemos trabajando.
.filter: este nos devulve un nuevo array con los elementos que cumplan determinada condicion, a diferencia de .map nos da otra cantidad de elementos.
.forEach: este nos sirve para recorrer los elementos de un array