public class Lancador implements IArma{
	
    IMunicao municao;
	public Lancador(IMunicao municao){
		this.municao =municao;
	}
	public void atirar(){
		System.out.println("atirei uma "+this.municao);
	}
}