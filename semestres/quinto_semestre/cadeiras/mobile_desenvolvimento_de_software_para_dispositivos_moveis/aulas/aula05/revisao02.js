let produtos = [ {nome: "Teclado", preco: 150, quantidade: 4},
    {nome: "Mouse", preco: 100, quantidade: 10},
    {nome: "Monitor", preco: 700, quantidade: 3},
    {nome: "Cadeira", preco: 500, quantidade: 2}
]

let total = produtos.reduce((acumulador, valorTotal) => {
    return acumulador + valorTotal.preco * valorTotal.quantidade
}, 0)

console.log(`O valor total em estoque é R$ ${total}`)

