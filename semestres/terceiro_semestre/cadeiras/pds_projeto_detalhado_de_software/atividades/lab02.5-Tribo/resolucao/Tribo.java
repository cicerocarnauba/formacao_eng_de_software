import java.util.ArrayList;
import java.util.Iterator;

public class Tribo {
	private ArrayList<Animal> animais; 
	private ArrayList<Indio> indios; 
	private Cacique cacique; 
	public Tribo() { 
		animais = new ArrayList<Animal>(); 
	} 
	public void adicionaAnimal(Animal animal, Cacique cacique) {
		if (cacique.equals(this.cacique)){
			animais.add(animal); 
		} 
	} 
	public int getNumPatas() { 
		int result = 0; 
		for (Animal a : animais) { 
			result += a.getNumPatas();
		} 
		return result; 
	} 

	public boolean animalEstaNestaTribo(Animal animal){ 
		boolean achou=false; 
		Iterator<Animal> it = animais.iterator(); 
		while ((it.hasNext()) && (!achou)){ 
			if (it.next().equals(this)){ 
				achou = true; 
			} 
		} 
		return achou; 
	} 


	public ArrayList<Animal> getAnimais() { 
		return animais; 
	} 
	public void setAnimais(ArrayList<Animal> 
	animais) { 
		this.animais = animais; 
	} 
	public void removeAnimal(Animal animal, Cacique cacique) { 
		if (cacique.equals(this.cacique)){
			this.animais.remove(animal); 
		}
	} 
	public void addIndio(Indio indio) { 
		this.indios.add(indio); 
	} 
	public ArrayList<Indio> getIndios() { 
		return indios; 
	} 
	public void setCacique(Cacique cacique) { 
		this.cacique = cacique; 
	} 
	public Cacique getCacique() { 
		return this.cacique; 
	} 
}
