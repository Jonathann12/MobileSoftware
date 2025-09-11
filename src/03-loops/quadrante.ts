import promptSync from "prompt-sync";
const prompt = promptSync();

while (true) {
  const x: number = Number(prompt("Digite o valor de X: "));
  const y: number = Number(prompt("Digite o valor de Y: "));

  if (x === 0 || y === 0) break;

  if (x > 0 && y > 0) console.log("QUADRANTE Q1");
  else if (x < 0 && y > 0) console.log("QUADRANTE Q2");
  else if (x < 0 && y < 0) console.log("QUADRANTE Q3");
  else console.log("QUADRANTE Q4");
}
