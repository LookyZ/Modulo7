document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    var valorA = parseInt(document.getElementById('campoA').value);
    var valorB = parseInt(document.getElementById('campoB').value);
    if (valorB > valorA) {
        document.getElementById('mensagem').innerHTML = "Formulário válido!";
        document.getElementById('mensagem').style.color = "green";
    } else {
        document.getElementById('mensagem').innerHTML = "Formulário inválido! O valor de B deve ser maior que o valor de A.";
        document.getElementById('mensagem').style.color = "red";
    }
});
