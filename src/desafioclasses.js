//Desafio criando classes de um jogo

class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    atacar(){
        let ataque;
    
        if(this.tipo === "mago"){
            ataque = "magia";
        } else if(this.tipo === "guerreiro"){
            ataque = "espada";
        } else if(this.tipo === "monge"){
            ataque = "artes marciais";
        } else{
            ataque = "ataque desconhecido";
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new heroi("Léo", 30, "mago");
const heroi2 = new heroi("Thiago", 25, "guerreiro");
const heroi3 = new heroi("Buda", 40, "monge");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();