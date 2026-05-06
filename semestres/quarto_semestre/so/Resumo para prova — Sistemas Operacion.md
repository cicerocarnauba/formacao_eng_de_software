# Resumo para prova — Sistemas Operacionais

A seguir está o resumo dos **11 materiais enviados**, organizado seguindo as divisões dos próprios documentos. Ao final de cada tópico, coloquei um **exemplo de como pode aparecer em prova**, usando apenas conceitos presentes nos slides.

---

# 1. Introdução à Disciplina

## 1.1 Definindo “Sistema Operacional”

Um computador pode ser entendido, de forma geral, como um **hardware que executa software**.

Ele é formado por um sistema interconectado de:

- Processadores;
- Memórias;
- Dispositivos de entrada e saída.

O ponto central da aula é perceber que, quando escrevemos um programa simples em C, como:

```c
scanf(...)
printf(...)
malloc(...)
fopen(...)
fread(...)
free(...)
```

várias perguntas surgem:

- Quem gerencia a memória?
- Quem gerencia o teclado?
- Quem gerencia o monitor?
- Quem gerencia os arquivos?
- Como o programa é executado?
- Ele pode executar junto com outro programa, como o Chrome?
- Como ocorre o compartilhamento de processador, memória e arquivos?

A resposta é: **o Sistema Operacional gerencia tudo isso por trás dos panos**.

O sistema operacional é uma **camada de software entre o hardware e os programas**.

Ele possui duas funcionalidades básicas:

1. **Gerenciar os recursos do computador**
   - Exemplo: memória usada por várias aplicações.
   - Coordena o uso dos recursos pelos programas.

2. **Fornecer acesso abstraído aos recursos**
   - Exemplo: `printf` e `scanf`.
   - Provê interfaces simples e homogêneas.

O SO pode envolver:

- Aspectos de baixo nível, como **drivers**;
- Aspectos de alto nível, como **utilitários e interface gráfica**.

### Exemplo prático de prova

> **Questão:** Qual é a função básica de um sistema operacional?  
> **Resposta esperada:** Ele atua como uma camada entre hardware e programas, gerenciando recursos como CPU, memória e dispositivos, além de fornecer abstrações simples para as aplicações.

---

## 1.2 Exemplos de Sistemas Operacionais

Os slides mostram exemplos de SOs em computadores de pequeno porte:

- Desktop: Ubuntu;
- Smartphone: Android;
- Console de jogos: Orbis;
- Sistema embarcado.

A ideia principal é:

- Todo computador possui algum software que permite seu uso.
- Computadores complexos geralmente têm sistemas operacionais com interface ao usuário.
- Sistemas mais simples priorizam o funcionamento básico.

Também aparecem computadores de grande porte:

- ENIAC;
- Mainframe IBM S/360;
- Supercomputador IBM Summit.

Nesses casos, o objetivo nem sempre é fornecer interface amigável, mas sim **poder computacional**.

### Exemplo prático de prova

> **Questão:** Um supercomputador precisa necessariamente ter uma interface gráfica amigável?  
> **Resposta esperada:** Não. Segundo o material, em computadores de grande porte o objetivo pode ser poder computacional, e não necessariamente interface amigável.

---

## 1.3 Tipos de Sistemas Operacionais

Os tipos citados no material são:

- **Batch:** executa tarefas sequenciais, como transações.
- **De rede:** acessa recursos em outros computadores.
- **Distribuído:** acessa recursos de forma transparente.
- **Multiusuário:** cada recurso tem um “dono” e regras de acesso.
- **Servidor:** gerencia eficientemente grandes volumes de recursos.
- **Desktop:** oferece interface gráfica e suporte à interatividade.
- **Móvel:** gerencia energia, conectividade e sensores.
- **Embarcado:** voltado para hardware com poucos recursos e energia.
- **Tempo real:** possui comportamento temporal previsível, podendo ser soft real-time ou hard real-time.

### Exemplo prático de prova

> **Questão:** Diferencie um sistema operacional desktop de um embarcado.  
> **Resposta esperada:** O desktop prioriza interface gráfica e interatividade; o embarcado é voltado para hardware com poucos recursos e energia.

---

## 1.4 Sobre a disciplina

A disciplina se posiciona entre:

- **Fundamentos de Programação:** alto nível de abstração;
- **Arquitetura de Computadores:** baixo nível de abstração;
- **Sistemas Operacionais:** como fornecer abstração para o usuário.

Objetivo geral da disciplina:

- Compreender conceitos básicos de SOs;
- Entender seus componentes;
- Entender funcionamento e gerenciamento;
- Desenvolver visão mais aprofundada sobre uso de recursos computacionais.

A disciplina é dividida em três partes:

1. **Parte 01**
   - Processos;
   - Threads;
   - Comunicação entre processos;
   - Escalonamento;
   - Linux.

2. **Parte 02**
   - Gerenciamento de memória;
   - Entrada e saída.

3. **Parte 03**
   - Sistemas de arquivos;
   - Impasses;
   - Virtualização.

A média final indicada:

```text
MF = (AP1 + AP2 + AP3) / 3
```

### Exemplo prático de prova

> **Questão:** Por que estudar Sistemas Operacionais?  
> **Resposta esperada:** Porque o SO gerencia os recursos de um sistema computacional e é a base sobre a qual as aplicações executam.

---

## 1.5 Workshop de e-mail

O material também inclui orientações sobre comunicação por e-mail.

Um e-mail deve ter:

- Assunto;
- Corpo da mensagem;
- Apresentação breve:
  - Nome;
  - Turma;
  - Matrícula;
- Mensagem sucinta;
- Formalidade mínima.

O material recomenda:

- Criar e-mail institucional;
- Usar nome real;
- Colocar foto;
- Evitar informalidade excessiva, como “kkk” e emojis;
- Não deixar o corpo vazio;
- Não colocar todo o texto apenas no assunto.

### Exemplo prático de prova

> **Questão:** Segundo o material, quais elementos mínimos tornam um e-mail aceitável?  
> **Resposta esperada:** Assunto, destinatário, apresentação com nome, matrícula e turma, mensagem breve e cordialidade mínima.

---

## 1.6 Resumo da aula

Pontos finais:

- Computador é hardware que executa software.
- Existem muitos recursos.
- Sistema operacional é uma camada entre hardware e programas.
- O SO:
  - Gerencia recursos;
  - Abstrai recursos para as aplicações.
- Todo computador possui software que permite seu uso.
- Sugestão do material: instalar uma distribuição Linux.

### Exemplo prático de prova

> **Questão:** Complete: O sistema operacional é uma camada de software entre ______ e ______.  
> **Resposta:** Hardware e programas.

---

# 2. Introdução aos Sistemas Computacionais

## 2.1 Introdução

Um computador consiste de:

- Processador(es);
- Memória;
- Dispositivos de entrada e saída.

Existe alta complexidade para gerenciar esses recursos, além de demanda por flexibilidade e custos de desenvolvimento e manutenção.

O material usa o exemplo do **controlador de disco rígido**, que envolve:

- Dezenas de comandos complexos;
- Leitura e escrita via DMA;
- Movimentação mecânica da cabeça de leitura;
- Gerenciamento de cache do disco;
- Diagnósticos de hardware e segurança;
- Códigos de status e erro;
- Verificação se o disco está ocupado ou pronto;
- Tratamento de erros mecânicos ou lógicos;
- Tratamento de setores defeituosos;
- Controle físico e latência rotacional.

Tudo isso é feito de forma transparente para o usuário por meio do SO.

### Exemplo prático de prova

> **Questão:** Por que acessar um disco rígido diretamente seria complexo para uma aplicação?  
> **Resposta esperada:** Porque envolve comandos de leitura/escrita, movimentação mecânica, cache, códigos de erro, status, setores defeituosos e latência rotacional.

---

## 2.2 Abstração de hardware

A abstração é a chave para gerenciar complexidade.

Ela envolve:

- Simplificação;
- Omissão de detalhes;
- Aplicativos como clientes do SO.

Uma tarefa complexa é transformada em duas tarefas mais gerenciáveis:

1. Definir e implementar abstrações;
2. Usá-las para resolver problemas.

Exemplos de abstrações:

- Sistema de arquivos;
- Abertura e fechamento;
- Leitura e escrita.

### Exemplo prático de prova

> **Questão:** O que significa dizer que o SO fornece abstração de hardware?  
> **Resposta esperada:** Significa que ele esconde detalhes complexos do hardware e oferece interfaces simples, como abrir, ler e escrever arquivos.

---

## 2.3 Gerenciamento de recursos

O SO fornece acesso controlado e ordenado aos recursos:

- Processador;
- Dispositivos;
- Memória.

Também realiza **multiplexação de recursos**, isto é, compartilhamento.

A multiplexação pode ocorrer por:

- **Tempo:** programas ou usuários se revezam no uso do recurso.
- **Espaço:** cada um recebe uma parte do recurso.

### Exemplo prático de prova

> **Questão:** Diferencie multiplexação temporal e espacial.  
> **Resposta esperada:** Na temporal, os usuários ou programas se revezam no tempo; na espacial, cada um recebe uma parte do recurso.

---

## 2.4 O que é um Sistema Operacional?

O material apresenta duas visões:

### Visão Top-Down

O SO é uma **máquina estendida**:

- Fornece abstração do hardware;
- Fornece interfaces para os programas.

### Visão Bottom-Up

O SO é um **gerenciador de recursos**:

- Controla hardware como CPU, memória e barramentos;
- Faz alocação e compartilhamento.

Objetivos principais:

- Conveniência;
- Eficiência;
- Possibilidade de evolução.

Definição destacada:

> Sistema operacional é um software fundamental que gerencia o hardware.

### Exemplo prático de prova

> **Questão:** Explique as visões Top-Down e Bottom-Up de um SO.  
> **Resposta esperada:** Top-Down vê o SO como máquina estendida que abstrai o hardware; Bottom-Up vê o SO como gerenciador de recursos.

---

## 2.5 Estrutura básica

O sistema operacional opera em **modo núcleo**.

O restante do software opera em **modo usuário**.

No modo usuário:

- Apenas parte das instruções da máquina está disponível;
- Instruções que afetam o controle da máquina ou realizam E/S são proibidas.

### Exemplo prático de prova

> **Questão:** Por que programas comuns não podem executar qualquer instrução da máquina?  
> **Resposta esperada:** Porque executam em modo usuário, onde apenas um subconjunto das instruções é permitido.

---

## 2.6 Funcionalidades básicas

O SO possui duas funcionalidades principais:

### Abstrair

- Prover interfaces simples e homogêneas;
- Simplificar interfaces de baixo nível;
- Tornar aplicativos independentes do hardware;
- Permitir acesso homogêneo a dispositivos diferentes, como SSD ou HDD.

### Gerenciar

- Coordenar uso dos recursos pelos programas;
- Permitir uso compartilhado do processador;
- Sequenciar acesso a recursos;
- Impedir ataques de negação de serviço, como um programa alocando memória até o limite.

