import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos numeros voce vai digitar? "));
const numeros: number[] = [];

for (let i = 0; i < n; i++) {
  numeros.push(Number(prompt("Digite um numero: ")));
}

let maior: number = numeros[0]!;
let posicao: number = 0;

for (let i = 1; i < n; i++) {
  if (numeros[i]! > maior) {
    maior = numeros[i]!;
    posicao = i;
  }
}

console.log(`MAIOR VALOR = ${maior}`);
console.log(`POSICAO DO MAIOR VALOR = ${posicao}`);
