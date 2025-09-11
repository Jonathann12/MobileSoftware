import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos casos de teste serao digitados? "));

let total = 0, coelhos = 0, ratos = 0, sapos = 0;

for (let i = 0; i < n; i++) {
  const qtd: number = Number(prompt("Quantidade de cobaias: "));
  const tipo: string = prompt("Tipo de cobaia (C, R, S): ").toUpperCase();

  total += qtd;
  if (tipo === "C") coelhos += qtd;
  else if (tipo === "R") ratos += qtd;
  else if (tipo === "S") sapos += qtd;
}

console.log("RELATORIO FINAL:");
console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${(coelhos * 100 / total).toFixed(2)}`);
console.log(`Percentual de ratos: ${(ratos * 100 / total).toFixed(2)}`);
console.log(`Percentual de sapos: ${(sapos * 100 / total).toFixed(2)}`);
