
public class Navio {
    IArma arma;

    public Navio(IArma arma) {
        this.arma = arma;
     }

    
    public void atirar(){
        System.out.println("atirado: ");
        this.arma.atirar();
    }


}
