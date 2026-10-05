import { Pokemon } from "./Pokemon.js";

let p1 = new Pokemon("Pikachu", "elétrico", "extrema", 0.4, 6, "rato");
let p2 = new Pokemon ("Jigglypuff", "balão", "baixa", 0.5, 5.5, "fada");
let p3 = new Pokemon ("Bulbasaur", "semente", "forte", 0.7, 6.9, "planta venenosa");


// console.log(p2.nome, p2.categoria);
// console.log(`${p1.nome} ${p1.lutar("Está lutando")}`);

p1.aumentarAltura();
console.log(p1.nome, p1.altura);
console.log(p1.falar("Pika Pika!"));
console.log(p2.falar("Jigglypuff!"));
console.log(p3.falar("Bulba Bulba!"));