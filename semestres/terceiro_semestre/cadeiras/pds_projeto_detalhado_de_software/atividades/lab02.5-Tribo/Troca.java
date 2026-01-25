
public class Troca {
	public static void troca(Tribo tribo1, Animal 
			animal1, Tribo tribo2, Animal animal2){ 
		tribo1.removeAnimal(animal1); 
		tribo1.adicionaAnimal(animal2); 
		tribo2.removeAnimal(animal2); 
		tribo2.adicionaAnimal(animal1); 
	} 
}
