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
  let nomeProduto;

  do {
    nomeProduto = await ask('Digite o nome do produto: ');
    if (!nomeProduto || nomeProduto.trim().length < 3) {
      const mensagem = 'Nome inválido. O produto deve ter no mínimo 3 caracteres';
      if (typeof alert === 'function') {
        alert(mensagem);
      }
      console.log(mensagem);
    }
  } while (!nomeProduto || nomeProduto.trim().length < 3);

  const mensagem = `Produto cadastrado: ${nomeProduto.trim()}`;
  if (typeof alert === 'function') {
    alert(mensagem);
  }
  console.log(mensagem);
}

main();
