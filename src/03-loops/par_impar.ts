import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos numeros voce vai digitar? "));

for (let i = 0; i < n; i++) {
  const valor: number = Number(prompt("Digite um numero: "));

  if (valor === 0) console.log("NULO");
  else {
    const tipo = valor % 2 === 0 ? "PAR" : "IMPAR";
    const sinal = valor > 0 ? "POSITIVO" : "NEGATIVO";
    console.log(`${tipo} ${sinal}`);
  }
}
