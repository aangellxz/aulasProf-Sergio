export class Aluno{
    constructor(nome, idade, curso){
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
    }

    exibirDados(){
        return `Nome: ${this.nome} \nIdade: ${this.idade} \nCurso: ${this.curso}`;
    }

}