### Exemplo prático de prova

> **Questão:** Dê um exemplo de abstração e um exemplo de gerenciamento feitos pelo SO.  
> **Resposta esperada:** Abstração: salvar arquivo em SSD ou HDD de forma homogênea. Gerenciamento: permitir uso compartilhado do processador por Spotify e Chrome.

---

## 2.7 Hardware básico

### Processador

A CPU é o “cérebro” do computador:

- Busca instruções da memória;
- Executa essas instruções.

Há dois modos:

- **Modo núcleo:** acesso completo ao hardware, qualquer instrução, maior complexidade.
- **Modo usuário:** acesso ao hardware por meio do SO, subconjunto de instruções, menor complexidade.

A chamada de sistema faz o chaveamento entre modos.

Também são citados:

- Multithread;
- Multinúcleo ou multicore.

### Memória

A memória ideal seria instantânea, mas na prática há camadas:

- Registradores;
- Cache;
- Memória principal;
- Disco magnético.

Memória principal citada:

- RAM;
- ROM;
- EEPROM;
- Flash.

Também aparece a memória virtual com MMU.

### Dispositivos de E/S

Dispositivos de entrada e saída têm duas partes:

- **Dispositivo:** realiza a função desejada.
- **Controlador:** chip que controla fisicamente o dispositivo.

Também são citados:

- Drivers;
- Barramentos PCIe, SATA, USB e NVMe.

### Exemplo prático de prova

> **Questão:** Qual é a diferença entre dispositivo e controlador?  
> **Resposta esperada:** O dispositivo realiza a função desejada; o controlador é o chip que controla fisicamente esse dispositivo.

---

## 2.8 Áreas de gerência do SO

O SO gerencia:

- **Processador:** executa tarefas dos usuários e do sistema.
- **Memória:** fornece áreas isoladas para aplicações.
- **Dispositivos:** configura e cria abstrações de dispositivos físicos.
- **Arquivos:** cria e mantém arquivos e diretórios.
- **Proteção:** define e garante regras de acesso.

Outras áreas citadas:

- Interface gráfica;
- Virtualização;
- Suporte de rede;
- Multimídia;
- Energia;
- Localização.

### Exemplo prático de prova

> **Questão:** Cite três áreas de gerência de um SO.  
> **Resposta esperada:** Processador, memória e arquivos, por exemplo.

---

## 2.9 Histórico da computação

### Primeiro computador

- Máquina Analítica;
- Projetada por Charles Babbage;
- Inteiramente mecânica;
- Ada Lovelace associada ao algoritmo;
- Nunca funcionou apropriadamente.

### Primeira geração — 1945 a 1955

Características:

- Primeiros computadores digitais;
- John Atanasoff e Clifford Berry;
- Konrad Zuse;
- Colossus;
- ENIAC;
- Uso de válvulas, com baixa confiabilidade;
- Relação com a Segunda Guerra Mundial;
- Mesmo grupo projetava, construía, programava, operava e mantinha;
- Uso de cartões perfurados;
- Operação totalmente manual.

### Segunda geração — 1955 a 1965

Características:

- Transistores;
- Mainframes;
- Aumento da confiabilidade;
- Comercialização com alto custo;
- Sistema em lote, como IBM 1401 e 7094;
- Sistemas operacionais FMS e IBSYS.

### Terceira geração — 1965 a 1980

Características:

- Circuitos integrados;
- IBM OS/360 com time sharing e suporte a discos;
- Compatibilidade entre famílias;
- Multiprogramação, aumentando ocupação da CPU;
- Spooling;
- Timesharing;
- CTSS;
- Multics;
- UNIX;
- Relação UNIX → MINIX → Linux.

### Quarta geração — 1980 até o presente

Características:

- Circuitos integrados em larga escala;
- Computador pessoal;
- CP/M;
- IBM PC e MS-DOS;
- Mac OS 1.0 com interface gráfica;
- Lisa, Macintosh e Windows com GUI;
- MS-Windows 1.0;
- Minix;
- OS/2;
- Linux kernel 0.01;
- Windows NT 32 bits;
- FreeBSD e NetBSD;
- Newton OS;
- Plan 9;
- VMWare;
- MacOS X;
- Windows Vista;
- iPhone e iOS;
- Android com núcleo Linux;
- Windows Phone;
- Windows 10.

### Exemplo prático de prova

> **Questão:** Qual geração trouxe multiprogramação, spooling e time sharing?  
> **Resposta:** A terceira geração, de 1965 a 1980.

---

## 2.10 Conceitos importantes

### Estrutura detalhada do SO

O SO inclui:

- Núcleo;
- Inicialização;
- Drivers;
- Utilitários.

### Núcleo

Gerencia recursos do hardware usados pelas aplicações e implementa abstrações principais.

### Inicialização

Reconhece dispositivos instalados e carrega o núcleo do sistema na memória.

### Drivers

Módulos de código para acessar dispositivos físicos.

### Utilitários

Funcionalidades complementares, como:

- Formatação de discos;
- Shell de comandos;
- Interface gráfica.

### Processos

Processo é um programa em execução.

Associado a cada processo:

- Espaço de endereçamento;
- Executável;
- Dados do programa;
- Pilha;
- Recursos como registradores e arquivos.

O SO gerencia processos:

- Criação;
- Término;
- Alocação de CPU.

Também aparecem:

- Comunicação entre processos;
- Árvore de processos;
- Sinalização;
- PID, UID e GID;
- Classes CPU-Bound, IO-Bound e Memory-Bound.

### Espaço de endereçamento

Usado para armazenar programas em execução.

Pode envolver:

- Multiplexação temporal;
- Multiplexação espacial;
- Mecanismos de proteção;
- Memória virtual quando necessário.

### Arquivos

São abstrações para acesso ao disco e dispositivos de E/S.

Relacionam-se com:

- Acesso por processos diferentes;
- Descritor de arquivo;
- Diretórios;
- Diretório de trabalho;
- Montagem;
- Pipe para conectar processos.

### Segurança

Exemplo UNIX:

- Código de 9 bits;
- Três grupos de 3 bits: `rwx`;
- Usuário proprietário;
- Usuários do mesmo grupo;
- Demais usuários.

### Outros conceitos

- **Kernel:** núcleo do SO.
- **Shell:** interpretador de comandos.
- **GUI:** interface gráfica.

### Exemplo prático de prova

> **Questão:** O que é PID, UID e GID?  
> **Resposta esperada:** PID identifica processo, UID identifica usuário e GID identifica grupo.

---

# 3. Estrutura dos Sistemas Operacionais

## 3.1 Filosofia do SO: política e mecanismo

O material diferencia:

### Política

É o aspecto abstrato de alto nível.

Exemplos:

- Decidir a quantidade de memória para cada aplicação;
- Decidir o próximo pacote de rede a enviar.

### Mecanismo

É o procedimento de baixo nível usado para implementar políticas.

Exemplos:

- Como iniciar um processo;
- Como enviar um pacote de rede.

Filosofia da estrutura:

- Políticas devem ser independentes dos mecanismos;
- Mecanismos devem ser genéricos para várias políticas.

### Exemplo prático de prova

> **Questão:** Diferencie política e mecanismo em um SO.  
> **Resposta esperada:** Política decide o que fazer em alto nível; mecanismo implementa como fazer em baixo nível.

---

## 3.2 Estrutura de hardware

O processador interage com memória e dispositivos de E/S por meio de barramentos.

Ele:

- Executa programas na memória;
- Acessa dispositivos de E/S por meio de controladores.

### Exemplo prático de prova

> **Questão:** Como o processador acessa dispositivos de E/S?  
> **Resposta esperada:** Por meio de controladores, usando barramentos.

---

## 3.3 Eventos e mecanismos

Eventos internos e externos devem ser tratados quando ocorrem.

Mecanismos de hardware desviam a execução do processador para um tratador especializado.

### Interrupção

- Evento externo;
- Assíncrono;
- Gerado por periférico;
- Exemplo: clique do mouse.

### Exceção

- Evento interno;
- Síncrono;
- Exemplo: divisão por zero;
- Geralmente é erro, mas nem sempre;
- Exemplo de exceção que nem sempre é erro: breakpoint.

### Trap

- Exceção solicitada pelo software;
- Intencional;
- Uma instrução específica ativa o evento interno.

### Exemplo prático de prova

> **Questão:** Diferencie interrupção, exceção e trap.  
> **Resposta esperada:** Interrupção é evento externo assíncrono; exceção é evento interno síncrono; trap é exceção intencional solicitada pelo software.

---

## 3.4 Roteiro de uma interrupção

Exemplo de interrupção de rede:

1. Processador está em um fluxo de execução.
2. Um pacote de rede é recebido pela placa Ethernet.
3. O controlador Ethernet envia uma IRQ ao processador.
4. O processamento é desviado para a rotina de tratamento.
5. A rotina transfere dados do controlador para a memória.
6. A rotina termina e o processador retorna ao programa.

### Exemplo prático de prova

> **Questão:** Descreva o que acontece quando chega um pacote de rede.  
> **Resposta esperada:** A placa recebe o pacote, o controlador envia IRQ, a CPU desvia para a rotina de interrupção, transfere dados para a memória e retorna ao programa.

---

## 3.5 Interrupções típicas do x86

O material cita exemplos:

- Divide error;
- Debug exception;
- Null interrupt;
- Breakpoint;
- INTO-detected overflow;
- Bound range exception;
- Invalid opcode;
- Interrupções reservadas pela Intel;
- Interrupções mascaráveis.

### Exemplo prático de prova

> **Questão:** Uma divisão por zero é tratada como que tipo de evento?  
> **Resposta esperada:** Como exceção interna, no exemplo “divide error”.

---

## 3.6 Nível núcleo e nível usuário

### Nível núcleo

Também chamado:

- Espaço de kernel;
- Kernelspace.

Possui acesso amplo a:

- Todas as instruções do processador;
- Todos os registradores;
- Todas as portas de E/S;
- Todas as áreas da memória.

Usado por:

- Núcleo;
- Drivers;
- Supervisor;
- Monitor.

### Nível usuário

Também chamado:

- Espaço de usuário;
- Userspace.

Possui acesso restrito a:

- Subconjunto de instruções;
- Subconjunto de registradores;
- Subconjunto de portas de E/S;
- Subconjunto de áreas da memória.

Tentativas inválidas geram exceções.

Usado por:

- Utilitários;
- Aplicações.

### Exemplo prático de prova

> **Questão:** Por que uma aplicação comum não pode acessar diretamente todas as áreas da memória?  
> **Resposta esperada:** Porque executa em nível usuário, com acesso restrito; acessos inválidos geram exceções.

---

## 3.7 Isolamento

O material destaca duas perguntas:

- Por que o núcleo deve ser isolado das aplicações?
- Por que aplicações devem ser isoladas entre si?

A imagem indica aplicações isoladas entre si pela MMU, com uma separação entre nível usuário e nível núcleo.

### Exemplo prático de prova

