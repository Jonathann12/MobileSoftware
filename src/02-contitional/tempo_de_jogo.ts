import promptSync from "prompt-sync";
const prompt = promptSync();

const horaInicial: number = Number(prompt("Hora inicial: "));
const horaFinal: number = Number(prompt("Hora final: "));

let duracao: number;
if (horaInicial < horaFinal) {
  duracao = horaFinal - horaInicial;
} else {
  duracao = 24 - horaInicial + horaFinal;
}

console.log(`O JOGO DUROU ${duracao} HORA(S)`);
