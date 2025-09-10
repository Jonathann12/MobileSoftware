import promptSync from "prompt-sync";
const prompt = promptSync();

const precoUnit: number = Number(prompt("Preço unitário do produto: "));
const quantidade: number = Number(prompt("Quantidade comprada: "));
const dinheiro: number = Number(prompt("Dinheiro recebido: "));

const troco = dinheiro - (precoUnit * quantidade);

console.log(`TROCO = ${troco.toFixed(2)}`);
