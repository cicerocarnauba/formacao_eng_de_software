let perfil = {
    nome: "Cícero",
    idade: 22,
    cidade: "Piquet Carneiro",
    propiedade: true,
    apresentar(){
         console.log(`${perfil.nome}, ${perfil.cidade}`)
    }
}

perfil.cidade = 'Quixadá'
perfil.curso = 'Engenharia de Software'
perfil.apresentar()

