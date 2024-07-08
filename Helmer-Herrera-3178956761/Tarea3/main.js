// for (let num = 1; num <=50; num ++) {
//         console.log(num);   
//     }
// // Se modifica el limite del script a una tabla con limite de numeros hasta 2000 
// for (let num = 1; num <=2000; num ++) {
//     console.log(num);   
// }    

// se incluye una nueva tabla con una seleccion de solo los numeros que comiencen con 2
const numeros = [];
for (let i = 1; i <= 2000; i++) {
    numeros.push(i);
}
const num2 = numeros.filter(numero => numero.toString().startsWith("2"));
    console.log(num2);
    