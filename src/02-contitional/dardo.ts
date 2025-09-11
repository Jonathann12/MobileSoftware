import promptSync from "prompt-sync";
const prompt = promptSync();

const d1: number = Number(prompt("Digite a primeira distancia: "));
const d2: number = Number(prompt("Digite a segunda distancia: "));
const d3: number = Number(prompt("Digite a terceira distancia: "));

const maior = Math.max(d1, d2, d3);

console.log(`MAIOR DISTANCIA = ${maior}`);
