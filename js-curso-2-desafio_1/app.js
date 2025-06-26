let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function botaoConsole() {
    console.log('O botão foi clicado');
}

function botaoAlerta() {
    alert('Eu amo JS');
}

function botaoPrompt() {
    let cidade = prompt('Digite o nome de uma cidade');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function botaoSoma() {
    let numero1 = prompt('Digite o primeiro número');
    let numero2 = prompt('Digite o segundo número');
    soma = parseInt(numero1) + parseInt(numero2);
    alert(`A soma é: ${soma}`);
}