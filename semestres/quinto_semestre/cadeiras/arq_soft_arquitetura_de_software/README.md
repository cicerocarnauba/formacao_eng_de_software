# Arquitetura de Software (ARQ_SOFT)

[Voltar ao 5º Semestre](../../README.md)

## Ementa

Definição de arquitetura de software. A importância e o impacto em um empreendimento de software. Estilos arquiteturais (pipes-and-filters, camadas, publish-subscribe, baseado em eventos, cliente-servidor, dentre outros). Relação custo/benefício entre vários atributos arquitetônicos. Questões de hardware em projeto de software. Rastreabilidade de requisitos e arquitetura de software. Arquiteturas específicas de um domínio e linhas de produtos de software. Notações arquiteturais (ex., visões, representações e diagramas de componentes). Reutilização em nível arquitetural.

## Conteúdo

- **`slides/`**: Slides das aulas (atributos de qualidade, padrões e estilos arquiteturais, Clean Architecture, SOA, eventos, microkernel, hexagonal, serverless, Modelo 4+1).
- **`diagramas/`**: Diagramas arquiteturais (`.drawio` e `.pptx`) de estudos de caso (Steam e Pix/Chicken Bank).
- **`trabalhos/`**: Especificação do projeto final.
- **`provas_antigas/`**: Provas anteriores (AP1 e AP2) para estudo.

## Livros de Referência

- **Fundamentals of Software Architecture: An Engineering Approach** — Mark Richards & Neal Ford (O'Reilly, 1st ed., 2020)
- **Software Architecture in Practice** — Len Bass, Paul Clements & Rick Kazman (SEI Series in Software Engineering, 4th ed., 2021)

---

## Projeto Final: Sistema de Gestão Escolar (SGE)

**Repositório Oficial:** [cicerocarnauba/sistema-gestao-escolar](https://github.com/cicerocarnauba/sistema-gestao-escolar)

Aplicação web desenvolvida pela **Equipe 5** para centralizar o fluxo acadêmico básico entre secretaria, professores e alunos (cadastro de usuários, criação de turmas, efetivação de matrículas, lançamento de notas e consulta de boletim escolar).

### Arquitetura e Tecnologias

- **Estilo Arquitetural:** Arquitetura Hexagonal (Ports and Adapters), isolando entidades e regras de negócio (`Aluno`, `Professor`, `Turma`, `Matrícula`, `Nota`) de frameworks e persistência.
- **Documentação Arquitetural:** Modelo C4 (Contexto, Container, Componentes e Código) com Structurizr.
- **Stack:** Frontend SPA em React e TypeScript; Backend API REST em Node.js e TypeScript; Banco de dados relacional (PostgreSQL / SQLite em desenvolvimento) com autenticação JWT.

### Metodologia

- Entregas incrementais organizadas por marcos (alinhamento de visão e requisitos, definição do estilo arquitetural, diagramas C4, implementação e verificação de conformidade arquitetural).
- Gestão de tarefas e divisão de responsabilidades rastreadas via Issues no GitHub e documento unificado de visão, funcionalidades e decisões arquiteturais.

### Equipe (Equipe 5)

| Integrante | Responsabilidade principal |
|---|---|
| Cícero Higor de Medeiros Carnaúba | Documento de visão (estruturação e revisão) |
| Emilly Wictoria Pinheiro Ferreira | Documento de funcionalidades |
| Gabriel Ribeiro de Sousa | Diagrama de Container e decisão arquitetural |
| Kawan Torres Lopes | Diagramas |
| Layssa da Silva de Oliveira | Documento de visão (redação) |
| Mel Barbosa Mello | README, Issues do GitHub e revisão do documento de funcionalidades |

