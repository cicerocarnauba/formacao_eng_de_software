import { openDatabaseAsync } from 'expo-sqlite';

let db = null;

export async function initDB() {
    db = await openDatabaseAsync('notas.db');

    await db.execAsync(`
        CREATE TABLE IF NOT EXISTS notas (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        titulo TEXT NOT NULL,
        conteudo TEXT NOT NULL)`)
}

export function getDB() {
    if (!db) throw new Error('Banco não inicializado.');
    return db;
}
