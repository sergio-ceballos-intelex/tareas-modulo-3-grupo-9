//*Crear un archivo .js y desarrollar un script que muestre en consola los numeros del 1 al 50.

// for(let i=1; i<=50;i++){
//     console.log('numero '+i)
// }

//* Modificar el script para que ahora imprima en consola los numeros del 1 al 2000.
// for(let i=1; i<=2000;i++){
//     console.log('numero '+i)
// }

//*Modificar el script para que ahora imprima solo los numeros que empiezan por 2 (convertir a string el numero y verificar con starsWith)

for(let i=1; i<=2000;i++){

    if(i.toString().startsWith('2')){
        console.log('numero '+i)
    }   
}
