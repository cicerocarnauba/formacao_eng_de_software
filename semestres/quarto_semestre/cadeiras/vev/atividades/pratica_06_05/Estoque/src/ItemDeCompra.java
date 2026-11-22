public class ItemDeCompra {
    String nomeProduto;
    int quantidade;
    Estoque estoque;

    public ItemDeCompra(String nomeProduto, int quantidade) {
        this.nomeProduto = nomeProduto;
        this.quantidade = quantidade;
    }

    public void defineEstoqueDeCompra(Estoque estoque) {
        this.estoque = estoque;
    }

    public boolean estaAtendida() {
        if (estoque.temProdutoEmEstoque(nomeProduto, quantidade)) {
            estoque.removerProdutoEmEstoque(nomeProduto, quantidade);
            return true;
        }
        return false;
    }
}
