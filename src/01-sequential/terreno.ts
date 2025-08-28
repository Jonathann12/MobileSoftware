import promtSync from 'prompt-sync';

const prompt = promtSync();

const largura = Number(prompt("Digite a largura do terreno:"));
const comprimento = Number(prompt("Digite o comprimento do terreno:"));
const valor = Number(prompt("Digite o valor do metro quadrado:"));

const area = largura * comprimento;
const preco = area * valor;

console.log(`Area do terreno = ${area.toFixed(2)}`);
console.log(`Preco do terreno = ${preco.toFixed(2)}`);