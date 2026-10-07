import { Pessoa } from "./Pessoa.js";

export class Funcionario extends Pessoa {

     constructor(nome, sobrenome, dataNascimento, telefone, email, endereco, cpf, cargo, empresa, salario){

         super(nome, sobrenome, dataNascimento, telefone, email, endereco, cpf);
         
         this.cargo = cargo;
         this.empresa = empresa;
         this.salario = salario;
     };
};