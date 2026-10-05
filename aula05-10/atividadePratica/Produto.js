export class Produto{
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    exibirProduto(){
        return `Produto: ${this.nome} \nPreço: R$ ${this.preco.toFixed(2).replace(".", ",")} \nCategoria: ${this.categoria}`;
    }

    aplicarDesconto(percentual){
        this.preco = this.preco - (this.preco * percentual / 100);
    }

}