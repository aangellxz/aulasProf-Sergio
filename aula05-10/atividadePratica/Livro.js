const resumos = {
    "Dom Casmurro": "Bentinho relembra sua vida e seu amor por Capitu. Ele suspeita que ela o traiu com Escobar, seu melhor amigo, e a dúvida destrói o casamento.",
    "O Hobbit": "O hobbit Bilbo Bolseiro é levado pelo mago Gandalf e por treze anões a uma jornada para recuperar um tesouro guardado pelo dragão Smaug.",
    "1984": "Winston Smith vive em um Estado totalitário vigiado pelo Grande Irmão e tenta resistir ao controle absoluto sobre o pensamento e a verdade.",
    "O Pequeno Príncipe": "Um piloto perdido no deserto conhece um pequeno príncipe de outro planeta, que fala sobre amizade, amor e o que é essencial.",
    "Capitães da Areia": "Meninos abandonados vivem em um trapiche em Salvador e sobrevivem de pequenos furtos, liderados por Pedro Bala."
};

export class Livro{
    constructor(titulo, autor, ano, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.ano = ano;
        this.genero = genero;
    }

    

    exibirInformacoes(){
        return `Título: ${this.titulo}, \nAutor: ${this.autor}, \nAno: ${this.ano}, \nGênero: ${this.genero}`;
    }

  resumo(){
        return resumos[this.titulo] ?? "Resumo não cadastrado.";
    }

}