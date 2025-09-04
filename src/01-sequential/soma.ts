import PromptSync from "prompt-sync";
const prompt = PromptSync();


const x = Number(prompt("Digite o valor de X: "));
const y = Number(prompt("Digite o valor de Y: "));

let soma = x + y;

console.log("Soma = " + soma);
