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
  let somaTotal = 0;
  let resposta;

  do {
    const entrada = await ask('Digite um número inteiro: ');
    const numero = parseInt(entrada, 10);

    if (!Number.isNaN(numero)) {
      somaTotal += numero;
    } else {
      const mensagem = 'Entrada inválida. Por favor, digite um número inteiro.';
      if (typeof alert === 'function') {
        alert(mensagem);
      }
      console.log(mensagem);
      continue;
    }

    resposta = await ask('Deseja inserir outro número? (s/n): ');
    if (resposta) {
      resposta = resposta.trim().toLowerCase();
    }
  } while (resposta === 's');

  const mensagem = `Soma total: ${somaTotal}`;
  if (typeof alert === 'function') {
    alert(mensagem);
  }
  console.log(mensagem);
}

main();
