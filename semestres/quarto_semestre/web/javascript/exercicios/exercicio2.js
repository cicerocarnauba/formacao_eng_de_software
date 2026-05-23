const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Calça", preco: 100 },
    { nome: "Tênis", preco: 200 },
];

const produtosComDesconto = produtos.map(produto => ({
    ...produto,
    precoComDesconto: produto.preco * 0.9
}));

console.log(produtosComDesconto);
