

-- Tabela de permissões de usuário (ADMIN, COMUM, etc.)
CREATE TABLE permissoes (
    id_permissoes     SERIAL PRIMARY KEY,
    nome              VARCHAR(50) NOT NULL UNIQUE  
);

-- Especializações de permissões (subtipos)
CREATE TABLE administrador (
    id_permissoes     INTEGER PRIMARY KEY,
    CONSTRAINT fk_admin_permissoes
        FOREIGN KEY (id_permissoes)
        REFERENCES permissoes (id_permissoes)
        ON DELETE CASCADE
);

CREATE TABLE comum (
    id_permissoes     INTEGER PRIMARY KEY,
    CONSTRAINT fk_comum_permissoes
        FOREIGN KEY (id_permissoes)
        REFERENCES permissoes (id_permissoes)
        ON DELETE CASCADE
);

-- Espaços culturais onde ocorrem os eventos
CREATE TABLE espaco_cultural (
    id_espaco_cult    SERIAL PRIMARY KEY,
    nome              VARCHAR(100) NOT NULL,
    rua               VARCHAR(100) NOT NULL,
    numero            VARCHAR(10)  NOT NULL,
    bairro            VARCHAR(60)  NOT NULL
);

-- Artistas que se apresentam nos eventos
CREATE TABLE artista (
    id_artista        SERIAL PRIMARY KEY,
    nome              VARCHAR(100) NOT NULL,
    cpf_rg            VARCHAR(20)  NOT NULL UNIQUE,
    email             VARCHAR(255) NOT NULL UNIQUE,
    numero            VARCHAR(20)  NOT NULL UNIQUE,  
    descricao         TEXT
);

-- ============================================
-- 3) TABELAS PRINCIPAIS
-- ============================================

-- Usuários do sistema
CREATE TABLE usuario (
    id_usuario        SERIAL PRIMARY KEY,
    nome              VARCHAR(100) NOT NULL,
    email             VARCHAR(255) NOT NULL UNIQUE,
    cpf_rg            VARCHAR(20)  NOT NULL UNIQUE,
    senha_hash        VARCHAR(255) NOT NULL,
    id_permissoes     INTEGER NOT NULL,
    CONSTRAINT fk_usuario_permissoes
        FOREIGN KEY (id_permissoes)
        REFERENCES permissoes (id_permissoes)
);

-- Eventos culturais
CREATE TABLE evento (
    id_evento         SERIAL PRIMARY KEY,
    titulo            VARCHAR(150) NOT NULL,
    descricao         TEXT,
    categoria         VARCHAR(60),      
    capacidade        INTEGER CHECK (capacidade >= 0),
    data_inicio       TIMESTAMP NOT NULL,
    data_fim          TIMESTAMP NOT NULL,
    preco             NUMERIC(10,2) DEFAULT 0 CHECK (preco >= 0),
    status            VARCHAR(20) NOT NULL,   
    id_espaco_cult    INTEGER NOT NULL,
    CONSTRAINT fk_evento_espaco
        FOREIGN KEY (id_espaco_cult)
        REFERENCES espaco_cultural (id_espaco_cult)
);

-- ============================================
-- 4) TABELAS DE RELACIONAMENTO (N:N, 1:N)
-- ============================================

-- Usuário participa de evento (N:N)
CREATE TABLE usuario_participa_evento (
    id_usuario        INTEGER NOT NULL,
    id_evento         INTEGER NOT NULL,
    PRIMARY KEY (id_usuario, id_evento),
    CONSTRAINT fk_participa_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario)
        ON DELETE CASCADE,
    CONSTRAINT fk_participa_evento
        FOREIGN KEY (id_evento)
        REFERENCES evento (id_evento)
        ON DELETE CASCADE
);

-- Artista se apresenta em evento (N:N)
CREATE TABLE artista_apresenta_evento (
    id_evento         INTEGER NOT NULL,
    id_artista        INTEGER NOT NULL,
    PRIMARY KEY (id_evento, id_artista),
    CONSTRAINT fk_artista_evento
        FOREIGN KEY (id_evento)
        REFERENCES evento (id_evento)
        ON DELETE CASCADE,
    CONSTRAINT fk_artista_artista
        FOREIGN KEY (id_artista)
        REFERENCES artista (id_artista)
        ON DELETE CASCADE
);

-- Denúncias que usuários fazem sobre eventos
CREATE TABLE usuario_denuncia_evento (
    id_denuncia       SERIAL PRIMARY KEY,
    id_usuario        INTEGER NOT NULL,
    id_evento         INTEGER NOT NULL,
    motivo            VARCHAR(150) NOT NULL,
    data              TIMESTAMP NOT NULL DEFAULT NOW(),
    descricao         TEXT,
    status            VARCHAR(20) NOT NULL,  
    CONSTRAINT fk_denuncia_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario)
        ON DELETE CASCADE,
    CONSTRAINT fk_denuncia_evento
        FOREIGN KEY (id_evento)
        REFERENCES evento (id_evento)
        ON DELETE CASCADE
);

-- Avaliações que usuários fazem sobre eventos
CREATE TABLE usuario_avalia_evento (
    id_avaliacao      SERIAL PRIMARY KEY,
    id_usuario        INTEGER NOT NULL,
    id_evento         INTEGER NOT NULL,
    data              TIMESTAMP NOT NULL DEFAULT NOW(),
    comentario        TEXT,
    nota              INTEGER NOT NULL CHECK (nota BETWEEN 0 AND 5),
    CONSTRAINT fk_avalia_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES usuario (id_usuario)
        ON DELETE CASCADE,
    CONSTRAINT fk_avalia_evento
        FOREIGN KEY (id_evento)
        REFERENCES evento (id_evento)
        ON DELETE CASCADE
);


