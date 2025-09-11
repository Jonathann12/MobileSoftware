import promptSync from "prompt-sync";
const prompt = promptSync();

const v1: number = Number(prompt("Primeiro valor: "));
const v2: number = Number(prompt("Segundo valor: "));
const v3: number = Number(prompt("Terceiro valor: "));

const menor = Math.min(v1, v2, v3);

console.log(`MENOR = ${menor}`);
