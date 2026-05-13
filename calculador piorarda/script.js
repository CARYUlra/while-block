let soma = 0;
let cont;
do {
  const n = parseInt(prompt('Digite um número inteiro:'), 10);
  if (!Number.isNaN(n)) soma += n;
  else alert('Entrada inválida. Por favor, digite um número inteiro.');
  cont = prompt('Deseja inserir outro número? (s/n):');
} while (cont && cont.toLowerCase() === 's');
alert(`Soma total: ${soma}`);
