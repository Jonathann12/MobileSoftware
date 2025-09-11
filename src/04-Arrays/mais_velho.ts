import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantas pessoas você vai digitar? "));

if (n <= 0) {
  console.log("Número de pessoas inválido.");
} else {
  const nomes: string[] = [];
  const idades: number[] = [];

  for (let i = 0; i < n; i++) {
    console.log(`Dados da ${i + 1}ª pessoa:`);
    nomes.push(prompt("Nome: "));
    idades.push(Number(prompt("Idade: ")));
  }


  let maisVelho = idades[0]!;
  let indice = 0;

  for (let i = 1; i < n; i++) {
    if (idades[i]! > maisVelho) {
      maisVelho = idades[i]!;
      indice = i;
    }
  }

  console.log(`PESSOA MAIS VELHA: ${nomes[indice]}`);
}
