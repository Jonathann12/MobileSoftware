import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const v1: number = Number(prompt("Digite o primeiro numero: "));
  const v2: number = Number(prompt("Digite o segundo numero: "));
  const v3: number = Number(prompt("Digite o terceiro numero: "));

  const media = (v1 * 2 + v2 * 3 + v3 * 5) / 10;
  console.log(`MEDIA = ${media.toFixed(1)}`);
}
