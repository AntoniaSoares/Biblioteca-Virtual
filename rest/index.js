const express = require('express');
const cors = require('cors');
const livrosRouter = require('./livros');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/livros', livrosRouter);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
