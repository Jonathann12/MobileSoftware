import promptSync from "prompt-sync";
const prompt = promptSync();

let senha: number;

do {
  senha = Number(prompt("Digite a senha: "));
  if (senha !== 2002) {
    console.log("Senha Invalida! Tente novamente:");
  }
} while (senha !== 2002);

console.log("Acesso permitido!");
