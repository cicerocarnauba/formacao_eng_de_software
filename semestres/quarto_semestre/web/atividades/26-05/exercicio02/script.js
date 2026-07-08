let contador = 0
let pokemons = []
let paginaAtual = 1
const porPagina = 12

document.addEventListener("click", function (e) {
    if (e.target.closest("#paginacao")) return

    contador++

    fetch("https://pokeapi.co/api/v2/pokemon/" + contador)
        .then(function (resposta) {
            return resposta.json()
        })
        .then(function (pokemon) {
            pokemons.push(pokemon)
            paginaAtual = Math.ceil(pokemons.length / porPagina)
            renderizar()

            var popup = document.createElement("div")
            popup.className = "popup"
            popup.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <p>Pokémon Capturado!</p>
            `
            popup.style.left = e.pageX + "px"
            popup.style.top = e.pageY + "px"
            document.body.appendChild(popup)

            setTimeout(function () {
                popup.remove()
            }, 2500)
        })
})

function renderizar() {
    const grid = document.getElementById("grid")
    grid.innerHTML = ""

    const inicio = (paginaAtual - 1) * porPagina
    const fim = inicio + porPagina
    const pokemonsDaPagina = pokemons.slice(inicio, fim)


    pokemonsDaPagina.forEach(function (pokemon) {
        const card = document.createElement("div")
        card.className = "card"


        card.innerHTML = `
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
            <p>#${pokemon.id} ${pokemon.name}</p>
        `

        grid.appendChild(card)
    })

    const totalPaginas = Math.ceil(pokemons.length / porPagina)
    document.getElementById("info-pagina").textContent = "Página " + paginaAtual + " de " + totalPaginas
    document.getElementById("total").textContent = "Total Pokémons capturados: " + pokemons.length
}

document.getElementById("btn-anterior").addEventListener("click", function () {
    if (paginaAtual > 1) {
        paginaAtual--
        renderizar()
    }
})

document.getElementById("btn-proximo").addEventListener("click", function () {
    const totalPaginas = Math.ceil(pokemons.length / porPagina)
    if (paginaAtual < totalPaginas) {
        paginaAtual++
        renderizar()
    }
})
