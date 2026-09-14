const express = require("express");

const app = express();

app.use(express.json());

const atletas = [
  {
    id: 1,
    nome: "João Silva",
    modalidade: "Voleibol"
  },
  {
    id: 2,
    nome: "Maria Souza",
    modalidade: "Judô"
  }
];

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Gestão de Atletas - PUC"
  });
});

app.get("/atletas", (req, res) => {
  res.json(atletas);
});

app.post("/atletas", (req, res) => {
  const { nome, modalidade } = req.body;

  const novoAtleta = {
    id: atletas.length + 1,
    nome,
    modalidade
  };

  atletas.push(novoAtleta);

  res.status(201).json(novoAtleta);
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log("Servidor executando na porta 3000");
  });
}