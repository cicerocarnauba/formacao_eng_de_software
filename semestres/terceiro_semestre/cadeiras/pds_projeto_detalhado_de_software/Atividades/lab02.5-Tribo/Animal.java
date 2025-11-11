import java.util.ArrayList;
import java.util.Iterator;

public class Animal {
	private String nome; 
	private String especie; 
	public Animal(String aEspecie, String aNome) 
	{ 
		especie = aEspecie; 
		nome = aNome; 
	} 
	public String getEspecie() { 
		return especie; 
	} 
	
	public int getNumPatas() { 
		int result = 0; 
		for (Animal a : animais) { 
			if (a.getEspecie().equals("Pato")) { 
				result += 2; 
			} else if (a.getEspecie().equals("Cachorro")) { 
				result += 4; 
			} else { 
				// ? 
			} 
		} 
		return result; 
	} 
	
	public boolean equals(Object obj){ 
		Animal a = (Animal) obj; 
		if  
		((this.nome.equalsIgnoreCase(a.nome)) && 
				(this
						.especie.equalsIgnoreCase(a.especie))){ 
			return true; 
		} 
		return false; 
	} 
	public String getNome() { 
		return nome; 
	} 
	public void setNome(String nome) { 
		this.nome = nome; 
	} 
}
