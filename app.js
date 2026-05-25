
alert('Boas vindas ao jogo do número secreto!');

//let nomeUsuario = prompt('Digite seu nome:');
//let idadeUsuario = prompt('Digite sua idade');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random(0,100) * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativa = 0;

while (chute != numeroSecreto ) {
    chute = parseInt(prompt(`Escolha o número entre 1 e ${numeroMaximo}:`));

    if (chute > numeroSecreto) {
        alert('Quase! Mas o numero é menor!');
    } else if (chute < numeroSecreto) {
        alert('Quase! Mas o numero é maior!');
    }
    tentativa++
}
let palavraTentativa = tentativa > 1? 'tentativas' : 'tentativa';

alert('Isso aí! Você descobriu o número secreto: ' + numeroSecreto + ' com ' + tentativa + ' ' + palavraTentativa);


