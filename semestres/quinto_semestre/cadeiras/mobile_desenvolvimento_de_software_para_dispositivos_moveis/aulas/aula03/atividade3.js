function calcularTotal(valorCompra,clienteVip){
    return clienteVip ? valorCompra - (valorCompra * 0.15) : valorCompra - (valorCompra * 0.05)
}

console.log(`O valor final com desconto é R$ ${calcularTotal(100, false)}`)