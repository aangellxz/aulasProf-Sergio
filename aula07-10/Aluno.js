import { Pessoa } from "./Pessoa.js";

export class Aluno extends Pessoa {
    constructor(nome, sobrenome, dataNascimento, telefone, email, endereco, cpf, matricula, curso, frequencia, empresa){

        super(nome, sobrenome, dataNascimento, telefone, email, endereco, cpf);

        this.matricula = matricula;
        this.curso = curso;
        this.frequencia = frequencia;
        this.empresa = empresa;
    };

    getEstudar(){
        return `${this.nome} está estudando Javascript`
    };

    getInfo(){
        return `O aluno(a) ${super.getNomeCompleto()} está matriculado no curso: ${this.curso}.`
    }
};