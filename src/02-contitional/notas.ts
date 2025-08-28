import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n1 = Number("Digite a primeira nota:");
const n2 = Number("Digite a segunda nota:");


const notaFinal = n1 + n2;

console.log(`NOTA FINAL = ${notaFinal.toFixed(1)}`);

if (notaFinal < 60.0) {
  console.log("REPROVADO");
}