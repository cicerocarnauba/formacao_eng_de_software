let funcionarios = [{
    nome: "Carlos", salario: 2500
}, {
    nome: "Fernanda", salario: 3200
}, {
    nome: "Roberto", salario: 1800
}, {
    nome: "Mariana", salario: 4000
}]

let maior = 0
nome_maiors = ""
for (func in funcionarios){
    if (funcionarios[func].salario > maior){
        nome_maiors = funcionarios[func].nome
        maior = funcionarios[func].salario
    }
}

console.log(`O maior salário é R$ ${maior} e pertence ao funcionário ${nome_maiors}`)


