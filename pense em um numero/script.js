const secreto = 7;
let chute, tentativas = 0;
do {
  chute = parseInt(prompt('Tente adivinhar o número secreto entre 1 e 10:'), 10);
  tentativas++;
} while (chute !== secreto);
alert(`Parabéns! Você acertou em ${tentativas} tentativa${tentativas === 1 ? '' : 's'}.`);
