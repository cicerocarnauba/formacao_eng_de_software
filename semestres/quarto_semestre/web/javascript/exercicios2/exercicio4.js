const cliente = { nome: "Ana Silva", cpf: "111.222.333-44", cep: "00000-000" };
const entrega = { frete: 15.00, cep: "63900-000" };
const estoqueLocal = ["Notebook","Mouse"];
const estoqueParceiro = ["Teclado", "Mecânico", "Monitor"];

const todosProdutos = [...estoqueLocal, ...estoqueParceiro];

const resumoPedido = { ...cliente, ...entrega };

const gerarRecibo = (pedido, produtos) =>
  `O cliente ${pedido.nome} receberá ${produtos.length} itens no CEP ${pedido.cep}`;

console.log("todosProdutos:", todosProdutos);
console.log("resumoPedido:", resumoPedido);
console.log(gerarRecibo(resumoPedido, todosProdutos));
