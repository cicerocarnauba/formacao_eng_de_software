# Projeto Integrado em Engenharia de Software I (PI_1)

[Voltar ao 5º Semestre](../../README.md)

## Ementa

Projeto prático interdisciplinar para desenvolvimento de um software desktop interligando as disciplinas Análise e Projeto de Sistemas, Requisitos de Software, Fundamentos de Banco de Dados, Gerência de Configuração, Projeto Detalhado de Software. Essa disciplina também apresenta os conteúdos: prática de desenvolvimento de testes unitários; projeto e prototipação de interface. O projeto deve ter ênfase em ações extensionistas de acordo com o plano de desenvolvimento da instituição.

---

## Projeto: LivroCMEI — Sistema de Gerenciamento de Acervo de Biblioteca Escolar

**Repositório Oficial:** [cicerocarnauba/projeto-integrado-1](https://github.com/cicerocarnauba/projeto-integrado-1)

Aplicação desktop 100% offline desenvolvida como ação extensionista para o **CEMEI Professora Maria de Lourdes Demasceno Marques** (Município de Piquet Carneiro), com o objetivo de digitalizar o controle de acervo e empréstimos de livros da biblioteca escolar, substituindo o registro manual em cadernos físicos por uma interface instalável, rápida e acessível.

### Funcionalidades

- **Gerenciar Empréstimos:** registro de empréstimos com múltiplos livros, consulta por abas (Pendentes, Concluídos e Cancelados), visualização de detalhes, devolução parcial ou total de exemplares e cancelamento com regras de integridade.
- **Gerenciar Livros:** cadastro, edição, controle de total de exemplares e saldo disponível, exclusão (quando sem histórico) e ativação/desativação.
- **Gerenciar Professores:** cadastro, edição, validação de e-mail único, exclusão (quando sem histórico) e ativação/desativação.
- **Gerenciar Turmas:** cadastro, edição, exclusão (quando sem histórico) e ativação/desativação.
- **Usabilidade e Operação Offline:** busca e ordenação em todas as listagens, paginação dinâmica adaptada à janela e banco SQLite local sem dependência de internet.

### Arquitetura e Tecnologias

- **Desktop:** Nextron (Electron + Next.js)
- **Frontend (Renderer):** Next.js 16, React 19, TypeScript, Tailwind CSS v4
- **Backend (Main):** Node.js no processo principal do Electron, organizado em camadas (`entities`, `daos`, `controllers`, `ipc`) com comunicação segura via `contextBridge` (`window.ipc`)
- **Banco de Dados:** SQLite local (`better-sqlite3`)
- **Testes:** Node Test Runner (`node:test`) com TypeScript nativo

### Metodologia

- Levantamento de requisitos com Documento de Requisitos versionado (v1 a v5), Histórias de Usuário e estimativas coletivas via Planning Poker.
- Modelagem orientada a objetos com diagramas de sequência no padrão BCE (Boundary-Control-Entity).
- Fluxo de versionamento baseado em Git Flow (`main` protegida, `develop` para integração e branches `feature/`, `fix/` e `refactor/` via Pull Request).
- Padronização de commits com Conventional Commits validados automaticamente por Git Hooks locais (`commitlint`) e GitHub Actions.
- Cobertura de regras de negócio com suíte de testes unitários automatizados.

### Equipe

- Camila Santos
- Cícero Higor de Medeiros Carnaúba
- Daniel Andrade
- José Luís
- Wenderson Araújo

