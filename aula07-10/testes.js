import { Aluno } from "./Aluno.js";

let aluno1 = new Aluno( "Ana", "Silva", "15/03/2005","(48) 99999-1111", "ana@email.com", "Rua das Flores, 100","123.456.789-01", "2026001", "Programador de Sistemas de Informação", 95,  "ENGIE");
let aluno2 = new Aluno("Lucas", "Santos", "22/07/2004", "(48) 98888-2222", "lucas@email.com", "Rua Brasil, 250", "234.567.890-12", "2026002", "Programador de Sistemas de Informação", 90, "GIASSI Supermercados");

let aluno3 = new Aluno("Mariana", "Oliveira", "10/11/2005", "(48) 97777-3333", "mariana@email.com", "Avenida Central, 300", "345.678.901-23", "2026003", "Programador de Sistemas de Informação", 98, "Empresa Tech");

let aluno4 = new Aluno("Gabriel", "Costa", "05/01/2006", "(48) 96666-4444", "gabriel@email.com", "Rua das Palmeiras, 450", "456.789.012-34", "2026004", "Programador de Sistemas de Informação", 87, "Empresa Digital");

let aluno5 = new Aluno("Julia", "Pereira", "30/09/2005", "(48) 95555-5555", "julia@email.com", "Rua do Sol, 500", "567.890.123-45", "2026005", "Programador de Sistemas de Informação", 93, "Empresa Sistemas");

console.log(aluno1.empresa);
console.log(aluno2.getNomeCompleto());
