class ContaCorrente {
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    get saldo() {
        return `R$ ${this.#saldo.toFixed(2)}`;
    }

    set saldo(novoValor) {
        if (novoValor < 0) {
            console.log("Erro: o saldo não pode ser negativo.");
        } else {
            this.#saldo = novoValor;
        }
    }
}

const conta = new ContaCorrente("Ana Silva", 1000);

console.log(conta.saldo);
conta.saldo = 1500;
console.log(conta.saldo);
conta.saldo = -200;
console.log(conta.saldo);
