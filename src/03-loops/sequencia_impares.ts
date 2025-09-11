import promptSync from "prompt-sync";
const prompt = promptSync();

const x: number = Number(prompt("Digite o valor de X: "));

for (let i = 1; i <= x; i += 2) {
  console.log(i);
}
