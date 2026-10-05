import { Livro } from "./Livro.js";
import { Aluno } from "./Aluno.js";
import { Produto } from "./Produto.js";

let l1 = new Livro("Dom Casmurro", "Machado de Assis", 1899, "romance");
let l2 = new Livro("O Hobbit", "J.R.R. Tolkien", 1937, "fantasia");
let l3 = new Livro("1984", "George Orwell", 1949, "distopia");
let l4 = new Livro("O Pequeno Príncipe", "Antoine de Saint-Exupéry", 1943, "fábula");
let l5 = new Livro("Capitães da Areia", "Jorge Amado", 1937, "romance");

// console.log(l1);
// console.log(l2);
// console.log(l3);
// console.log(l4);
// console.log(l5);
// console.log(l3.exibirInformacoes());

// console.log(l1.resumo());
// console.log(l2.resumo());
// console.log(l3.resumo());


const aluno1 = new Aluno("Ana", 20, "Análise e Desenvolvimento de Sistemas");
const aluno2 = new Aluno("Carlos", 22, "Engenharia de Software");
const aluno3 = new Aluno("Beatriz", 19, "Ciência da Computação");

// console.log(aluno1.exibirDados());
// console.log(aluno2.exibirDados());
// console.log(aluno3.exibirDados());

const produto1 = new Produto("Teclado", 150, "Informática");
const produto2 = new Produto("Cadeira Gamer", 800, "Móveis");
const produto3 = new Produto("Fone de Ouvido", 200, "Eletrônicos");

// console.log(produto1.exibirProduto());
// console.log(produto2.exibirProduto());
// console.log(produto3.exibirProduto());

// produto1.aplicarDesconto(10);
// produto2.aplicarDesconto(25);
// produto3.aplicarDesconto(15);

// console.log(produto1.exibirProduto());
// console.log(produto2.exibirProduto());
// console.log(produto3.exibirProduto());
