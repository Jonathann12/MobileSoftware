import promptSync from "prompt-sync";
const prompt = promptSync();

const a: number = Number(prompt("Coeficiente a: "));
const b: number = Number(prompt("Coeficiente b: "));
const c: number = Number(prompt("Coeficiente c: "));

const delta = b * b - 4 * a * c;

if (delta < 0 || a === 0) {
  console.log("Esta equacao nao possui raizes reais");
} else {
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(`X1 = ${x1.toFixed(4)}`);
  console.log(`X2 = ${x2.toFixed(4)}`);
}
