import PromptSync from "prompt-sync";
const prompt = PromptSync();

const largura = Number(prompt("Base do retângulo: "));
const altura = Number(prompt("Altura do retângulo: "));

const area = largura * altura;
const perimetro = 2 * (largura + altura);
const diagonal = 
Math.sqrt(largura ** 2 + altura ** 2);
console.log(`Área: ${area.toFixed(4)}`);
console.log(`Perímetro: ${perimetro.toFixed(4)}`);
console.log(`Diagonal: ${diagonal.toFixed(4)}`);