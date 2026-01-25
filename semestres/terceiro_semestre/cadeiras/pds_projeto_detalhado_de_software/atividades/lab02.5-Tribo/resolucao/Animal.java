import java.util.ArrayList;
import java.util.Iterator;

public abstract class Animal {
	private String nome;
	protected int num_patas;
	protected String especie;

	public Animal(String aNome) 
	{  
		nome = aNome; 
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

	public int getNumPatas(){
		return this.num_patas;
	}
}
