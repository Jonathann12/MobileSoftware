import promptSync from "prompt-sync";
const prompt = promptSync();

function lerNota(mensagem: string): number {
  let nota: number;
  do {
    nota = Number(prompt(mensagem));
    if (nota < 0 || nota > 10) {
      console.log("Valor invalido! Tente novamente:");
    }
  } while (nota < 0 || nota > 10);
  return nota;
}

const nota1 = lerNota("Digite a primeira nota: ");
const nota2 = lerNota("Digite a segunda nota: ");

const media = (nota1 + nota2) / 2;
console.log(`MEDIA = ${media.toFixed(2)}`);
