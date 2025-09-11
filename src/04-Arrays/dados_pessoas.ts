import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantas pessoas serão digitadas? "));

if (n <= 0) {
  console.log("Número de pessoas inválido.");
} else {
  const alturas: number[] = [];
  const generos: string[] = [];

  for (let i = 0; i < n; i++) {
    alturas.push(Number(prompt(`Altura da ${i + 1}ª pessoa: `)));
    generos.push(prompt(`Gênero da ${i + 1}ª pessoa (M/F): `).toUpperCase());
  }

  const menor = alturas.length > 0 ? Math.min(...alturas) : 0;
  const maior = alturas.length > 0 ? Math.max(...alturas) : 0;

  let somaAlturaMulheres = 0;
  let qtdMulheres = 0;
  let qtdHomens = 0;

  for (let i = 0; i < n; i++) {
    const altura = alturas[i]!;
    const genero = generos[i]!;

    if (genero === "F") {
      somaAlturaMulheres += altura;
      qtdMulheres++;
    } else if (genero === "M") {
      qtdHomens++;
    }
  }

  console.log(`Menor altura = ${menor.toFixed(2)}`);
  console.log(`Maior altura = ${maior.toFixed(2)}`);

  if (qtdMulheres > 0) {
    console.log(`Média das alturas das mulheres = ${(somaAlturaMulheres / qtdMulheres).toFixed(2)}`);
  } else {
    console.log("Nenhuma mulher informada");
  }

  console.log(`Número de homens = ${qtdHomens}`);
}
