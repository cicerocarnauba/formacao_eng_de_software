
public interface Estoque {
    public boolean temProdutoEmEstoque(String nomeProduto, int quantidade);

    public void removerProdutoEmEstoque(String nomeProduto, int quantidade);
}