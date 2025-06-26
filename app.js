function gerarNumeroAleatorio() {
    return parseInt(Math.floor(Math.random() * 10) + 1);
}

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);
}

let numeroSecreto = gerarNumeroAleatorio();

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Descubra o número secreto entre 1 e 10');

