import promptSync from "prompt-sync";
const prompt = promptSync();

const tabela = new Map<number, number>([
  [1, 5.0],
  [2, 3.5],
  [3, 4.8],
  [4, 8.9],
  [5, 7.32]
]);

const codigo = Number(prompt("Codigo do produto comprado: "));
const qtd = Number(prompt("Quantidade comprada: "));

const valorUnitario = tabela.get(codigo);
if (valorUnitario === undefined) {
  console.log("Código inválido");
} else {
  const valor = valorUnitario * qtd;
  console.log(`Valor a pagar: R$ ${valor.toFixed(2)}`);
}
