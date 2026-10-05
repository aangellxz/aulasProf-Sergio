export class Pokemon{
    constructor(nome, categoria, ataque, altura, peso, especie){
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.altura = altura;
        this.peso = peso;
        this.especie = especie;
    }

    lutar(texto){
        return texto
    }

    defender(nome){
        return nome + " está se defendendo"
    }

    aumentarAltura(){
    return this.altura += 0.1;
    }

    falar(frase){
    return this.nome + " diz: " + frase;
    }
}