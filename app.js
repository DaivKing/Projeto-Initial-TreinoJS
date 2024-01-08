alert("Bem vindo ao jogo do número secreto!");
let numeroMaximo = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto)
let alternativa;
let tentativas = 1;

//Enquanto o número esteja errado
while (alternativa != numeroSecreto) {
    alternativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    //Condição de vitoria
if (alternativa == numeroSecreto) {
    break;
    } else {
        if (alternativa > numeroSecreto) {
            alert("O número secreto é menor que " + alternativa);
        } else {
            alert("O número secreto é maior que " + alternativa);
        }
        //tentativas = tentativas +1
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Você acertou o número secreto ${numeroSecreto}, em ${tentativas} ${palavraTentativa}.`)
