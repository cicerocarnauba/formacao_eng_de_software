const sitaucaoAluno = (nota1, nota2) => {
    const media = (nota1 + nota2) / 2
    return media >= 7 ? 'Aprovado' : media>=4 ? 'Recuperação' : 'Reprovado'
}

console.log(sitaucaoAluno(6, 5))