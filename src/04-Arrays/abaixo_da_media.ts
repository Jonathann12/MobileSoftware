import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos elementos vai ter o vetor? "));
const numeros: number[] = [];

let soma = 0;

for (let i = 0; i < n; i++) {
  const valor = Number(prompt("Digite um numero: "));
  numeros.push(valor);
  soma += valor;
}

const media = soma / n;

console.log(`MEDIA DO VETOR = ${media.toFixed(3)}`);
console.log("ELEMENTOS ABAIXO DA MEDIA:");
for (const num of numeros) {
  if (num < media) console.log(num.toFixed(1));
}
