import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Serão digitados dados de quantos produtos? "));

if (n <= 0) {
  console.log("Número de produtos inválido.");
} else {
  const nomes: string[] = [];
  const compra: number[] = [];
  const venda: number[] = [];

  let abaixo10 = 0, entre10e20 = 0, acima20 = 0;
  let totalCompra = 0, totalVenda = 0;

  for (let i = 0; i < n; i++) {
    console.log(`Produto ${i + 1}:`);
    nomes.push(prompt("Nome: "));
    compra.push(Number(prompt("Preço de compra: ")));
    venda.push(Number(prompt("Preço de venda: ")));

    const precoCompra = compra[i]!;
    const precoVenda = venda[i]!;

    const lucro = ((precoVenda - precoCompra) / precoCompra) * 100;

    if (lucro < 10) abaixo10++;
    else if (lucro <= 20) entre10e20++;
    else acima20++;

    totalCompra += precoCompra;
    totalVenda += precoVenda;
  }

  const lucroTotal = totalVenda - totalCompra;

  console.log("RELATÓRIO:");
  console.log(`Lucro abaixo de 10%: ${abaixo10}`);
  console.log(`Lucro entre 10% e 20%: ${entre10e20}`);
  console.log(`Lucro acima de 20%: ${acima20}`);
  console.log(`Valor total de compra: ${totalCompra.toFixed(2)}`);
  console.log(`Valor total de venda: ${totalVenda.toFixed(2)}`);
  console.log(`Lucro total: ${lucroTotal.toFixed(2)}`);
}
