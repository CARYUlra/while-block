let nome;
do {
  nome = prompt('Digite o nome do produto:');
  if (!nome || nome.trim().length < 3) {
    alert('Nome inválido. O produto deve ter no mínimo 3 caracteres');
  }
} while (!nome || nome.trim().length < 3);
alert(`Produto cadastrado: ${nome.trim()}`);
