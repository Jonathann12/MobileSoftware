import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos casos voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const num: number = Number(prompt("Entre com o numerador: "));
  const den: number = Number(prompt("Entre com o denominador: "));

  if (den === 0) {
    console.log("DIVISAO IMPOSSIVEL");
  } else {
    console.log(`DIVISAO = ${(num / den).toFixed(2)}`);
  }
}
