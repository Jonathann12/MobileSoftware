import promptSync from "prompt-sync";
const prompt = promptSync();

const escala: string = prompt("Voce vai digitar a temperatura em qual escala (C/F)? ").toUpperCase();

if (escala === "F") {
  const f: number = Number(prompt("Digite a temperatura em Fahrenheit: "));
  const c = (f - 32) * 5 / 9;
  console.log(`Temperatura equivalente em Celsius: ${c.toFixed(2)}`);
} else if (escala === "C") {
  const c: number = Number(prompt("Digite a temperatura em Celsius: "));
  const f = (c * 9 / 5) + 32;
  console.log(`Temperatura equivalente em Fahrenheit: ${f.toFixed(2)}`);
} else {
  console.log("Escala invalida!");
}
