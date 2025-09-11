import promptSync from "prompt-sync";
const prompt = promptSync();

const a: number = Number(prompt("Digite o primeiro numero: "));
const b: number = Number(prompt("Digite o segundo numero: "));

if (a % b === 0 || b % a === 0) {
  console.log("Sao multiplos");
} else {
  console.log("Nao sao multiplos");
}
