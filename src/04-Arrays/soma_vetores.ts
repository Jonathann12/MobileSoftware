import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos valores vai ter cada vetor? "));

const A: number[] = [];
const B: number[] = [];
const C: number[] = [];

console.log("Digite os valores do vetor A:");
for (let i = 0; i < n; i++) {
  A.push(Number(prompt(`A[${i}]: `)));
}

console.log("Digite os valores do vetor B:");
for (let i = 0; i < n; i++) {
  B.push(Number(prompt(`B[${i}]: `)));
  C.push(A[i]! + B[i]!);
}

console.log("VETOR RESULTANTE:");
for (const valor of C) {
  console.log(valor);
}
