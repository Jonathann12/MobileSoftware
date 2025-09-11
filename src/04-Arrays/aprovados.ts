import promptSync from "prompt-sync";
const prompt = promptSync();

const n: number = Number(prompt("Quantos alunos serão digitados? "));

if (n <= 0) {
  console.log("Número de alunos inválido.");
} else {
  const nomes: string[] = [];
  const notas1: number[] = [];
  const notas2: number[] = [];

  for (let i = 0; i < n; i++) {
    console.log(`Digite nome, primeira e segunda nota do ${i + 1}º aluno:`);
    nomes.push(prompt("Nome: "));
    notas1.push(Number(prompt("Nota 1: ")));
    notas2.push(Number(prompt("Nota 2: ")));
  }

  console.log("Alunos aprovados:");
  for (let i = 0; i < n; i++) {
    const nota1 = notas1[i]!;
    const nota2 = notas2[i]!;

    const media = (nota1 + nota2) / 2;
    if (media >= 6.0) {
      console.log(nomes[i]!);
    }
  }
}
