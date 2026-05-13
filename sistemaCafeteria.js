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
  let total = 0;
  let opcao;

  do {
    opcao = await ask(
      'Menu da cafeteria:\n1 - Café Expresso (R$ 5,00)\n2 - Cappuccino (R$ 7,00)\n3 - Pão de Queijo (R$ 4,00)\n0 - Finalizar Pedido\nEscolha uma opção: '
    );

    switch (opcao && opcao.trim()) {
      case '1':
        total += 5;
        console.log('Café Expresso adicionado ao pedido.');
        break;
      case '2':
        total += 7;
        console.log('Cappuccino adicionado ao pedido.');
        break;
      case '3':
        total += 4;
        console.log('Pão de Queijo adicionado ao pedido.');
        break;
      case '0':
        break;
      default:
        console.log('Opção inválida');
        break;
    }
  } while (opcao !== '0');

  const mensagem = `Pedido finalizado. O total da sua conta é R$ ${total}`;
  if (typeof alert === 'function') {
    alert(mensagem);
  }
  console.log(mensagem);
}

main();
