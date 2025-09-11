import promptSync from "prompt-sync";
const prompt = promptSync();

let soma = 0;
let cont = 0;

while (true) {
  const idade: number = Number(prompt("Digite uma idade: "));
  if (idade < 0) break;
  soma += idade;
  cont++;
}

if (cont === 0) {
  console.log("IMPOSSIVEL CALCULAR");
} else {
  const media = soma / cont;
  console.log(`MEDIA = ${media.toFixed(2)}`);
}
