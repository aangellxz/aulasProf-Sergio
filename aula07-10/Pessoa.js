
export class Pessoa {
    constructor(nome, sobrenome, dataNascimento, telefone, email, endereco, cpf){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.dataNascimento = dataNascimento;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
        this.cpf = cpf;
    };

    getNomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    };

    getIdade(){
        hoje = new Date();
        return hoje.getFullYear() - this.dataNascimento;
    };
};
