const express = require('express');
const router = express.Router();

let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
  { id: 2, titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", ano: 1844, disponivel: true }
];

// GET /livros
router.get('/', (req, res) => {
  res.json(livros);
});

// GET /livros/:id
router.get('/:id', (req, res) => {
  const livro = livros.find(l => l.id == req.params.id);
  if (livro) {
    res.json(livro);
  } else {
    res.status(404).json({ erro: 'Livro não encontrado' });
  }
});

// POST /livros
router.post('/', (req, res) => {
  const novoLivro = {
    id: livros.length + 1,
    ...req.body
  };
  livros.push(novoLivro);
  res.status(201).json(novoLivro);
});

// DELETE /livros/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = livros.findIndex(l => l.id === id);
  if (index !== -1) {
    livros.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).json({ erro: 'Livro não encontrado' });
  }
});

module.exports = router;
