const formulario = document.getElementById('meuFormulario');
formulario.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const valorA = parseFloat(document.getElementById('campoA').value);
    const valorB = parseFloat(document.getElementById('campoB').value);

    if (valorB > valorA) {
        alert('Formulário válido! B é maior que A.');
    } else {
        alert('Formulário inválido! B deve ser maior que A.');
    }
});
