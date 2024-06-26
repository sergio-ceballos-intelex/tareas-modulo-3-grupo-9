// Números del 1 al 2000 que empiezan por 2.
for(i = 1; i <= 2000; i++) {
    iStr = i.toString()
    if(iStr.startsWith('2')){
        console.log(iStr)
    }
}

console.log(typeof iStr);