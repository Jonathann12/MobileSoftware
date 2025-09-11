import promptSync from "prompt-sync";
const prompt = promptSync();

const preco: number = Number(prompt("Preço unitário do produto: "));
const qtd: number = Number(prompt("Quantidade comprada: "));
const dinheiro: number = Number(prompt("Dinheiro recebido: "));

const total = preco * qtd;

if (dinheiro >= total) {
  console.log(`TROCO = ${(dinheiro - total).toFixed(2)}`);
} else {
  console.log(`DINHEIRO INSUFICIENTE. FALTAM ${(total - dinheiro).toFixed(2)} REAIS`);
}
