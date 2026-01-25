SELECT u.nome, ev.titulo, a.nota, a.comentario
FROM usuario_avalia_evento a
JOIN usuario u ON u.id_usuario = a.id_usuario
JOIN evento ev ON ev.id_evento = a.id_evento;


