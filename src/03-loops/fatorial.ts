import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Digite o valor de N: "));

let fatorial = 1;
for (let i = 1; i <= n; i++) {
  fatorial *= i;
}

console.log(`FATORIAL = ${fatorial}`);
