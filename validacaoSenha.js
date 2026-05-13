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
  const senhaCorreta = '1234';
  let senha;

  do {
    senha = await ask('Digite a senha: ');
  } while (senha !== senhaCorreta);

  const mensagem = 'Acesso Permitido';
  if (typeof alert === 'function') {
    alert(mensagem);
  }
  console.log(mensagem);
}

main();
