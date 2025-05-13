const API_URL = 'http://localhost:3000/livros';

async function carregarLivros() {
  const resposta = await fetch(API_URL);
  const livros = await resposta.json();

  const lista = document.getElementById('lista-livros');
  lista.innerHTML = '';

  livros.forEach(livro => {
    const div = document.createElement('div');
    div.className = 'livro';
    div.innerHTML = `
      <strong>${livro.titulo}</strong> - ${livro.autor} (${livro.ano})<br>
      <button onclick="deletarLivro(${livro.id})">Excluir</button>
    `;
    lista.appendChild(div);
  });
}

async function adicionarLivro() {
  const titulo = document.getElementById('titulo').value;
  const autor = document.getElementById('autor').value;
  const ano = parseInt(document.getElementById('ano').value);

  if (!titulo || !autor || isNaN(ano)) {
    alert('Preencha todos os campos corretamente.');
    return;
  }

  await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ titulo, autor, ano, disponivel: true })
  });

  document.getElementById('titulo').value = '';
  document.getElementById('autor').value = '';
  document.getElementById('ano').value = '';

  carregarLivros();
}

async function deletarLivro(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  carregarLivros();
}

carregarLivros();
