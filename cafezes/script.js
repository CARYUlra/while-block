let total = 0;
let op;
do {
  op = prompt(
    'Menu da cafeteria:\n1 - Café Expresso (R$ 5,00)\n2 - Cappuccino (R$ 7,00)\n3 - Pão de Queijo (R$ 4,00)\n0 - Finalizar Pedido'
  );
  switch (op) {
    case '1':
      total += 5;
      alert('Café Expresso adicionado ao pedido.');
      break;
    case '2':
      total += 7;
      alert('Cappuccino adicionado ao pedido.');
      break;
    case '3':
      total += 4;
      alert('Pão de Queijo adicionado ao pedido.');
      break;
    case '0':
      break;
    default:
      alert('Opção inválida');
  }
} while (op !== '0');
alert(`Pedido finalizado. O total da sua conta é R$ ${total}`);
