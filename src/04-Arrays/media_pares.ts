import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos elementos vai ter o vetor? "));
const numeros: number[] = [];

let somaPares = 0;
let qtdPares = 0;

for (let i = 0; i < n; i++) {
  const valor = Number(prompt("Digite um numero: "));
  numeros.push(valor);
  if (valor % 2 === 0) {
    somaPares += valor;
    qtdPares++;
  }
}

if (qtdPares === 0) {
  console.log("NENHUM NUMERO PAR");
} else {
  const media = somaPares / qtdPares;
  console.log(`MEDIA DOS PARES = ${media.toFixed(1)}`);
}
