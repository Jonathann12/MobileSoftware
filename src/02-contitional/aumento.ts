import promptSync from "prompt-sync";
const prompt = promptSync();

const salario: number = Number(prompt("Digite o salario da pessoa: "));

let percentual = 0;

if (salario <= 1000) {
  percentual = 20;
} else if (salario <= 3000) {
  percentual = 15;
} else if (salario <= 8000) {
  percentual = 10;
} else {
  percentual = 5;
}

const aumento = salario * percentual / 100;
const novoSalario = salario + aumento;

console.log(`Novo salario = R$ ${novoSalario.toFixed(2)}`);
console.log(`Aumento = R$ ${aumento.toFixed(2)}`);
console.log(`Porcentagem = ${percentual} %`);
