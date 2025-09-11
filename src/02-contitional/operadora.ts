import promptSync from "prompt-sync";
const prompt = promptSync();

const minutos: number = Number(prompt("Digite a quantidade de minutos: "));

let valor = 50.0;
if (minutos > 100) {
  valor += (minutos - 100) * 2.0;
}

console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
