import * as repository
  from "../repositories/notaRepository.js";

export function listar() {
  return repository.listar();
}

export function buscarPorId(id) {
  return repository.buscarPorId(id);
}

export function criar(titulo) {
  const nota = { id: Date.now(), titulo, concluida: false };
  return repository.salvar(nota);
}