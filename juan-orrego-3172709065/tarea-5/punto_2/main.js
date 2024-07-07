const formulario = document.getElementById('formVerify');
formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const edad = parseInt(document.getElementById('edad').value);
    const prom = parseFloat(document.getElementById('prom').value);
    const esRegular = document.getElementById('esRegular').checked;
    const esBecado = document.getElementById('esBecado').checked;

    let message = `Hola ${name} `

    if (edad < 18) {
        message += 'es menor de edad y no puede registrarse.';
    } else if (prom < 6) {
        message += 'no cumple con el promedio mínimo requerido.';
    } else if (!esRegular) {
        message += 'debe registrarse como regular.';
    } else if (!esBecado) {
        message += 'puede solicitar una beca.';
    } else {
        message += 'cumple con todos los requisitos.';
    }

    alert(message);
});
