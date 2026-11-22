import { openDatabaseAsync } from 'expo-sqlite';

let db = null;

/**
 * Abre o banco SQLite local e cria a tabela de tarefas se não existir.
 */
export async function initDB() {
  db = await openDatabaseAsync('app.db');

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS tarefas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      titulo TEXT NOT NULL,
      concluida INTEGER NOT NULL DEFAULT 0
    );
  `);

  return db;
}

/**
 * Retorna todas as tarefas ordenadas da mais recente para a mais antiga.
 */
export async function getAllTarefas() {
  if (!db) throw new Error('Chame initDB() antes.');
  return await db.getAllAsync('SELECT * FROM tarefas ORDER BY id DESC;');
}

/**
 * Insere uma nova tarefa pendente (concluida = 0) e retorna o ID criado.
 */
export async function insertTarefa(titulo) {
  if (!db) throw new Error('Chame initDB() antes.');
  const texto = titulo.trim();
  if (!texto) throw new Error('Informe o título da tarefa.');

  const result = await db.runAsync(
    'INSERT INTO tarefas (titulo, concluida) VALUES (?, 0);',
    [texto]
  );

  return result.lastInsertRowId;
}

/**
 * Atualiza o título de uma tarefa pelo ID.
 */
export async function updateTarefaTitulo(id, titulo) {
  if (!db) throw new Error('Chame initDB() antes.');
  const texto = titulo.trim();
  if (!texto) throw new Error('Informe o título da tarefa.');

  const result = await db.runAsync(
    'UPDATE tarefas SET titulo = ? WHERE id = ?;',
    [texto, id]
  );

  return result.changes > 0;
}

/**
 * Atualiza o status de conclusão (0 = aberta, 1 = concluída) pelo ID.
 */
export async function toggleTarefaConcluida(id, concluida) {
  if (!db) throw new Error('Chame initDB() antes.');

  const result = await db.runAsync(
    'UPDATE tarefas SET concluida = ? WHERE id = ?;',
    [concluida ? 1 : 0, id]
  );

  return result.changes > 0;
}

/**
 * Remove uma tarefa pelo ID.
 */
export async function deleteTarefa(id) {
  if (!db) throw new Error('Chame initDB() antes.');

  const result = await db.runAsync(
    'DELETE FROM tarefas WHERE id = ?;',
    [id]
  );

  return result.changes > 0;
}
