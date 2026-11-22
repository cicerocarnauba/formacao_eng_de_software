const tarefas = [
  { id: 1, titulo: "Estudar módulos", concluida: false },
  { id: 2, titulo: "Criar API", concluida: true }
];

export function listar() {
  return tarefas;
}

export function buscarPorId(id) {
  return tarefas.find((tarefa) => tarefa.id === id);
}

export function salvar(tarefa) {
  tarefas.push(tarefa);
  return tarefa;
}