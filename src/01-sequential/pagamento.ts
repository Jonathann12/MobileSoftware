import promptSync from "prompt-sync";
const prompt = promptSync();

const nome: string = prompt("Nome: ");
const valorHora: number = Number(prompt("Valor por hora: "));
const horas: number = Number(prompt("Horas trabalhadas: "));

const pagamento = valorHora * horas;

console.log(`O pagamento para ${nome} deve ser ${pagamento.toFixed(2)}`);
