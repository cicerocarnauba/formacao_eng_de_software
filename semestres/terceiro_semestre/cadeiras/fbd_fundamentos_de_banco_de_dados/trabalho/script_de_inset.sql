-- ============================================
-- USUÁRIO PARTICIPA DE EVENTO
-- ============================================
INSERT INTO usuario_participa_evento (id_usuario, id_evento)
VALUES
(
  (SELECT id_usuario FROM usuario WHERE email = 'carlos@exemplo.com'),
  (SELECT id_evento FROM evento WHERE titulo = 'Show da Banda Horizonte')
),
(
  (SELECT id_usuario FROM usuario WHERE email = 'maria@exemplo.com'),
  (SELECT id_evento FROM evento WHERE titulo = 'Show da Banda Horizonte')
),
(
  (SELECT id_usuario FROM usuario WHERE email = 'maria@exemplo.com'),
  (SELECT id_evento FROM evento WHERE titulo = 'Peça Teatro Vida')
);

-- ============================================
-- ARTISTA APRESENTA EVENTO
-- ============================================
INSERT INTO artista_apresenta_evento (id_evento, id_artista)
VALUES
(
  (SELECT id_evento FROM evento WHERE titulo = 'Show da Banda Horizonte'),
  (SELECT id_artista FROM artista WHERE nome = 'Banda Horizonte')
),
(
  (SELECT id_evento FROM evento WHERE titulo = 'Peça Teatro Vida'),
  (SELECT id_artista FROM artista WHERE nome = 'Grupo Teatro Vida')
);

-- ============================================
-- DENÚNCIA DE EVENTO
-- (ex.: Carlos denuncia algo no show)
-- ============================================
INSERT INTO usuario_denuncia_evento (
    id_usuario, id_evento, motivo, descricao, status
) VALUES (
    (SELECT id_usuario FROM usuario WHERE email = 'carlos@exemplo.com'),
    (SELECT id_evento FROM evento WHERE titulo = 'Show da Banda Horizonte'),
    'Som muito alto',
    'O som estava muito alto e incomodando a vizinhança.',
    'aberta'
);

-- ============================================
-- AVALIAÇÃO DE EVENTO
-- (Maria avalia os dois eventos)
-- ============================================
INSERT INTO usuario_avalia_evento (
    id_usuario, id_evento, comentario, nota
) VALUES
(
  (SELECT id_usuario FROM usuario WHERE email = 'maria@exemplo.com'),
  (SELECT id_evento FROM evento WHERE titulo = 'Show da Banda Horizonte'),
  'Show excelente, banda muito boa!',
  5
),
(
  (SELECT id_usuario FROM usuario WHERE email = 'maria@exemplo.com'),
  (SELECT id_evento FROM evento WHERE titulo = 'Peça Teatro Vida'),
  'Peça emocionante, ótimos atores.',
  4
);

