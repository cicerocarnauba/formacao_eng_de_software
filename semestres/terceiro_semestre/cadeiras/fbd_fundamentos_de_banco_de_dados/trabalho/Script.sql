
-- ============================================
-- PERMISSÕES + ESPECIALIZAÇÕES
-- ============================================
INSERT INTO permissoes (nome)
VALUES ('ADMINISTRADOR'), ('COMUM');

INSERT INTO administrador (id_permissoes)
SELECT id_permissoes FROM permissoes WHERE nome = 'ADMINISTRADOR';

INSERT INTO comum (id_permissoes)
SELECT id_permissoes FROM permissoes WHERE nome = 'COMUM';

-- ============================================
-- ESPAÇOS CULTURAIS
-- ============================================
INSERT INTO espaco_cultural (nome, rua, numero, bairro)
VALUES
('Teatro Municipal', 'Rua das Flores', '100', 'Centro'),
('Casa de Cultura', 'Av. Brasil', '200', 'Bela Vista');

-- ============================================
-- ARTISTAS
-- ============================================
INSERT INTO artista (nome, cpf_rg, email, numero, descricao)
VALUES
('Banda Horizonte', '111.111.111-11', 'contato@horizonte.com', '11999990001', 'Banda de rock alternativo'),
('Grupo Teatro Vida', '222.222.222-22', 'grupo@teatrovida.com', '11999990002', 'Companhia de teatro');

-- ============================================
-- USUÁRIOS
-- ============================================
INSERT INTO usuario (nome, email, cpf_rg, senha_hash, id_permissoes)
VALUES
('Ana Admin',
 'ana.admin@exemplo.com',
 '333.333.333-33',
 'hash_senha_admin_aqui',
 (SELECT id_permissoes FROM permissoes WHERE nome = 'ADMINISTRADOR')
),
('Carlos Usuário',
 'carlos@exemplo.com',
 '444.444.444-44',
 'hash_senha_carlos',
 (SELECT id_permissoes FROM permissoes WHERE nome = 'COMUM')
),
('Maria Usuária',
 'maria@exemplo.com',
 '555.555.555-55',
 'hash_senha_maria',
 (SELECT id_permissoes FROM permissoes WHERE nome = 'COMUM')
);

-- ============================================
-- EVENTOS
-- ============================================
INSERT INTO evento (
    titulo, descricao, categoria, capacidade,
    data_inicio, data_fim, preco, status, id_espaco_cult
) VALUES
('Show da Banda Horizonte',
 'Show de lançamento do novo álbum da Banda Horizonte.',
 'Show musical',
 300,
 '2025-12-10 20:00:00',
 '2025-12-10 22:30:00',
 50.00,
 'ativo',
 (SELECT id_espaco_cult FROM espaco_cultural WHERE nome = 'Teatro Municipal')
),
('Peça Teatro Vida',
 'Apresentação da peça "A Vida em Cena" pelo grupo Teatro Vida.',
 'Teatro',
 200,
 '2025-12-15 19:30:00',
 '2025-12-15 21:00:00',
 40.00,
 'ativo',
 (SELECT id_espaco_cult FROM espaco_cultural WHERE nome = 'Casa de Cultura')
);
