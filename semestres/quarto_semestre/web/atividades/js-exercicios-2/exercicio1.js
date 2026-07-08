class Animal{
    constructor(nome, tutor){
        this.nome = nome;
        this.tutor = tutor;

    }
    emitirSom() {
        console.log("O animal emite um som.");
    }
    comer() {
        console.log(this.nome + " está comendo.");
    }

    getNome() {
        return this.nome;
    }
    
    getTutor() {
        return this.tutor;
    }

    setNome(nome) {
        this.nome = nome;
    }
    
    setTutor(tutor) {
        this.tutor = tutor;
    }
}

class Cachorro extends Animal{
    constructor(nome, tutor){
        super(nome, tutor);
    }

    emitirSom() {
        console.log("Au au");
    }

}

class Gato extends Animal{
    constructor(nome, tutor){
        super(nome, tutor);
    }
    
    emitirSom() {
        console.log("Miau");
    }
}

class Pato extends Animal{
    constructor(nome, tutor){
        super(nome, tutor);
    }

    emitirSom() {
        console.log("Quack");
    }
}



const gato = new Gato("Nina", "Higor");
const cachorro = new Cachorro("Dino", "Higor");
const pato = new Pato("Donald", "Higor");

gato.emitirSom();
gato.comer();
console.log("------------")
cachorro.emitirSom();
cachorro.comer();
console.log("------------")
pato.emitirSom();
pato.comer();
console.log("------------")