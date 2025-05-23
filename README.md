# 📚 Biblioteca Virtual

Projeto desenvolvido para a Atividade 1 de Back-end. Consiste em uma aplicação com API REST em Node.js e Express, uma interface front-end em HTML + JavaScript puro, e uma versão opcional com GraphQL.

## 🔧 Tecnologias utilizadas

- Node.js
- Express
- HTML + JavaScript (Vanilla)
- GraphQL (opcional)
- CORS

---

## 📁 Estrutura de Pastas

/rest → Código da API REST
/frontend → Código da interface web
/graphql → API em GraphQL (opcional)
/README.md → Este arquivo

---

## 💡 API REST - Rotas

GET /livros - Lista todos os livros
GET /livros/:id - Retorna um livro pelo ID
POST /livros - Adiciona um novo livro
DELETE /livros/:id - Remove um livro

---

## ▶️ Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/AntoniaSoares/Biblioteca-Virtual.git
cd biblioteca-virtual
```

---

## 🔹 Rodar a API REST

### Vá para a pasta do back-end:

```bash
cd rest
```

### Instale as dependências:

```bash
npm install
```

### Inicie o servidor:

```bash
node index.js
```

✅ Acesse: [http://localhost:3000/livros](http://localhost:3000/livros)

---

## 🔸 Rodar o Front-end

```bash
cd ../frontend
```

### Abra o `index.html` no navegador:

- Clique duas vezes sobre o arquivo  

---

## ⚙️ Funcionalidades da Interface

- Listar livros automaticamente ao carregar
- Adicionar novo livro preenchendo os campos
- Deletar livro clicando em "Excluir"

---

## 🧪 API REST - Rotas

- `GET /livros` - Lista todos os livros
- `GET /livros/:id` - Retorna um livro pelo ID
- `POST /livros` - Adiciona um novo livro
- `DELETE /livros/:id` - Remove um livro

---

## 🚀 Rodar a API GraphQL (opcional)

```bash
cd ../graphql
npm install
node schema.js
```

✅ Playground: [http://localhost:4000/graphql](http://localhost:4000/graphql)

---

## 📌 Como testar GraphQL no Playground

### Exemplo de Query

```graphql
query {
  livros {
    id
    titulo
    autor
    ano
    disponivel
  }
}
```

### Exemplo de Mutation (adicionar)

```graphql
mutation {
  adicionarLivro(titulo: "1984", autor: "George Orwell", ano: 1949) {
    id
    titulo
    autor
  }
}
```

### Exemplo de Mutation (remover)

```graphql
mutation {
  removerLivro(id: 1)
}
```

---

## 📹 Link do vídeo explicativo

(https://youtu.be/WsSzp32VquE?si=LmS2AESbztWsuzKq)

---

## 🧾 Autor

Maria Antonia Soares Felix
Projeto acadêmico para a disciplina de Desenvolvimento Web.
