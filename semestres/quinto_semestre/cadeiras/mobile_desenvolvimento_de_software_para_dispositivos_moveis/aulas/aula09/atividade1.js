import express from "express";
let notas  = [
  { "id": 1, "titulo": "Estudar módulos", "conteudo": "Meu texto de exemplo para o conteúdo" },
  { "id": 2, "titulo": "Criar API", "conteudo": "Meu texto de exemplo para o conteúdo" }
]
const app = express();
app.use(express.json());
app.get("/notas", (req, res) => {
  res.json(notas);
});

app.post("/notas", (req, res) => {
  const novaNota = req.body;
  novaNota.id = notas.length + 1;
  notas.push(novaNota);
  res.status(201).json(novaNota);
});
app.listen(3000, () => {
  console.log("API em http://localhost:3000");
});