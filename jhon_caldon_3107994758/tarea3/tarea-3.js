// //Activiad 1
// for(var i=1; i<=2000; i++){
//     console.log (i)
// }
for (var i=1; i<=2000; i++){
    let numeros = [i];
    
    
    numeros.forEach(numero => {
        let numeroStr = numero.toString();
        if (numeroStr.startsWith('2')) {
            console.log(numero); 
        }
    })};