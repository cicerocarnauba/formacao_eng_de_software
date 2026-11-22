function criarMultiplicador(num1){
    let multiplica3 = x => x * 3
    return multiplica3(num1)
}

// function criarMultiplicador(num1){
//     return (x => x * 3)(num1)
// }

console.log(criarMultiplicador(4))