> **Questão:** O que significa isolamento entre aplicações?  
> **Resposta esperada:** Significa que aplicações ficam separadas entre si, com auxílio da MMU, evitando acesso indevido entre elas.

---

## 3.8 Chamadas de sistema

Chamadas de sistema, ou **syscalls**, são funções que permitem acesso aos serviços do núcleo.

Exemplos:

- Abrir, ler, escrever e fechar arquivos;
- Enviar e receber dados pela rede;
- Ler teclado;
- Escrever dados na tela.

Elas são uma interface fornecida às aplicações e representam uma abstração.

A função trap permite a troca de modo.

Problema central:

> Como uma aplicação pode invocar uma função do núcleo?

Resposta: usando chamada de sistema.

### Exemplo prático de prova

> **Questão:** O que é uma syscall?  
> **Resposta esperada:** É uma função que permite a uma aplicação acessar serviços do núcleo, como ler arquivos ou escrever na tela.

---

## 3.9 Invocação de syscall em C

O material mostra:

- Bibliotecas de rotinas;
- `unistd.h` como acesso à API do SO;
- POSIX como interface mínima e portável;
- Possibilidade de portar programas entre SOs.

Exemplo:

```c
write(1, "Hello World!\n", 13);
exit(0);
```

A syscall retorna `-1` em caso de erro e define `errno`.

Programas devem sempre verificar o retorno de uma chamada de sistema.

### Exemplo prático de prova

> **Questão:** O que uma syscall retorna em caso de erro, segundo o material?  
> **Resposta:** Retorna `-1` e o código de erro é atribuído a `errno`.

---

## 3.10 Invocação de syscall em Assembly

Funções em C são wrappers para instruções Assembly.

O exemplo usa:

- `rax` com código da syscall;
- `rdi` com descritor de arquivo;
- `rsi` com endereço da mensagem;
- `rdx` com tamanho;
- Instrução `syscall` como trap.

### Exemplo prático de prova

> **Questão:** Qual é a função da instrução `syscall` no exemplo em Assembly?  
> **Resposta esperada:** Invocar a chamada de sistema, realizando uma trap para acessar serviço do núcleo.

---

## 3.11 Etapas de uma chamada de sistema

As etapas apresentadas:

1. Aplicação chama `write` da biblioteca.
2. `write` preenche registradores da CPU.
3. `write` invoca uma chamada de sistema.
4. CPU vai para o kernel e ativa rotina de entrada.
5. Rotina consulta tabela de syscalls e ativa `sys_write`.
6. `sys_write` executa a operação.
7. CPU retorna à função `write` em modo usuário.
8. `write` retorna ao código principal da aplicação.

Outra visualização:

- Armazena parâmetros na pilha;
- Chama rotina da biblioteca;
- Coloca número da chamada em local esperado;
- Executa instrução TRAP;
- Usa tabela para rotina de tratamento;
- Retorna à biblioteca;
- Programa limpa a pilha.

### Exemplo prático de prova

> **Questão:** Em uma syscall, quem consulta a tabela de chamadas do sistema?  
> **Resposta esperada:** A rotina de entrada no kernel consulta a tabela e ativa a função correspondente.

---

## 3.12 Conjunto de chamadas de sistema

As syscalls podem envolver:

- **Processos:** criar, carregar código, terminar, esperar.
- **Memória:** alocar, liberar ou modificar áreas.
- **Arquivos:** criar, remover, abrir, fechar, ler e escrever.
- **Comunicação:** criar ou destruir canais, enviar e receber dados.
- **Dispositivos:** ler ou mudar configurações, ler ou escrever dados.
- **Sistema:** ler ou mudar data e hora, desligar.

Cada SO define seu próprio conjunto:

- Windows: Win32;
- UNIX: POSIX.

### Exemplo prático de prova

> **Questão:** Cite duas categorias de chamadas de sistema.  
> **Resposta esperada:** Processos e arquivos, por exemplo.

---

## 3.13 Syscall no gerenciamento de processos

A syscall `fork` cria um processo filho.

Após a criação:

- Variáveis são iguais;
- Mudanças são independentes.

Exemplo de shell:

1. Lê comando do terminal;
2. Cria processo filho;
3. Espera o filho executar o comando com `waitpid`;
4. Depois executa o próximo comando.

### Exemplo prático de prova

> **Questão:** O que a chamada `fork` faz?  
> **Resposta esperada:** Cria um processo filho com variáveis inicialmente iguais às do pai, mas com mudanças independentes depois.

---

# 4. Arquiteturas de Sistemas Operacionais

## 4.1 Arquiteturas de SOs

Arquitetura é a forma de organizar as várias partes do sistema operacional.

Aspectos considerados:

- Isolamento do núcleo;
- Modularização;
- Desempenho;
- Segurança.

### Exemplo prático de prova

> **Questão:** O que é arquitetura de SO?  
> **Resposta esperada:** É a forma de organizar as várias partes do sistema operacional.

---

## 4.2 Sistemas monolíticos

A palavra vem de:

- Mónos: único;
- Líthos: pedra.

Significa “um bloco único”.

Características:

- Todo o núcleo roda em modo privilegiado.
- Não há restrições de acesso entre componentes.

Vantagens:

- Desempenho;
- Tamanho.

Desvantagens:

- Complexidade;
- Fragilidade.

O exemplo dado é o núcleo Linux.

### Exemplo prático de prova

> **Questão:** Cite uma vantagem e uma desvantagem de sistemas monolíticos.  
> **Resposta esperada:** Vantagem: desempenho. Desvantagem: fragilidade ou complexidade.

---

## 4.3 Sistemas micronúcleo

O núcleo implementa apenas:

- Espaços de memória protegidos;
- Tarefa, como thread ou processo;
- Comunicação entre tarefas.

Ficam fora do núcleo:

- Políticas de escalonamento;
- Políticas de uso de memória;
- Sistemas de arquivos;
- Protocolos de rede.

Vantagens:

- Estabilidade;
- Modularidade.

Desvantagem:

- Baixo desempenho.

Exemplo mostrado:

- Minix 3.

### Exemplo prático de prova

> **Questão:** O que fica dentro e o que fica fora de um micronúcleo?  
> **Resposta esperada:** Dentro ficam memória protegida, tarefas e comunicação; fora ficam políticas, sistemas de arquivos e protocolos de rede.

---

## 4.4 Sistemas em camadas

Princípio:

- Organizar o núcleo em camadas de abstração.

Características:

- Camada inferior: interface com hardware;
- Camadas intermediárias: abstração e gerência;
- Camada superior: chamadas de sistema.

Uso parcial na prática:

- HAL do Windows;
- Subsistemas de arquivos e rede;
- Modelo OSI.

### Exemplo prático de prova

> **Questão:** Em sistemas em camadas, qual camada define as chamadas de sistema?  
> **Resposta:** A camada superior.

---

## 4.5 Sistemas híbridos

Misturam características de:

- Sistemas monolíticos;
- Micronúcleo;
- Sistemas em camadas.

O material afirma:

> A maioria dos sistemas atuais é híbrida.

Exemplo mostrado:

- Windows 2000.

### Exemplo prático de prova

> **Questão:** Por que muitos sistemas atuais são chamados híbridos?  
> **Resposta esperada:** Porque misturam características de arquiteturas monolíticas, micronúcleo e em camadas.

---

## 4.6 Máquinas virtuais

Virtualização é:

> Simular em software um sistema computacional sobre outro sistema.

Um ambiente de máquina virtual possui três partes:

- **Host:** contém recursos reais de hardware e software.
- **Hypervisor:** constrói o sistema computacional virtual.
- **Guest:** executa sobre o sistema virtual.

### Exemplo prático de prova

> **Questão:** Em uma máquina virtual, diferencie host, hypervisor e guest.  
> **Resposta esperada:** Host tem os recursos reais; hypervisor cria o sistema virtual; guest executa sobre esse sistema virtual.

---

## 4.7 Famílias de hipervisores

Quanto ao ambiente virtual provido:

- **HV de aplicação:** suporta aplicação convidada, como Java ou C#.
- **HV de sistema:** suporta SOs convidados, como VMWare e VirtualBox.

Quanto ao suporte de execução:

- **HV nativo:** executa diretamente sobre hardware, como Xen.
- **HV convidado:** executa sobre um SO hospedeiro, como VirtualBox.

### Exemplo prático de prova

> **Questão:** VirtualBox aparece como que tipo de hipervisor no material?  
> **Resposta esperada:** Como HV de sistema e também como HV convidado.

---

## 4.8 Contêineres

Contêineres fazem virtualização do espaço de usuário.

Características:

- Espaço de usuário dividido em domínios isolados.
- Cada contêiner tem seus próprios recursos:
  - Usuários;
  - Processos;
  - Semáforos;
  - Árvores de diretórios e arquivos;
  - Interface de rede.
- Cada contêiner tem seus próprios namespaces:
  - UID;
  - PID;
  - IP;
  - Portas.
- Contêineres compartilham o mesmo núcleo.

Exemplos:

- FreeBSD Jails;
- Linux Containers;
- Docker.

Interações e migrações entre domínios são proibidas.

### Exemplo prático de prova

> **Questão:** Qual é a principal diferença entre contêineres e máquinas virtuais, segundo o material?  
> **Resposta esperada:** Contêineres compartilham o mesmo núcleo e isolam o espaço de usuário.

---

## 4.9 Sistemas exonúcleo

O SO é dividido em:

- Micronúcleo;
- Biblioteca de serviços.

O material mostra o exokernel acessando recursos como:

- Páginas de memória;
- Blocos de disco;
- Interface de rede.

Acima dele, bibliotecas de SO podem oferecer:

- Memória virtual;
- Sistema de arquivos;
- Protocolos de rede;
- Sistemas de arquivos customizados.

### Exemplo prático de prova

> **Questão:** Como é dividido um sistema exonúcleo?  
> **Resposta:** Em micronúcleo e biblioteca de serviços.

---

## 4.10 Sistemas uninúcleo

Características:

- Núcleo, serviços e aplicação executam em modo privilegiado.
- Usado em appliances para computação em nuvem, como CloudOS.

O material mostra aplicações em C, Java e Ruby empacotadas com suas bibliotecas ou runtimes em unikernels sobre máquinas virtuais.

### Exemplo prático de prova

> **Questão:** Em sistemas uninúcleo, quem executa em modo privilegiado?  
> **Resposta:** Núcleo, serviços e aplicação.

---

# 5. Processos

## 5.1 Programas e processos

### Programa

É:

- Código, ou sequência de instruções, para tratar um problema;
- Pode ser aplicação ou utilitário;
- Conceito estático;
- Não possui estado interno.

Exemplos:

- `C:\Windows\notepad.exe`;
- `/usr/bin/firefox`.

### Processo

É:

- Execução das instruções definidas no programa;
- Conceito dinâmico;
- Possui estado interno;
- Estado evolui a cada instante;
- Pode ser implementado de várias formas, como processos e threads.

Exemplos:

