# Projeto Integrador 2 (PI2) - SIGA

[Voltar ao 4º Semestre](../../README.md)

**Repositório Oficial:** [eujuliomorais/projeto-integrado-ii](https://github.com/eujuliomorais/projeto-integrado-ii)

---

## Projeto: Sistema de Gestão de Associados (SIGA)

Sistema web desenvolvido para o **Grupo Cultural de Dom Maurício**, com o objetivo de modernizar e centralizar a gestão dos associados da instituição. A plataforma substitui o controle manual de informações e implementa a emissão de carteirinha digital em formato PDF.

O principal produto entregue pelo software é a **Carteira do Associado** em formato PDF, com numeração única e os dados necessários para identificação dos associados.

### Perfis de Usuários

- **Administrador:** controle total sobre o sistema, incluindo criação de cadastros, consulta, atualização, renovação de vínculos de associados e disparo de mensagens por e-mail (mala direta).
- **Consultor:** acesso restrito à consulta de dados dos associados, sem permissões de edição.
- **Associado:** acesso simplificado via token seguro enviado por e-mail, podendo consultar e complementar seus dados cadastrais e baixar sua carteirinha.
- **Visitante (público externo):** verificação de validade e autenticidade das carteirinhas geradas por meio de página pública de validação.

### Tecnologias Utilizadas

- **Front-end:** React, TypeScript, Material UI (MUI), React Router DOM, Axios, Vite
- **Back-end:** Java, Spring Boot, PostgreSQL, JWT, iText, Swagger / OpenAPI
- **Infraestrutura:** Docker, Docker Compose e Nginx

### Metodologia

- Desenvolvimento ágil iterativo e incremental baseado em **Scrum**, organizado em sprints com entregas avaliadas em **Sprint Reviews**.
- Backlog estruturado em Histórias de Usuário estimadas em Story Points, com divisão clara de papéis (Product Owner, UX, QA, Back-End e Front-End).
- Revisões contínuas com ciclos de refatoração, validação de qualidade (QA) e ambiente padronizado com Docker Compose.

### Equipe de Desenvolvimento

| Nome | Papel |
|---|---|
| Julio Morais | Product Owner |
| Cícero Higor | UX |
| Pablo Vinicios | QA |
| Rodrigo | Desenvolvedor Back-End |
| Randson Silva | Desenvolvedor Front-End |

### Licença

**Copyright (c) 2026 Grupo Cultural de Dom Maurício. Todos os direitos reservados.**

Este software é de propriedade exclusiva do Grupo Cultural de Dom Maurício e seus desenvolvedores. Nenhuma parte deste software, incluindo seu código-fonte, documentação e ativos visuais, pode ser copiada, modificada, distribuída, sublicenciada, vendida ou utilizada de qualquer forma sem autorização prévia e expressa por escrito dos detentores dos direitos autorais.

O uso não autorizado deste software constitui violação de direitos autorais e está sujeito às penalidades previstas na legislação brasileira vigente.
