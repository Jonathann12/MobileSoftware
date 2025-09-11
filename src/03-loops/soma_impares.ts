import promptSync from "prompt-sync";
const prompt = promptSync();

const x: number = Number(prompt("Digite o primeiro numero: "));
const y: number = Number(prompt("Digite o segundo numero: "));

let soma = 0;
const menor = Math.min(x, y);
const maior = Math.max(x, y);

for (let i = menor + 1; i < maior; i++) {
  if (i % 2 !== 0) soma += i;
}

console.log(`SOMA DOS IMPARES = ${soma}`);
