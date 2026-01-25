import express, { Request, Response } from 'express';
import { Pool } from 'pg';

const app = express();
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});


const wait = (ms: number) => new Promise(res => setTimeout(res, ms));

const initDb = async () => {
  let retries = 5; 
  while (retries > 0) {
    try {
      await pool.query(`
        CREATE TABLE IF NOT EXISTS products (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          price DECIMAL(10,2) NOT NULL,
          description TEXT
        );
      `);
      console.log("Tabela 'products' verificada/criada com sucesso.");
      return; 
    } catch (error) {
      console.log(`Banco ainda indisponível. Tentando novamente em 3 segundos... (Tentativas restantes: ${retries})`);
      retries--;
      await wait(3000);
    }
  }
  console.error("Não foi possível conectar ao banco após várias tentativas.");
};

app.post('/item', async (req: Request, res: Response) => {
  const { name, price, description } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, price, description) VALUES ($1, $2, $3) RETURNING *',
      [name, price, description]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

app.get('/itens', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM products');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

app.get('/item', async (req: Request, res: Response) => {
  const { id } = req.query;
  if (!id) {
     res.status(400).json({ error: "ID é obrigatório" });
     return;
  }
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
        res.status(404).json({ error: "Produto não encontrado" });
        return;
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

app.listen(3000, async () => {
  console.log('Server running on port 3000');
  await initDb();
});