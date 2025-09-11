import promptSync from "prompt-sync";
const prompt = promptSync();

const glicose: number = Number(prompt("Digite a medida da glicose: "));

if (glicose <= 100) {
  console.log("Classificacao: normal");
} else if (glicose <= 140) {
  console.log("Classificacao: elevado");
} else {
  console.log("Classificacao: diabetes");
}