- Notepad editando `readme.txt`;
- Visualizador de PDFs mostrando o slide.

### Exemplo prático de prova

> **Questão:** Diferencie programa e processo.  
> **Resposta esperada:** Programa é código estático; processo é a execução dinâmica desse código, com estado interno.

---

## 5.2 Introdução a processos

Computadores modernos realizam várias ações simultâneas.

Exemplo: servidor web.

Ele pode lidar com:

- Solicitações de páginas;
- Cache;
- Leitura do disco;
- Novas solicitações durante leitura do disco.

Como o acesso ao disco é muito lento do ponto de vista da CPU, existe necessidade de modelar e controlar essas atividades.

O chaveamento da CPU cria uma **ilusão de paralelismo**.

### Exemplo prático de prova

> **Questão:** Por que processos ajudam em servidores web?  
> **Resposta esperada:** Porque permitem modelar várias solicitações e atividades, mesmo quando uma tarefa espera por disco.

---

## 5.3 Modelo de processos

Um processo reúne informações como:

- Programa;
- Contador de programa;
- Registradores;
- Variáveis.

Há apenas um contador de programa físico real.

O contador lógico de cada processo é carregado no contador físico.

Escalonamento define regras de controle.

Dois programas iguais podem gerar processos distintos.

### Exemplo prático de prova

> **Questão:** Dois Firefox abertos são necessariamente o mesmo processo?  
> **Resposta esperada:** Não. Programas iguais podem originar processos distintos.

---

## 5.4 Sistemas monotarefa

Usados nos primeiros sistemas de computação.

Executam uma única tarefa por vez:

1. Programa carregado do disco para memória;
2. Dados carregados na memória;
3. Programa executa até o fim;
4. Resultados são salvos;
5. Repete para o próximo programa.

Estados simples:

- New;
- Running;
- Terminated.

### Exemplo prático de prova

> **Questão:** Qual é a limitação principal de um sistema monotarefa?  
> **Resposta esperada:** Ele executa uma única tarefa por vez, ficando parado quando a tarefa aguarda E/S.

---

## 5.5 Sistemas multitarefa

Problemas dos sistemas monotarefa:

- Tarefas esperando E/S ficam paradas;
- Custo de operação era alto;
- Exemplo: UNIVAC I consumia 125 kW, equivalente a 500 PCs.

Solução:

- Carregar várias tarefas na memória;
- Usar processador ocioso para outras tarefas;
- Um software monitor coordena a troca de tarefas.

Problemas em multitarefa simples:

- Aplicações em laço infinito podem bloquear o sistema;
- Aplicações interativas não funcionam bem.

### Exemplo prático de prova

> **Questão:** Por que surgiu a multitarefa?  
> **Resposta esperada:** Para aproveitar o processador enquanto uma tarefa espera E/S, carregando várias tarefas na memória.

---

## 5.6 Sistemas de tempo compartilhado

Solução: **Time Sharing** ou preempção por tempo.

Características:

- Cada tarefa recebe uma fatia de tempo, chamada quantum.
- A tarefa perde a CPU quando seu quantum acaba.
- Quantum típico: 10 ms a 200 ms.
- Implementado com interrupções, chamadas ticks.

Funcionamento:

1. Tarefa recebe processador;
2. Executa até expirar quantum ou encerrar;
3. É interrompida pelo hardware;
4. Retorna ao estado pronto;
5. Outra tarefa recebe processador.

### Exemplo prático de prova

> **Questão:** O que é quantum?  
> **Resposta esperada:** É a fatia de tempo de CPU concedida a uma tarefa em sistemas de tempo compartilhado.

---

## 5.7 Criação de processos

Em sistemas simples:

- Processos podem surgir ao ligar o sistema.

Em sistemas de propósito geral, há quatro eventos:

1. Início do sistema;
   - Foreground;
   - Background ou daemons.
2. Por outro processo;
   - Divisão de tarefas.
3. Pelo usuário;
   - Comando ou clique.
4. Tarefa em lote;
   - Submissão de tarefas.

Em todos os casos ocorre uma chamada de sistema.

No UNIX:

- Pai inicia filho com `fork`;
- Filho executa programa com `execve`.

Dois passos permitem:

- Filho executar ações entre `fork` e `execve`;
- Redirecionar entradas e saídas.

No Windows:

- Um passo: `CreateProcess`.

Espaços de endereçamento:

- Filho é inicialmente cópia do pai;
- Não compartilhada.

### Exemplo prático de prova

> **Questão:** Por que UNIX usa `fork` e `execve` em dois passos?  
> **Resposta esperada:** Para permitir ações entre criação e execução, como redirecionar entrada e saída.

---

## 5.8 Término de processos

Quatro eventos possíveis:

### Saída normal

- Voluntária;
- Trabalho concluído;
- Chamada informa ao SO;
- UNIX: `exit`;
- Windows: `ExitProcess`.

### Saída por erro

- Voluntária;
- Programa encontra erro;
- Exemplo: compilar arquivo inexistente.

### Erro fatal

- Involuntário;
- Erros no programa;
- Instrução ilegal;
- Exemplo: referência a memória inexistente ou divisão por zero.

### Por outro processo

- Involuntário;
- Chamada para finalizar processo;
- UNIX: `kill`;
- Windows: `TerminateProcess`;
- Em alguns casos, filhos são finalizados junto com o pai.

### Exemplo prático de prova

> **Questão:** Divisão por zero é exemplo de qual término?  
> **Resposta esperada:** Erro fatal involuntário.

---

## 5.9 Hierarquia de processos

Há associação entre pais e filhos.

No UNIX:

- Existem grupos de processos;
- Sinais do teclado podem ser enviados a grupos;
- Cada processo trata ou ignora sinais;
- Processo `init` é criado na carga do sistema;
- Cada usuário em terminal pode iniciar processos;
- Todos ficam na mesma árvore, com `init` na raiz.

### Exemplo prático de prova

> **Questão:** Qual é a raiz da árvore de processos UNIX segundo o material?  
> **Resposta:** O processo `init`.

---

## 5.10 Estados de processos

Um processo pode depender de interações entre processos.

Exemplo citado:

```bash
cat chapter1 chapter2 chapter3 | grep tree
```

Processo não executando pode estar:

- Pronto, mas sem CPU;
- Com CPU, mas não pronto.

Processo executando:

- Tem CPU;
- Tem o que processar.

Modelo básico:

- **Running:** em execução, usando CPU;
- **Ready:** pronto para usar CPU;
- **Blocked:** bloqueado, aguardando evento.

Transições:

1. Processo bloqueado aguardando entrada;
2. Escalonador seleciona outro processo;
3. Escalonador seleciona esse processo;
4. Entrada torna-se disponível.

### Exemplo prático de prova

> **Questão:** Diferencie pronto e bloqueado.  
> **Resposta esperada:** Pronto aguarda CPU; bloqueado aguarda algum evento ou recurso.

---

## 5.11 Implementação de processos

O SO mantém uma tabela chamada **tabela de processos**.

Também é chamada:

- Process Control Block;
- PCB.

O PCB contém informações como:

- Contador de programa;
- Ponteiro da pilha;
- Alocação de memória;
- Estado dos arquivos abertos.

Essas informações são salvas quando o processo troca de estado.

A tabela pode conter informações de:

- Gerenciamento de processo;
- Gerenciamento de memória;
- Gerenciamento de arquivo.

### Exemplo prático de prova

> **Questão:** O que é PCB?  
> **Resposta esperada:** É o bloco de controle do processo, estrutura que armazena informações do estado do processo.

---

## 5.12 Sequência da troca de processos

O material lista:

1. Hardware empilha contador de programa.
2. Hardware carrega novo contador de programa a partir do arranjo de interrupções.
3. Vetor de interrupções em assembly salva registradores.
4. Procedimento em assembly configura nova pilha.
5. Serviço de interrupção em C executa.
6. Escalonador decide próximo processo.
7. Procedimento em C retorna para assembly.
8. Procedimento em assembly inicia novo processo atual.

### Exemplo prático de prova

> **Questão:** Quem decide qual processo será executado em seguida?  
> **Resposta:** O escalonador.

---

## 5.13 Modelagem de multiprogramação

Objetivo:

- Aumentar utilização da CPU.

Modelo inicial:

- Processo médio passa 20% do tempo computando;
- 5 processos poderiam ocupar 100% da CPU.

Mas esse modelo é:

- Simplista;
- Otimista;
- Pouco realista;
- Ignora espera de E/S.

Modelo probabilístico:

- Fração do tempo esperando E/S = `p`;
- Probabilidade de CPU ociosa com `n` processos = `p^n`;
- Utilização da CPU = `1 - p^n`.

Exemplo do material:

- Memória: 512 MB;
- SO: 128 MB;
- Cada programa: 128 MB;
- 3 programas na memória;
- Espera por E/S: 80%;
- Ocupação: 49%;
- Com mais memória:
  - 7 programas → 79%;
  - 12 programas → 91%.

### Exemplo prático de prova

> **Questão:** Se `p` é a fração esperando E/S e há `n` processos, qual a utilização da CPU?  
> **Resposta:** `1 - p^n`.

---

## 5.14 Exercícios do material

### Conceito de processo

Processo é o ambiente onde um programa é executado, contendo informações de execução e recursos como:

- Espaço de endereçamento;
- Tempo de processador;
- Área em disco.

### Importância em sistemas multiprogramáveis

Por meio de processos, um programa pode:

- Alocar recursos;
- Compartilhar dados;
- Trocar informações;
- Sincronizar execução.

### Programa pode executar em um processo e não em outro?

Sim, pois pode precisar de recursos que um processo possui e outro não.

### Implementação

SO implementa processo usando PCB.

### Estados

- Execução;
- Pronto;
- Espera.

### Processos independentes, subprocessos e multithreads

- Processos independentes não têm vínculo com criadores.
- Subprocessos existem em estrutura hierárquica.
- Processos multithreads têm múltiplas threads associadas a partes do código.

### Exemplo prático de prova

> **Questão:** Diferencie processo independente, subprocesso e processo multithread.  
> **Resposta esperada:** Independente não tem vínculo com criador; subprocesso depende hierarquicamente do pai; multithread possui múltiplas threads dentro do processo.

---

# 6. Threads

## 6.1 Introdução a multithreading

SOs tradicionais possuíam uma única thread de controle.

SOs modernos possuem múltiplas threads.

Threads também são chamadas de:

- Miniprocessos;
- Processos leves.

Motivos para usar threads:

- Múltiplas atividades dentro da mesma aplicação;
- Simplificação do modelo de programação;
- Sem chaveamento de contexto;
- Atividades paralelas compartilhando endereçamento;
- Criação e destruição mais simples e rápidas;
- Desempenho.

Sobre desempenho:

- CPU-bound: não há ganho;
- CPU + E/S equivalentes: há aceleração da aplicação.

### Exemplo prático de prova

> **Questão:** Quando threads tendem a acelerar uma aplicação?  
> **Resposta esperada:** Quando há combinação de CPU e E/S, pois uma thread pode avançar enquanto outra espera.

