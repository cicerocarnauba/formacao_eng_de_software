package ufc.quixada.es.pds.grasp.controlador;

public class PostController {
    private RepositorioPosts repositorioPosts;

    public PostController(){
        this.repositorioPosts = new RepositorioPosts();
    }

    public void publicarPost(String titulo, String corpo_texto) {
        repositorioPosts.adicionar(titulo, corpo_texto);
    }
}
