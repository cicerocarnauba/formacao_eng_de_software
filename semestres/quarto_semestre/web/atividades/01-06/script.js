
function linha(rotulo, valor) {
    if (!valor || valor.toString().trim() === "") return "";
    return `
        <div class="l-info">
            <span class="rotulo">${rotulo}</span>
            <span class="valor">${valor}</span>
        </div>`;
}

function formatarVarinha(varinha) {
    if (!varinha || (!varinha.wood && !varinha.core && !varinha.length)) return null;
    const partes = [];
    if (varinha.wood)   partes.push(varinha.wood);
    if (varinha.core)   partes.push(varinha.core);
    if (varinha.length) partes.push(`${varinha.length} pol.`);
    return partes.join(" · ");
}

const telaMapa        = document.getElementById("tela-mapa");
const telaPersonagens = document.getElementById("tela-pers");
const envoltoroMapa   = document.getElementById("env-mapa");
const btnVoltar       = document.getElementById("btn-voltar");

let personagensCarregados = false;

envoltoroMapa.addEventListener("click", () => {
    telaMapa.classList.add("sumir");

    telaPersonagens.classList.remove("oculto");
    setTimeout(() => telaPersonagens.classList.add("revelar"), 50);

    if (!personagensCarregados) {
        iniciar();
        personagensCarregados = true;
    }
});

btnVoltar.addEventListener("click", () => {
    telaPersonagens.classList.remove("revelar");
    setTimeout(() => telaPersonagens.classList.add("oculto"), 400);
    telaMapa.classList.remove("sumir");
});

let todosPersonagens = [];

async function buscarPersonagens() {
    const resposta = await fetch("https://hp-api.onrender.com/api/characters");
    if (!resposta.ok) throw new Error(`Erro HTTP: ${resposta.status}`);
    return await resposta.json();
}

function criarCartao(personagem) {
    const cartao = document.createElement("div");
    cartao.classList.add("cartao");

    const imagem = personagem.image && personagem.image.trim() !== ""
        ? personagem.image
        : "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/150A6/production/_98528168_simbolopotter.jpg.webp";

    const emblemaStatus = personagem.alive
        ? `<span class="emblema vivo">Vivo</span>`
        : `<span class="emblema morto">Falecido</span>`;

    const funcao = personagem.hogwartsStaff && personagem.hogwartsStudent
        ? "Membro & Aluno"
        : personagem.hogwartsStaff
            ? "Membro"
            : personagem.hogwartsStudent
                ? "Aluno"
                : null;

    const nascimento = personagem.dateOfBirth || personagem.yearOfBirth || null;

    cartao.innerHTML = `
        <img src="${imagem}" alt="${personagem.name}" onerror="this.src='https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/150A6/production/_98528168_simbolopotter.jpg.webp'">
        <div class="c-info">
            <h2>${personagem.name}</h2>
            ${linha("Gênero",         personagem.gender)}
            ${linha("Espécie",        personagem.species)}
            ${linha("Casa",           personagem.house)}
            ${linha("Função",         funcao)}
            ${linha("Nascimento",     nascimento)}
            ${linha("Bruxo",          personagem.wizard != null ? (personagem.wizard ? "Sim" : "Não") : "")}
            ${linha("Ancestralidade", personagem.ancestry)}
            ${linha("Patrono",        personagem.patronus)}
            ${linha("Ator",           personagem.actor)}
            <div class="c-emblemas">${emblemaStatus}</div>
        </div>
    `;

    return cartao;
}

function renderizarFiltrados(casa) {
    const grade = document.getElementById("grade");
    grade.innerHTML = "";

    const filtrados = casa === "Todos"
        ? todosPersonagens
        : todosPersonagens.filter(p => p.house === casa);

    filtrados.forEach(personagem => grade.appendChild(criarCartao(personagem)));
}

function configurarAbas() {
    const abas = document.querySelectorAll(".aba");
    abas.forEach(aba => {
        aba.addEventListener("click", () => {
            abas.forEach(a => a.classList.remove("ativa"));
            aba.classList.add("ativa");
            renderizarFiltrados(aba.dataset.casa);
        });
    });
}

async function iniciar() {
    const carregando = document.getElementById("carregando");
    const msgErro    = document.getElementById("msg-erro");

    try {
        todosPersonagens = await buscarPersonagens();
        carregando.style.display = "none";
        configurarAbas();
        renderizarFiltrados("Todos");
    } catch (erro) {
        carregando.style.display = "none";
        msgErro.style.display = "block";
        msgErro.textContent = "Não foi possível carregar os personagens. Tente novamente mais tarde.";
        console.error(erro);
    }
}