---

## 6.2 Exemplo: editor de texto

Situação:

- Arquivo com 800 páginas;
- Usuário remove conteúdo na página 1;
- Depois quer visualizar página 600.

A aplicação precisaria:

- Reformatar o documento até a página 600;
- Apresentar a página 600 após formatação.

Problema:

- Atraso na apresentação da página.

Solução com duas threads:

- Uma para interação com usuário;
- Outra para formatação em segundo plano.

Possível terceira thread:

- Salvar o arquivo.

### Exemplo prático de prova

> **Questão:** Por que usar threads em um editor de texto?  
> **Resposta esperada:** Para permitir interação com o usuário enquanto outra thread faz formatação em segundo plano.

---

## 6.3 Exemplo: servidor web

Há dois papéis:

### Despachante

- Laço infinito recebendo requisições;
- Ativa operário.

### Operário

- Laço infinito recebendo requisições;
- Se página está no cache, entrega ao despachante;
- Caso contrário, acessa disco.

### Exemplo prático de prova

> **Questão:** No exemplo do servidor web, qual a função do operário?  
> **Resposta esperada:** Receber requisições, verificar cache e acessar disco se necessário.

---

## 6.4 Modelo de thread clássico

Thread depende do processo.

Conceitos distintos:

- **Processo:** agrupamento de recursos.
- **Thread:** contador de programa que controla a próxima instrução.

Há múltiplas execuções dentro de um processo.

Analogia:

- Múltiplas threads em um processo;
- Múltiplos processos em um computador.

Threads compartilham espaço de endereçamento.

Processos compartilham memória física, discos, impressoras e outros recursos.

Threads também são chamadas de lightweight process.

CPUs multithread dão suporte para chaveamento de multithreads.

### Exemplo prático de prova

> **Questão:** Qual é a diferença central entre processo e thread?  
> **Resposta esperada:** Processo agrupa recursos; thread representa fluxo de execução com contador de programa.

---

## 6.5 Dependência entre threads

Características:

- Não há proteção entre threads;
- Há cooperação;
- Mesma máquina de estados dos processos;
- Criação e destruição similares às dos processos;
- Não há hierarquia entre threads.

Problemas:

- Heranças entre processos;
- Compartilhamento de dados;
- Necessidade de cuidados específicos no projeto.

### Exemplo prático de prova

> **Questão:** Por que threads exigem cuidado no projeto?  
> **Resposta esperada:** Porque compartilham dados e não há proteção entre elas.

---

## 6.6 Itens compartilhados e específicos

Itens por processo:

- Espaço de endereçamento;
- Variáveis globais;
- Arquivos abertos;
- Processos filhos;
- Alarmes pendentes;
- Sinais e tratadores de sinais;
- Informação de contabilidade.

Itens por thread:

- Contador de programa;
- Registradores;
- Pilha;
- Estado.

### Exemplo prático de prova

> **Questão:** Cite dois itens compartilhados por threads de um mesmo processo e dois itens próprios de cada thread.  
> **Resposta esperada:** Compartilhados: espaço de endereçamento e arquivos abertos. Próprios: contador de programa e pilha.

---

## 6.7 Threads POSIX

Padrão:

- IEEE 1003.1c.

Objetivo:

- Portabilidade.

Pacote:

- Pthreads;
- Mais de 60 funções.

Propriedades de uma thread Pthreads:

- Identificador;
- Registros;
- Atributos.

Funções importantes:

- `pthread_create`: cria novo thread.
- `pthread_exit`: conclui a thread.
- `pthread_join`: espera uma thread específica terminar.
- `pthread_yield`: libera CPU para outra thread.
- `pthread_attr_init`: cria e inicializa atributos.
- `pthread_attr_destroy`: remove atributos.

### Exemplo prático de prova

> **Questão:** Qual função Pthreads cria uma nova thread?  
> **Resposta:** `pthread_create`.

---

## 6.8 Implementação de threads

Três modos:

- Modo usuário;
- Modo núcleo;
- Modo híbrido.

### Threads em modo usuário

Características:

- Pacote de threads fica no espaço do usuário.
- Núcleo não sabe da existência das threads.
- Pode ser implementado em SO sem suporte a threads.
- Implementadas por biblioteca.
- Usa tabela de threads.
- Chaveamento usa poucas instruções.
- Escalonamento personalizado.

Problemas:

- Sistemas bloqueantes;
- Thread deve ceder CPU voluntariamente.

### Threads em modo núcleo

Características:

- Núcleo gerencia threads.
- Existe tabela de threads do sistema.
- Chamadas ao núcleo para criação e destruição.
- Se uma thread bloqueia:
  - Pode executar outra do mesmo processo;
  - Ou mudar processo.
- Custo maior;
- Pode haver reciclagem.

### Threads em modo híbrido

Combina as duas abordagens:

- Threads de núcleo;
- Threads de usuário;
- Multiplexação.

### Exemplo prático de prova

> **Questão:** Compare threads de usuário e de núcleo.  
> **Resposta esperada:** Threads de usuário são rápidas e gerenciadas por biblioteca, mas bloqueios podem afetar o processo; threads de núcleo são gerenciadas pelo kernel, custam mais, mas bloqueiam apenas a thread.

---

# 7. Escalonamento de Tarefas

## 7.1 Introdução ao escalonamento

Há múltiplos processos competindo por um recurso compartilhado: a CPU.

O SO precisa escolher a sequência de execução.

A parte responsável é o **escalonador**.

A política de escolha é o **algoritmo de escalonamento**.

Pode ser aplicada a:

- Processos;
- Threads;
- Tarefas em geral.

### Exemplo prático de prova

> **Questão:** Qual é a função do escalonador?  
> **Resposta esperada:** Escolher qual processo ou thread executará na CPU.

---

## 7.2 Contextos de escalonamento

### Sistemas em lote

- Próxima tarefa existente na fita.

### Sistemas multiprogramados

- Usuários esperando serviço;
- Podem coexistir lotes e usuários;
- Decisão sobre tipo de tarefa afeta desempenho percebido.

### Computadores pessoais

- Usuário monotarefa;
- CPU raramente é gargalo;
- Gargalo geralmente na entrada de dados;
- Escalonamento tem papel secundário.

### Servidores e estações de trabalho

- Múltiplos processos competem;
- Decisão influencia desempenho percebido;
- Exemplo: solicitações de usuários versus estatísticas diárias.

Também importa:

- Custo de chaveamento;
- Alternância entre CPU e E/S;
- Processos CPU-bound e I/O-bound;
- CPUs mais rápidas tendem a tornar processos mais I/O-bound.

### Exemplo prático de prova

> **Questão:** Por que o escalonamento é importante em servidores?  
> **Resposta esperada:** Porque há múltiplos processos competindo e a escolha afeta o desempenho percebido.

---

## 7.3 Pontos de escalonamento

Decisões de escalonamento podem ocorrer em:

- Criação de novo processo;
- Término de processo;
- Bloqueio;
- Interrupção.

Tipos de escalonadores:

- Quanto ao tratamento de interrupção:
  - Preemptivo;
  - Não preemptivo.
- Quanto ao ambiente:
  - Lote;
  - Interativo;
  - Tempo real.

### Exemplo prático de prova

> **Questão:** Cite dois momentos em que o escalonador pode tomar decisão.  
> **Resposta esperada:** No término de um processo e em uma interrupção, por exemplo.

---

## 7.4 Objetivos de um escalonador

### Gerais

- Justiça: dar a cada processo uma porção justa da CPU;
- Aplicação da política: cumprir a política estabelecida;
- Equilíbrio: manter ocupadas todas as partes do sistema.

### Sistemas em lote

- Vazão: maximizar tarefas por hora;
- Tempo de retorno: minimizar tempo entre submissão e término;
- Utilização de CPU: manter CPU ocupada.

### Sistemas interativos

- Tempo de resposta: responder rapidamente;
- Proporcionalidade: atender expectativas dos usuários.

### Sistemas de tempo real

- Cumprir prazos;
- Evitar perda de dados;
- Previsibilidade;
- Evitar degradação de qualidade em multimídia.

### Exemplo prático de prova

> **Questão:** Qual objetivo é mais importante em sistemas interativos?  
> **Resposta esperada:** Tempo de resposta e proporcionalidade.

---

## 7.5 Escalonamento em sistemas em lote

### FCFS — First Come, First Served

Características:

- Não preemptivo;
- CPU alocada por ordem de requisição;
- Novos processos vão para o fim da fila;
- Processo bloqueia e o primeiro da fila executa;
- Processo desbloqueado vai para o fim da fila.

### SJF — Shortest Job First

Características:

- Não preemptivo;
- Tempos de execução conhecidos;
- Adequado quando todos os processos estão disponíveis.

### SRTN — Shortest Remaining Time Next

Características:

- Versão preemptiva do SJF;
- Tempos conhecidos;
- Menor tempo restante tem maior prioridade.

### Exemplo prático de prova

> **Questão:** Diferencie SJF e SRTN.  
> **Resposta esperada:** SJF é não preemptivo e escolhe o menor job; SRTN é preemptivo e escolhe o menor tempo restante.

---

## 7.6 Escalonamento em sistemas interativos

### Round Robin

Características:

- Chaveamento circular;
- Preemptivo;
- Cada processo recebe um quantum;
- Ao fim do quantum, outro processo executa;
- Tamanho do quantum é parâmetro de projeto;
- Há relação entre overhead de troca de contexto e tempo de resposta;
- É preferível minimizar preempção.

### Prioridades

Características:

- Cada processo recebe prioridade estática ou dinâmica;
- Processo de maior prioridade executa.

Problema:

- Processos de alta prioridade podem não liberar a CPU.

Soluções:

- Reduzir gradativamente prioridade do processo em execução;
- Quantum máximo;
- Prioridades dinâmicas;
- Processos orientados à E/S;
- Prioridade inversa da última fração de quantum.

### Filas múltiplas

Características:

- Exemplo CTSS no MIT com IBM 7094;
- Chaveamento era muito lento;
- Processos CPU-bound recebem quantum grande;
- Classes de prioridade mais alta recebem um quantum;
- Classes de menor prioridade recebem 2 vezes o quantum;
- Processo preemptado é rebaixado.

Exemplo:

- Processo com tempo 100 vezes quantum;
- Inicialmente maior prioridade;
- Depois recebe 2, 8, 16, 32, 64 quanta;
- 7 trocas de contexto em vez de 100;
- Reduz frequência de execução;
- Dá mais tempo para processos interativos rápidos.

### SPF/SPN

- Similar aos sistemas em lote;
- Problema: conhecer duração dos processos;
- Usa estimativa com execuções passadas;
- Fórmula apresentada:

```text
Tn+1 = aTn−1 + (1 − a)Tn
```

- `a < 1` é fator de esquecimento;
- Também chamado de aging.

### Escalonamento garantido

