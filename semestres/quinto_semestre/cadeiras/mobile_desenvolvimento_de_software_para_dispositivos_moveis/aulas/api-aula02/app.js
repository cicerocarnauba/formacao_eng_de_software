const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    return res.send("oi mundo");
});


let tarefas = [{id: 1, titulo: 'Estudar HTTP'}];

app.post('/tarefas', (req, res) => {
    const nova = {id: Date.now(), titulo: "um atexto qualquer"};
    tarefas.push(nova);
    res.status(201).json(nova);
});

app.get('/tarefas', (req, res) => {
    return res.json(tarefas);
});

app.delete('/tarefas/:id', (req, res) => {
    const id = Number(req.params.id);
    tarefas = tarefas.filter(t => t.id !== id);
    return res.status(204).send();
});

app.listen(3000, () => {
    console.log("servidor rodando na porta 3000");
});
