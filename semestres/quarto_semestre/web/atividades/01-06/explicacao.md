# Explicação — Atividade Async/Await (01-06)

## O que a atividade pedia

Criar uma página que consome a URL `https://hp-api.onrender.com/api/characters` e exibe os dados dos personagens em formato de **cartões**, mostrando a imagem de cada um. Se o personagem não tiver imagem, exibir uma imagem padrão.

A atividade foi expandida para incluir uma tela de entrada no estilo do **Mapa do Maroto**, filtragem por casa de Hogwarts via abas e tema visual de pergaminho.

---

## Estrutura de arquivos

```
01-06/
├── index.html     → estrutura HTML da página
├── style.css      → estilos visuais
├── script.js      → lógica JavaScript
└── explicacao.md  → este arquivo
```

---

## index.html

Divide a página em duas telas:

- **`#tela-mapa`** — exibida ao carregar, mostra a imagem do Mapa do Maroto em tela cheia. Clicar em qualquer lugar abre a tela de personagens.
- **`#tela-personagens`** — oculta inicialmente, contém o cabeçalho, as abas de filtro e os cartões dos personagens.

As abas usam o atributo `data-casa` para indicar qual casa filtrar. O botão `#btn-voltar` fica fixo no canto inferior direito e retorna à tela do mapa.

---

## script.js

### Imagem padrão

Quando um personagem não tem imagem, usa uma imagem do símbolo de Harry Potter:

```js
const IMAGEM_PADRAO = "https://ichef.bbci.co.uk/...simbolopotter.jpg.webp";
```

### Navegação entre telas

Ao clicar no mapa, a tela do mapa recebe a classe `desaparecer` (fade-out via CSS) e a tela de personagens tem a classe `oculto` removida:

```js
envoltoroMapa.addEventListener("click", () => {
    telaMapa.classList.add("desaparecer");
    telaPersonagens.classList.remove("oculto");
    setTimeout(() => telaPersonagens.classList.add("revelar"), 50);

    if (!personagensCarregados) {
        iniciar();
        personagensCarregados = true;
    }
});
```

Os personagens são carregados **apenas uma vez** — na primeira vez que o mapa é aberto.

### Busca dos personagens

A função `buscarPersonagens()` usa `async/await` com `fetch` para consumir a API:

```js
async function buscarPersonagens() {
    const resposta = await fetch("https://hp-api.onrender.com/api/characters");
    if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
    return await resposta.json();
}
```

- `await fetch(...)` espera a resposta sem travar o navegador
- `resposta.ok` verifica se o status HTTP foi 2xx
- `await resposta.json()` converte o corpo da resposta para array JavaScript

### Criação dos cartões

A função `criarCartao()` recebe um objeto de personagem e retorna um `<div>` com as informações montadas via template literal:

```js
function criarCartao(personagem) {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao");
    cartao.innerHTML = `
        <img src="${imagem}" onerror="this.src='${IMAGEM_PADRAO}'">
        <div class="cartao-info">
            <h2>${personagem.name}</h2>
            ...
        </div>
    `;
    return cartao;
}
```

O `onerror` na tag `<img>` funciona como fallback: se a URL estiver quebrada, troca pela imagem padrão automaticamente.

### Filtragem por casa

A lista completa fica em `todosPersonagens`. A função `renderizarFiltrados()` filtra e re-renderiza os cartões conforme a aba clicada:

```js
function renderizarFiltrados(casa) {
    const filtrados = casa === "Todos"
        ? todosPersonagens
        : todosPersonagens.filter(p => p.house === casa);

    filtrados.forEach(personagem => contenedor.appendChild(criarCartao(personagem)));
}
```

### Abas

Cada botão de aba tem `data-casa`. Ao clicar, remove a classe `ativa` de todas e adiciona na clicada:

```js
abas.forEach(aba => {
    aba.addEventListener("click", () => {
        abas.forEach(a => a.classList.remove("ativa"));
        aba.classList.add("ativa");
        renderizarFiltrados(aba.dataset.casa);
    });
});
```

---

## style.css

### Fundo do Mapa do Maroto

O background da página usa uma imagem do Mapa do Maroto hospedada no Catbox:

```css
body {
    background: url('https://files.catbox.moe/fr0rpj.png') center center / cover no-repeat fixed;
}
```

A tela de personagens coloca um overlay semitransparente por cima para garantir legibilidade dos cartões.

### Abas com cores por casa

Cada aba recebe um gradiente diferente quando ativa:

| Casa       | Cor ativa              |
|------------|------------------------|
| Grifinória | Vermelho escuro        |
| Sonserina  | Verde escuro           |
| Lufa-Lufa  | Dourado                |
| Corvinal   | Azul escuro            |
| Todos      | Dourado sépia          |

### Cartões com efeito de vidro

Os cartões usam fundo semitransparente + `backdrop-filter: blur` sobre o fundo do mapa:

```css
.cartao {
    background: rgba(20, 12, 3, 0.82);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(139, 105, 20, 0.35);
}
```

---

## Dados exibidos em cada cartão

| Campo            | O que é                        |
|------------------|-------------------------------|
| `name`           | Nome do personagem             |
| `image`          | URL da foto (pode estar vazia) |
| `house`          | Casa de Hogwarts               |
| `species`        | Espécie (humano, fantasma…)    |
| `alive`          | Se está vivo ou falecido       |
| `hogwartsStaff`  | Se é membro da equipe          |
| `hogwartsStudent`| Se é aluno                     |
| `ancestry`       | Ancestralidade (puro-sangue…)  |
| `patronus`       | Patrono do bruxo               |
| `actor`          | Ator que interpretou           |

---

## Fluxo resumido

```
Página abre
    → Tela do mapa exibida em tela cheia
Usuário clica no mapa
    → Tela do mapa desaparece (fade-out)
    → iniciar() faz fetch em /api/characters
        → todosPersonagens recebe o array completo (~400 personagens)
        → abas são configuradas com event listeners
        → renderizarFiltrados("Todos") exibe todos os cartões
Usuário clica em uma aba
    → renderizarFiltrados(casa) filtra e re-renderiza os cartões
Usuário clica em "Mal feito, feito!"
    → Volta para a tela do mapa
```
