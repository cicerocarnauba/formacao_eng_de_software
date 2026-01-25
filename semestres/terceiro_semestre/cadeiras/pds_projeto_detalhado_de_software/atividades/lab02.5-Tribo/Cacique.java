
public class Cacique extends Indio{
	public Cacique(String nome) { 
		super(nome); 
	} //  
	public void adicionaAnimalNaTribo(Tribo tribo, 
			String nome, String especie){ 
		if 
		(tribo.getCacique().getNome().equals(this.getNome())){ 
			tribo.adicionaAnimal(new 
					Animal(especie,nome)); 
		} 
	} 
}
