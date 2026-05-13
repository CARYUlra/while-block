async function ask(question) {
  if (typeof prompt === 'function') {
    return prompt(question);
  }

  const readline = require('readline');
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const secreto = 7;
  let tentativa;
  let contador = 0;

  do {
    const entrada = await ask('Tente adivinhar o número secreto entre 1 e 10: ');
    tentativa = parseInt(entrada, 10);
    contador += 1;
  } while (tentativa !== secreto);

  const mensagem = `Parabéns! Você acertou em ${contador} tentativa${contador === 1 ? '' : 's'}.`;
  if (typeof alert === 'function') {
    alert(mensagem);
  }
  console.log(mensagem);
}

main();