- Garante desempenho;
- Com `n` processos, cada um deve ter `1/n` da CPU.
- Processo criado em `ti,start`.
- Direito de uso:

```text
ti,share = (ti,now − ti,start) / n
```

- Tempo usado: `ti,used`.
- Fator:

```text
ti,used / ti,share
```

- Quanto menor o fator, maior a prioridade.

### Loteria

- Cada processo tem bilhetes;
- Em cada ponto de escalonamento, um bilhete é sorteado;
- Prioridade depende do número de bilhetes;
- Cooperação pode ocorrer pela troca de bilhetes.

### Fração justa

- Preocupa-se com propriedade dos processos;
- Aloca CPU entre usuários;
- Pode usar várias políticas de distribuição entre usuários.

### Exemplo prático de prova

> **Questão:** Por que o tamanho do quantum no Round Robin é importante?  
> **Resposta esperada:** Porque influencia o overhead da troca de contexto e o tempo de resposta.

---

## 7.7 Escalonamento em sistemas de tempo real

Em sistemas de tempo real:

- Tempo tem função essencial;
- O sistema deve reagir a estímulos externos dentro do prazo.

Categorias:

- Crítico;
- Não crítico.

O escalonador deve tentar cumprir prazos, chamados deadlines.

Escalonamento de tempo real pode ser:

- Estático ou dinâmico;
- Online ou offline.

Processos podem ser:

- Periódicos;
- Aperiódicos;
- Esporádicos.

Também aparece o teste de escalonabilidade.

### Exemplo prático de prova

> **Questão:** O que é deadline em escalonamento de tempo real?  
> **Resposta esperada:** É o prazo que o escalonador deve tentar cumprir para atender uma tarefa.

---

## 7.8 Escalonamento de threads

Com processos e threads há dois níveis de paralelismo.

### Threads de usuário

- Chaveamento usa poucas instruções;
- Mais rápido;
- Espera de E/S bloqueia todo processo;
- Pode haver escalonador específico.

Exemplo:

- Servidor web com despachante e operários;
- Alternância de execução;
- Maximização do paralelismo.

No escalonamento de threads de usuário:

- Núcleo não conhece as threads;
- Núcleo escolhe processos;
- Escalonador de threads atua dentro do processo;
- Interrupção de relógio age no processo.

Exemplo:

- Processo A tem threads A1, A2, A3;
- Kernel escolhe processo A;
- Escalonador interno escolhe A1;
- A1 executa até terminar, bloquear voluntariamente ou trocar processo;
- Quantum de 50 ms e surto de CPU de 5 ms;
- Sequência possível: A1-A2-A3 repetidamente.
- Sequência com threads de outro processo não é possível nesse modelo.

### Threads de núcleo

- Núcleo escolhe a thread;
- Pode considerar ou não a relação processo-thread;
- Interrupção de relógio age nas threads.

Exemplo:

- Processo A com A1, A2, A3;
- Processo B com B1, B2, B3, B4;
- Escalonador pode escolher A1;
- Sequência depende da política;
- Pode intercalar threads de processos diferentes.

### Exemplo prático de prova

> **Questão:** Por que em threads de usuário o kernel não pode escolher diretamente A1 ou A2?  
> **Resposta esperada:** Porque o núcleo não tem ciência dessas threads; ele escolhe o processo, e o escalonador interno escolhe a thread.

---

# 8. Coordenação entre Tarefas

## 8.1 Introdução

Sistemas complexos são implementados como várias tarefas que cooperam.

A cooperação exige:

- Comunicação de informações entre tarefas;
- Coordenação para resultados coerentes.

O módulo apresenta:

- Conceitos;
- Problemas;
- Soluções de coordenação entre tarefas.

### Exemplo prático de prova

> **Questão:** Por que tarefas precisam ser coordenadas?  
> **Resposta esperada:** Para que, ao cooperarem e compartilharem dados, produzam resultados coerentes.

---

## 8.2 Condições de disputa

O exemplo usado é uma função de depósito em conta:

```c
void depositar(long *saldo, long valor)
{
    (*saldo) += valor;
}
```

Apesar de parecer uma única operação, em assembly envolve:

1. Carregar saldo da memória para registrador;
2. Carregar valor;
3. Somar nos registradores;
4. Escrever resultado na memória.

Atenção:

> Operações aritméticas ocorrem nos registradores.

Se duas tarefas depositam simultaneamente, podem ocorrer resultados incorretos.

Exemplo:

- Tarefa 1 deposita R$50;
- Tarefa 2 deposita R$1000;
- Resultado correto seria R$1050;
- Execuções concorrentes podem resultar em R$50 ou R$1000.

### Exemplo prático de prova

> **Questão:** Por que `saldo += valor` pode causar erro em concorrência?  
> **Resposta esperada:** Porque é decomposto em várias instruções; duas tarefas podem intercalar leitura, soma e escrita, sobrescrevendo resultados.

---

## 8.3 Definição de condição de disputa

Condição de disputa é:

- Erro gerado por acessos concorrentes a dados;
- Pode ocorrer em qualquer sistema concorrente;
- Envolve ao menos uma operação de escrita;
- Vem do inglês Race Condition.

São erros dinâmicos:

- Não aparecem no código fonte;
- Manifestam-se durante execução;
- São difíceis de detectar;
- Podem ocorrer raramente ou nunca;
- Depuração pode ser complexa.

Conclusão do material:

> É melhor prevenir condições de disputa que consertá-las.

### Exemplo prático de prova

> **Questão:** Por que condições de disputa são difíceis de depurar?  
> **Resposta esperada:** Porque são erros dinâmicos, podem ocorrer raramente e dependem da execução concorrente.

---

## 8.4 Condições de Bernstein

Permitem formalizar condições de disputa.

Dados:

- `t1` e `t2`: tarefas paralelas;
- `R(ti)`: variáveis lidas por `ti`;
- `W(ti)`: variáveis escritas por `ti`.

`t1` e `t2` são independentes se:

- `R(t1) ∩ W(t2) = ∅`
- `R(t2) ∩ W(t1) = ∅`
- `W(t1) ∩ W(t2) = ∅`

Ou seja:

- Uma tarefa não lê o que a outra escreve;
- Elas não escrevem na mesma variável.

### Exemplo prático de prova

> **Questão:** Pela condição de Bernstein, duas tarefas que escrevem na mesma variável são independentes?  
> **Resposta:** Não, pois `W(t1) ∩ W(t2)` não seria vazio.

---

## 8.5 Seções críticas e exclusão mútua

### Seção crítica

Trecho de código que acessa dados compartilhados e onde podem ocorrer condições de disputa.

No exemplo:

```c
(*saldo) += valor;
```

### Exclusão mútua

Impede o entrelaçamento de seções críticas.

Objetivo:

- Apenas uma tarefa pode estar na seção crítica por vez.

Primitivas:

- `enter(ta, csi)`: tarefa deseja entrar na seção crítica.
- `leave(ta, csi)`: tarefa sai da seção crítica.

`enter` é bloqueante: a tarefa espera até a seção crítica estar livre.

### Exemplo prático de prova

> **Questão:** O que é seção crítica?  
> **Resposta esperada:** É trecho de código que acessa dados compartilhados e pode gerar condição de disputa.

---

## 8.6 Propriedades da exclusão mútua

Mecanismos de exclusão mútua devem garantir:

- **Exclusão mútua:** só uma tarefa na seção crítica.
- **Espera limitada:** seção crítica acessível em tempo finito.
- **Independência de outras tarefas:** depende só das tarefas que querem usá-la.
- **Independência de fatores físicos:** não deve depender do tempo ou fatores físicos.

### Exemplo prático de prova

> **Questão:** O que significa espera limitada?  
> **Resposta esperada:** Que a seção crítica será acessível em tempo finito.

---

## 8.7 Inibir interrupções

Solução:

- Inibir interrupções durante acesso à seção crítica;
- Impedir trocas de contexto dentro da seção crítica.

Problemas:

- Preempção por tempo para de funcionar;
- Interrupções de E/S não são tratadas;
- Tarefa na seção crítica não pode realizar E/S;
- Só funciona em sistemas monoprocessados.

Uso:

- Situações específicas dentro do núcleo do SO.

### Exemplo prático de prova

> **Questão:** Por que inibir interrupções não é boa solução para aplicações?  
> **Resposta esperada:** Porque para preempção, impede tratamento de E/S e só funciona em sistemas monoprocessados.

---

## 8.8 Solução trivial com variável `busy`

Usa uma variável:

```c
int busy = 0;
```

`enter`:

- Enquanto `busy` estiver ocupado, espera;
- Depois marca `busy = 1`.

`leave`:

- Marca `busy = 0`.

Problema:

- Duas tarefas podem ver `busy = 0` antes de uma marcar `busy = 1`;
- Isso viola exclusão mútua.

### Exemplo prático de prova

> **Questão:** Por que a solução com `busy` falha?  
> **Resposta esperada:** Porque o teste e a atribuição não são atômicos; duas tarefas podem entrar simultaneamente.

---

## 8.9 Alternância de uso

Usa variável `turn`.

- Indica quem pode entrar na seção crítica.
- Cada tarefa espera seu turno.

Sequência:

```text
t0 → t1 → t2 → ... → tn−1 → t0
```

### Exemplo prático de prova

> **Questão:** Qual variável controla a alternância de uso da seção crítica?  
> **Resposta:** `turn`.

---

## 8.10 Dekker e Peterson

Algoritmo proposto por Dekker e melhorado por Peterson.

Usa:

- `turn`: indica de quem é a vez;
- `wants[2]`: indica se a tarefa quer acessar.

A tarefa:

1. Marca que quer entrar;
2. Dá a vez ao outro;
3. Espera enquanto for a vez do outro e ele também quiser entrar;
4. Ao sair, marca que não quer mais entrar.

### Exemplo prático de prova

> **Questão:** O que `wants[task]` representa no algoritmo de Peterson?  
> **Resposta:** Indica que a tarefa quer acessar a seção crítica.

---

## 8.11 Operações atômicas

Instruções específicas para exclusão:

- TSL — Test and Set Lock;
- CAS — Compare and Swap;
- XCHG — Exchange.

TSL faz:

1. Guarda valor anterior;
2. Coloca `x = 1`;
3. Retorna valor anterior.

Uso com `lock`:

- `enter`: espera enquanto `TSL(lock)` indicar ocupado;
- `leave`: libera com `lock = 0`.

Usado no núcleo do SO em spinlocks.

### Exemplo prático de prova

> **Questão:** O que a instrução TSL faz?  
> **Resposta esperada:** Guarda valor anterior da trava, ativa a trava e retorna o valor anterior.

---

## 8.12 Problemas dessas soluções

Problemas:

- **Ineficiência:** teste contínuo de condição, chamado espera ocupada.
- **Injustiça:** não garantem ordem de acesso; uma tarefa pode entrar e sair várias vezes seguidas.

Uso:

- Apenas dentro do núcleo do SO;
- Sistemas simples.

### Exemplo prático de prova

