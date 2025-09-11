import promptSync from "prompt-sync";
const prompt = promptSync();

while (true) {
  const x: number = Number(prompt("Digite um numero inteiro (0 para parar): "));
  if (x === 0) break;

  let soma = 0;
  let inicio = x % 2 === 0 ? x : x + 1;

  for (let i = 0; i < 5; i++) {
    soma += inicio + (i * 2);
  }

  console.log(`SOMA = ${soma}`);
}
