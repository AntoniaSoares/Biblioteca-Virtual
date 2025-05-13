const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const cors = require('cors');

const app = express();
app.use(cors());

let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, disponivel: true },
  { id: 2, titulo: "A Moreninha", autor: "Joaquim Manuel de Macedo", ano: 1844, disponivel: true }
];

let idAtual = 3;

const schema = buildSchema(`
  type Livro {
    id: ID
    titulo: String
    autor: String
    ano: Int
    disponivel: Boolean
  }

  type Query {
    livros: [Livro]
    livro(id: ID!): Livro
  }

  type Mutation {
    adicionarLivro(titulo: String!, autor: String!, ano: Int!): Livro
    removerLivro(id: ID!): Boolean
  }
`);

const root = {
  livros: () => livros,
  livro: ({ id }) => livros.find(l => l.id == id),
  adicionarLivro: ({ titulo, autor, ano }) => {
    const novo = { id: idAtual++, titulo, autor, ano, disponivel: true };
    livros.push(novo);
    return novo;
  },
  removerLivro: ({ id }) => {
    const index = livros.findIndex(l => l.id == id);
    if (index !== -1) {
      livros.splice(index, 1);
      return true;
    }
    return false;
  }
};

app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('GraphQL rodando em http://localhost:4000/graphql');
});
