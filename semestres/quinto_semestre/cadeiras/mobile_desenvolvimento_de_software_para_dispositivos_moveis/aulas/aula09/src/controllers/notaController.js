import * as notas from "../services/notaService.js";

export function listar(req, res) {
  return res.json(notas.listar());
}

export function criar(req, res) {
  const { nota } = req.body;

  if (!nota?.trim()) {
    return res.status(400).json({ erro: "Título obrigatório" });
  }

  const novaNota = notas.criar(nota);
  return res.status(201).json(novaNota);
}