> **Questão:** O que é espera ocupada?  
> **Resposta esperada:** É ficar testando continuamente uma condição enquanto espera.

---

# 9. Mecanismos de Coordenação

## 9.1 Semáforos

Mecanismo proposto por Edsger Dijkstra em 1965.

Usado para coordenação entre tarefas.

O semáforo provê:

- Eficiência: baixo consumo de CPU;
- Justiça: respeita ordem das requisições;
- Independência de outras tarefas.

É base para muitos mecanismos de comunicação e coordenação.

### Exemplo prático de prova

> **Questão:** Cite duas vantagens dos semáforos.  
> **Resposta esperada:** Baixo consumo de CPU e justiça na ordem das requisições.

---

## 9.2 Estrutura de um semáforo

Um semáforo `s` tem:

- Contador inteiro `s.counter`;
- Fila de tarefas `s.queue`;
- Operações `down(s)` e `up(s)`.

O conteúdo interno não é acessível diretamente.

Pode ser pensado como um objeto com atributos e métodos.

### Exemplo prático de prova

> **Questão:** Quais são os componentes de um semáforo?  
> **Resposta:** Contador, fila de tarefas e operações `down` e `up`.

---

## 9.3 Operações Down e Up

As operações são atômicas.

### Down ou P

- Decrementa contador;
- Se contador fica menor que zero:
  - Suspende a tarefa;
  - Coloca na fila.

### Up ou V

- Incrementa contador;
- Se contador fica menor ou igual a zero:
  - Acorda uma tarefa da fila.

Também existe `init(s, v)`:

- Define valor inicial do contador;
- Inicia fila vazia.

### Exemplo prático de prova

> **Questão:** O que acontece se `down(s)` deixa o contador menor que zero?  
> **Resposta:** A tarefa é suspensa e colocada na fila do semáforo.

---

## 9.4 Exclusão mútua com semáforo

Cada recurso pode ser representado por um semáforo.

Para exclusão mútua:

- Inicializa contador em 1;
- Usa `down(s)` para obter recurso;
- Usa `up(s)` para liberar.

Exemplo: depósito em conta.

```c
down(s);
(*saldo) += valor;
up(s);
```

### Exemplo prático de prova

> **Questão:** Para usar semáforo como mutex, qual deve ser o valor inicial?  
> **Resposta:** 1.

---

## 9.5 Exemplo: estacionamento

Estacionamento com 100 vagas.

Semáforo:

```c
init(vagas, 100);
```

Entrada:

```c
down(vagas);
```

Saída:

```c
up(vagas);
```

Assim:

- Cada carro que entra consome uma vaga;
- Cada carro que sai libera uma vaga.

### Exemplo prático de prova

> **Questão:** Em um estacionamento com 100 vagas, qual valor inicial do semáforo?  
> **Resposta:** 100.

---

## 9.6 Semáforos POSIX

Chamadas citadas:

- `sem_init`: inicializa semáforo.
- `sem_post`: corresponde a `up`.
- `sem_wait`: corresponde a `down`.
- `sem_trywait`: tenta `down`, retorna erro se ocupado.

### Exemplo prático de prova

> **Questão:** Qual chamada POSIX corresponde a `down`?  
> **Resposta:** `sem_wait`.

---

## 9.7 Mutex

Mutex é um semáforo simplificado:

- Livre;
- Ocupado.

Chamadas POSIX/Pthreads:

- `pthread_mutex_init`;
- `pthread_mutex_destroy`;
- `pthread_mutex_lock`;
- `pthread_mutex_unlock`.

`pthread_mutex_lock`:

- Solicita acesso à seção crítica;
- Se ocupada, bloqueia tarefa.

`pthread_mutex_unlock`:

- Libera acesso.

### Exemplo prático de prova

> **Questão:** O que é mutex?  
> **Resposta esperada:** É um semáforo simplificado com dois estados: livre ou ocupado.

---

## 9.8 Variável de condição

Representa uma condição aguardada por uma tarefa.

Funcionamento:

- Uma tarefa espera a condição ficar verdadeira;
- Outra tarefa sinaliza que a condição é verdadeira.

Componentes:

- Semáforo binário `c.mutex`;
- Fila de tarefas `c.queue`;
- Operações atômicas:
  - `wait(c)`;
  - `signal(c)`;
  - `broadcast(c)`.

`wait`:

- Coloca tarefa na fila;
- Libera mutex;
- Suspende tarefa;
- Ao acordar, requer mutex.

`signal`:

- Retira primeira tarefa da fila;
- Acorda essa tarefa.

### Exemplo prático de prova

> **Questão:** O que acontece com o mutex durante `wait(c, m)`?  
> **Resposta:** Ele é liberado antes da tarefa suspender e requerido novamente ao acordar.

---

## 9.9 Produção e consumo com variável de condição

Produtor:

- Obtém dados de uma fonte;
- Deposita dados em buffer compartilhado;
- Sinaliza que há dados.

Consumidor:

- Aguarda dados no buffer;
- Retira dados;
- Usa dados.

Condição:

- Há dados no buffer compartilhado.

Produtor usa:

- `lock(m)`;
- `put_data`;
- `signal(c)`;
- `unlock(m)`.

Consumidor usa:

- `lock(m)`;
- Enquanto buffer vazio, `wait(c, m)`;
- `get_data`;
- `unlock(m)`;
- `process_data`.

### Exemplo prático de prova

> **Questão:** Por que o consumidor usa `while(size(buffer) == 0)` antes de `wait`?  
> **Resposta esperada:** Porque ele deve aguardar enquanto a condição “há dados no buffer” não for verdadeira.

---

## 9.10 Semânticas de variáveis de condição

A operação `signal(c)` pode seguir duas semânticas:

### Hoare

- Em `signal(c)`, a tarefa perde mutex e CPU;
- Eles são entregues à primeira tarefa da fila.

### Mesa

- `signal(c)` acorda a primeira tarefa da fila;
- A tarefa corrente continua executando;
- Ela deve liberar o mutex e não alterar a condição.

POSIX usa semântica Mesa:

- `pthread_cond_wait`;
- `pthread_cond_signal`;
- `pthread_cond_broadcast`.

### Exemplo prático de prova

> **Questão:** Qual semântica é usada por POSIX para variáveis de condição?  
> **Resposta:** Mesa.

---

## 9.11 Monitores

Monitor é uma estrutura de sincronização associada a um recurso.

Características:

- Requer e libera seção crítica de forma transparente;
- Programador não precisa se preocupar diretamente com isso.

Componentes:

- Recurso compartilhado;
- Procedimentos para acessar variáveis;
- Um mutex usado em cada acesso.

Pode ser pensado como um objeto sincronizado.

Exemplo em Java:

```java
public synchronized void depositar(...)
public synchronized void retirar(...)
```

### Exemplo prático de prova

> **Questão:** O que é um monitor?  
> **Resposta esperada:** É uma estrutura de sincronização associada a um recurso, com procedimentos de acesso protegidos por mutex.

---

# 10. Problemas Clássicos de Coordenação

## 10.1 Problemas clássicos

Retratam situações típicas de coordenação em sistemas.

Servem para descrever soluções genéricas e eficientes.

Exemplos citados:

- Produtores/consumidores;
- Leitores/escritores;
- Barbeiro dorminhoco;
- Jantar dos filósofos.

Leitura citada:

- *The Little Book of Semaphores*, Allen B. Downey.

### Exemplo prático de prova

> **Questão:** Para que servem problemas clássicos de coordenação?  
> **Resposta esperada:** Para representar situações típicas e estudar soluções genéricas e eficientes.

---

## 10.2 Produtores/consumidores

Há um buffer compartilhado com capacidade para `N` itens.

Dois tipos de tarefas:

### Produtor

- Produz e deposita itens no buffer;
- Se buffer cheio, espera vaga.

### Consumidor

- Retira e consome itens;
- Se buffer vazio, espera item.

Três aspectos precisam ser resolvidos:

1. Exclusão mútua no acesso ao buffer;
2. Bloqueio dos produtores quando faltam vagas;
3. Bloqueio dos consumidores quando faltam itens.

Solução com três semáforos:

- `mutex`: controla exclusão mútua do buffer, inicia em 1;
- `item`: controla itens disponíveis, inicia em 0;
- `vaga`: controla vagas disponíveis, inicia em `N`.

Produtor:

```text
produz_item
sem_down(vaga)
sem_down(mutex)
coloca_item
sem_up(mutex)
sem_up(item)
```

Consumidor:

```text
sem_down(item)
sem_down(mutex)
retira_item
sem_up(mutex)
sem_up(vaga)
consome_item
```

### Exemplo prático de prova

> **Questão:** No problema produtor/consumidor, quais semáforos são usados e com quais valores iniciais?  
> **Resposta:** `mutex = 1`, `item = 0`, `vaga = N`.

---

## 10.3 Produtores/consumidores com variáveis condicionais

Variáveis:

- `mutex mbuf`: controla acesso ao buffer;
- `condition item`: condição “existe item no buffer”;
- `condition vaga`: condição “existe vaga no buffer”.

Produtor:

- Produz item;
- Obtém mutex;
- Enquanto buffer cheio, espera vaga;
- Deposita item;
- Sinaliza item;
- Libera buffer.

Consumidor:

- Obtém mutex;
- Enquanto buffer vazio, espera item;
- Retira item;
- Sinaliza vaga;
- Libera buffer;
- Consome item.

### Exemplo prático de prova

> **Questão:** Qual condição o produtor espera quando o buffer está cheio?  
> **Resposta:** Espera a condição `vaga`.

---

## 10.4 Leitores/escritores

Várias tarefas acessam uma área de memória compartilhada para leitura ou escrita.

### Leituras

- Podem ser simultâneas;
- Não alteram dados;
- `N` leitores podem acessar juntos.

### Escritas

- Devem ter exclusão mútua;
- Alteram dados;
- Apenas um escritor por vez;
- Leitores não podem acessar durante escrita.

### Exemplo prático de prova

> **Questão:** Por que leitores podem acessar simultaneamente, mas escritores não?  
> **Resposta esperada:** Porque leituras não alteram dados, enquanto escritas alteram e exigem exclusão mútua.

---

## 10.5 Solução trivial para leitores/escritores

Usa um único `mutex`.

Leitor:

```text
sem_down(mutex)
lê_dados
sem_up(mutex)
trata_dados_lidos
```

Escritor:

```text
obtém_dados
sem_down(mutex)
escreve_dados
sem_up(mutex)
```

Problema:

- Leitores não podem trabalhar juntos.

### Exemplo prático de prova

> **Questão:** Qual é o problema da solução trivial para leitores/escritores?  
> **Resposta:** Ela impede que vários leitores leiam simultaneamente.

---

## 10.6 Solução com leitores simultâneos

Variáveis:

- `leitores`: contador de leitores ativos;
- `mutex`: protege área compartilhada;
- `m_cont`: protege o contador.

Leitor ao entrar:

```text
sem_down(m_cont)
leitores++
if (leitores == 1)
    sem_down(mutex)
sem_up(m_cont)
```

