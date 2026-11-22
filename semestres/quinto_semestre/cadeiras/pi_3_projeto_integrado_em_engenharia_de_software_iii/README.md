# Projeto Integrado em Engenharia de Software III (PI_3)

[Voltar ao 5º Semestre](../../README.md)

## Ementa

Projeto prático interdisciplinar para desenvolvimento de um software para Dispositivos Móveis interligando as disciplinas Desenvolvimento de Software para Dispositivos Móveis, Arquitetura de Software e Qualidade de Software. Essa disciplina também apresenta os conteúdos: integração contínua com análise estática; utilização de uma arquitetura baseada em serviços; noções de refatoração. O projeto deve ter ênfase em ações extensionistas de acordo com o plano de desenvolvimento da instituição.

---

## Projeto: Metria — Sistema de Registro e Acompanhamento de Medições em Construções Civis

**Repositório Oficial:** [Layssaoliveira26/Projeto-Integrado-3](https://github.com/Layssaoliveira26/Projeto-Integrado-3)

Aplicativo móvel integrado a uma API REST com suporte a operação *offline-first*, voltado para engenheiros civis, fiscais de obras, mestres de obras e gestores de contratos. O sistema digitaliza de ponta a ponta o ciclo de medição física e financeira de obras, eliminando o uso de pranchetas e planilhas avulsas em campo.

### Funcionalidades

- Cadastro, autenticação JWT e edição de perfil do responsável técnico.
- Gerenciamento completo do ciclo de vida de obras (cadastro com capa, busca e filtros, edição com histórico de prorrogações de prazo, arquivamento, reativação, encerramento e exclusão).
- Download de planilha-modelo e importação de planilhas orçamentárias (`.xlsx`), estruturando automaticamente etapas e serviços (SINAPI/SEINFRA/próprios).
- Registro de medições por ciclo com cálculo automático de quantidades acumuladas, saldo remanescente, valores financeiros e percentual ponderado de execução.
- Abertura sequencial e encerramento imutável de ciclos de medição com histórico completo.
- Captura e galeria de fotografias georreferenciadas (GPS + endereço) vinculadas à obra, ao ciclo e ao serviço.
- Pré-visualização e exportação da planilha final de medição (`.xlsx`) e do relatório fotográfico técnico em PDF.

### Arquitetura e Tecnologias

- **Mobile:** React Native / Expo com operação *offline-first* e sincronização com a API
- **API REST:** Node.js, Express 5, PostgreSQL 16 (`pg`), autenticação JWT (`jsonwebtoken`) e hash de senhas (`bcryptjs`)
- **Domínio e Exportação:** aritmética financeira de alta precisão (`decimal.js`) e manipulação de planilhas com SheetJS (`xlsx`)
- **Testes e Infraestrutura:** suíte de testes automatizados (`node:test`), Docker, Docker Compose e Adminer

### Metodologia

- Desenvolvimento iterativo e colaborativo em equipe via GitHub, integrando práticas de Arquitetura de Software, Desenvolvimento Mobile e Qualidade de Software.
- Arquitetura baseada em serviços REST desacoplados do cliente móvel, com estratégia de sincronização *offline-first* e registro de exclusões (*tombstones*).
- Ambiente de desenvolvimento e banco de dados padronizados com Docker Compose e validação contínua com testes automatizados no backend.

### Equipe (Metria)

| Nome | GitHub |
|---|---|
| Cícero Higor de Medeiros Carnaúba | [@cicerocarnauba](https://github.com/cicerocarnauba) |
| Emilly Wictoria Pinheiro Ferreira | [@Emilly-Pinheiro](https://github.com/Emilly-Pinheiro) |
| Gabriel Ribeiro de Sousa | [@gabrielrbsousa](https://github.com/gabrielrbsousa) |
| Kawan Torres Lopes | [@kawantorres](https://github.com/kawantorres) |
| Layssa da Silva de Oliveira | [@Layssaoliveira26](https://github.com/Layssaoliveira26) |
| Mel Barbosa Mello | [@abebuh21](https://github.com/abebuh21) |