Leitor ao sair:

```text
sem_down(m_cont)
leitores--
if (leitores == 0)
    sem_up(mutex)
sem_up(m_cont)
```

O código do escritor não muda.

O primeiro leitor bloqueia escritores.

O último leitor libera escritores.

O material afirma que essa solução prioriza leitores.

### Exemplo prático de prova

> **Questão:** Na solução com leitores simultâneos, por que o primeiro leitor faz `sem_down(mutex)`?  
> **Resposta:** Para bloquear escritores enquanto houver leitores acessando.

---

## 10.7 Jantar dos filósofos

Cinco filósofos:

- Alternam entre meditar e comer;
- Usam mesa com 5 lugares;
- Cada um tem seu prato;
- Cinco palitos são compartilhados.

Características:

- Envolve várias tarefas;
- Envolve vários recursos;
- Não há coordenador central.

Restrições:

- Antes de comer, filósofo `fi` pega palito da direita `pi` e da esquerda `pi+1`, um de cada vez;
- Depois de comer, devolve os palitos;
- Dois filósofos vizinhos não podem comer ao mesmo tempo;
- Filósofos não conversam;
- Não conhecem estados uns dos outros;
- Não há coordenador central.

Solução básica:

- Cada palito é um semáforo inicializado em 1;
- Filósofo pega palito direito;
- Depois palito esquerdo;
- Come;
- Devolve os palitos.

Problema:

- Risco de impasse.

### Exemplo prático de prova

> **Questão:** Por que a solução básica do jantar dos filósofos pode gerar impasse?  
> **Resposta esperada:** Porque cada filósofo pode pegar um palito e ficar esperando o outro, formando espera circular.

---

# 11. Impasses

## 11.1 Conceito de impasse

Impasse é:

> Grupo de tarefas bloqueadas aguardando umas pelas outras.

Coordenar tarefas implica bloquear tarefas conflitantes:

- Algumas tarefas são suspensas enquanto outras executam;
- Cada recurso pode ser associado a um semáforo;
- Tarefas aguardam semáforos para acessar recursos.

Essas restrições podem levar a impasses.

### Exemplo prático de prova

> **Questão:** Defina impasse.  
> **Resposta esperada:** É um grupo de tarefas bloqueadas, cada uma aguardando outra do grupo.

---

## 11.2 Exemplo de impasse: transferência bancária

Função de transferência:

1. Obtém acesso à conta de débito;
2. Obtém acesso à conta de crédito;
3. Se saldo suficiente:
   - Debita uma conta;
   - Credita outra;
4. Libera as contas.

Problema:

- Tarefa `t1` transfere de `c1` para `c2`;
- Tarefa `t2` transfere de `c2` para `c1`;
- `t1` obtém `c1` e espera `c2`;
- `t2` obtém `c2` e espera `c1`;
- Surge impasse.

### Exemplo prático de prova

> **Questão:** Explique o impasse na transferência entre duas contas.  
> **Resposta esperada:** Cada tarefa segura uma conta e espera a outra, impedindo que qualquer uma avance.

---

## 11.3 Condições para impasse

Quatro condições necessárias:

### Exclusão mútua

Recursos acessados com exclusão mútua, usando semáforos ou similares.

### Posse e espera

A tarefa possui um recurso e quer acessar outro.

### Não-preempção

A tarefa só libera os recursos quando quiser.

### Espera circular

Existe ciclo de esperas:

- `t1` quer recurso de `t2`;
- `t2` quer recurso de `t3`;
- `t3` quer recurso de `t1`.

As quatro condições são necessárias, mas não suficientes para impasse.

### Exemplo prático de prova

> **Questão:** Quais são as quatro condições necessárias para impasse?  
> **Resposta:** Exclusão mútua, posse e espera, não-preempção e espera circular.

---

## 11.4 Grafo de alocação de recursos

Permite:

- Visualizar alocação de recursos;
- Detectar impasses.

Representações:

- Tarefa;
- Recurso;
- Recurso para tarefa: posse;
- Tarefa para recurso: requisição;
- Dois pontos indicam dois recursos do mesmo tipo.

### Exemplo prático de prova

> **Questão:** Para que serve um grafo de alocação de recursos?  
> **Resposta:** Para visualizar alocações e detectar impasses.

---

## 11.5 Impasse nas contas bancárias

No exemplo:

- `t1` tem `c1`;
- `t1` quer `c2`;
- `t2` tem `c2`;
- `t2` quer `c1`.

As quatro condições aparecem:

- Exclusão mútua: contas protegidas por semáforos;
- Posse e espera: cada tarefa tem uma conta e requer outra;
- Não-preempção: conta só é liberada com `sem_up`;
- Espera circular: `c1 → t1 → c2 → t2 → c1`.

Conclusão:

> Quatro condições + um recurso de cada tipo → impasse.

### Exemplo prático de prova

> **Questão:** Identifique a espera circular no exemplo das contas.  
> **Resposta:** `c1 → t1 → c2 → t2 → c1`.

---

## 11.6 Impasse dos filósofos

Cada filósofo pode ter um palito e querer o próximo.

Exemplo:

- `f0` tem `p0` e quer `p1`;
- `f1` tem `p1` e quer `p2`;
- `f2` tem `p2` e quer `p3`;
- `f3` tem `p3` e quer `p4`;
- `f4` tem `p4` e quer `p0`.

Isso forma ciclo de espera.

### Exemplo prático de prova

> **Questão:** No jantar dos filósofos, qual condição de impasse aparece quando todos pegam o palito da direita?  
> **Resposta esperada:** Espera circular.

---

## 11.7 Múltiplas instâncias de recursos

O material mostra que pode existir ciclo no grafo sem haver impasse se houver múltiplas instâncias de recurso.

Exemplo citado:

```text
t1 → r1 → t2 → r2 → t3 → r3 → t1
```

Mesmo assim:

> Sem impasse.

### Exemplo prático de prova

> **Questão:** Um ciclo no grafo sempre significa impasse?  
> **Resposta esperada:** Não necessariamente, especialmente se houver múltiplas instâncias de recursos.

---

## 11.8 Estratégias para tratar impasses

Estratégias:

### Ignorar

Impasse é problema do programador.

É a abordagem mais usada em SOs, segundo o material.

### Prevenir

Regras de programação para evitar impasses.

### Impedir

Monitorar uso de recursos e impedir impasses.

### Detectar

Detectar ocorrência de impasses e desfazê-los.

### Exemplo prático de prova

> **Questão:** Qual estratégia de tratamento de impasse é mais usada em SOs, segundo os slides?  
> **Resposta:** Ignorar.

---

## 11.9 Prevenção de impasses

A ideia é programar para evitar uma das quatro condições.

### Exclusão mútua

- Reduzir áreas de exclusão ao mínimo;
- Usar técnicas alternativas, como spooling;
- Exemplo: acesso a impressoras.

### Posse e espera

- Usar um recurso por vez;
- Obter todos os recursos antes de iniciar;
- Exemplo: tratar uma conta por vez na transferência.

### Não-preempção

- Poder “arrancar” recursos dos processos;
- Difícil de implementar;
- Pode gerar inconsistências.

### Espera circular

- Ordenar recursos;
- Tarefas solicitam nessa ordem;
- Exemplo: acessar contas segundo números de conta.

Conclusão:

> Basta quebrar uma das condições.

### Exemplo prático de prova

> **Questão:** Como evitar espera circular em transferências bancárias?  
> **Resposta esperada:** Ordenando as contas e sempre acessando segundo essa ordem.

---

## 11.10 Prevenir impasse com um saleiro

No jantar dos filósofos, o material mostra solução com um semáforo adicional: `saleiro`.

Fluxo:

1. Filósofo medita;
2. Pega saleiro;
3. Pega palito direito;
4. Pega palito esquerdo;
5. Devolve saleiro;
6. Come;
7. Devolve palitos.

O saleiro limita a tentativa simultânea de pegar palitos.

### Exemplo prático de prova

> **Questão:** Qual é a função do “saleiro” na solução dos filósofos?  
> **Resposta esperada:** Coordenar a entrada na tentativa de pegar os palitos, prevenindo impasse.

---

## 11.11 Impedimento de impasses

Estratégia:

- Acompanhar alocação de recursos às tarefas;
- Negar acessos que possam levar a estados inseguros.

Grafo de estados do sistema:

- **Estado:** distribuição de recursos entre tarefas;
- **Aresta:** alocação ou liberação de recursos.

Estados:

- **Seguros:** permitem evoluir para outros estados;
- **Inseguros:** levam somente a impasses.

### Exemplo prático de prova

> **Questão:** O que é um estado inseguro?  
> **Resposta esperada:** É um estado que somente leva a impasses.

---

## 11.12 Detecção e correção de impasses

Estratégia:

- Observar o sistema;
- Quando ocorrer impasse, resolvê-lo.

### Como detectar?

Mantendo grafo de alocação de recursos:

- Atualizar a cada requisição;
- Atualizar a cada alocação;
- Atualizar a cada liberação;
- Detectar ciclos no grafo.

Problema:

- Pode exigir muito processamento.

Outra forma:

- Monitorar nível de atividade;
- Analisar tarefas suspensas há muito tempo.

### Como resolver?

Duas estratégias:

1. **Eliminar tarefas** para romper ciclos.
   - Pode eliminar a mais nova;
   - A mais antiga;
   - A menos prioritária.

2. **Retroceder tarefas** para estado seguro.
   - Técnica de rollback usada em bancos de dados;
   - Exige checkpoints periódicos.

Algumas operações não podem ser desfeitas:

- Interações com usuário;
- Envio de pacotes de rede.

### Exemplo prático de prova

> **Questão:** Cite duas formas de resolver um impasse detectado.  
> **Resposta esperada:** Eliminar tarefas para romper ciclos ou retroceder tarefas para um estado seguro.

---

# Revisão final rápida

## Conceitos que mais parecem cair em prova

- Sistema operacional como **gerenciador de recursos** e **camada de abstração**.
- Diferença entre **modo usuário** e **modo núcleo**.
- Diferença entre **interrupção**, **exceção** e **trap**.
- O que são **syscalls**.
- Diferença entre **programa**, **processo** e **thread**.
- Estados de processo: **execução**, **pronto** e **bloqueado/espera**.
- PCB como estrutura que representa processos.
- Algoritmos de escalonamento:
  - FCFS;
  - SJF;
  - SRTN;
  - Round Robin;
  - Prioridades;
  - Filas múltiplas.
- Condição de disputa e seção crítica.
- Exclusão mútua.
- Semáforos, mutexes, variáveis de condição e monitores.
- Produtor/consumidor.
- Leitores/escritores.
- Jantar dos filósofos.
- Impasse e suas quatro condições:
  - Exclusão mútua;
  - Posse e espera;
  - Não-preempção;
  - Espera circular.
- Estratégias contra impasse:
  - Ignorar;
  - Prevenir;
  - Impedir;
  - Detectar e corrigir.