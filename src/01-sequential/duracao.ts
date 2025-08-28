import PromptSync from "prompt-sync";
const prompt = PromptSync();

const duracaoSegudons = Number(prompt("Digite a duração em segundos: "));
const horas = Math.floor(duracaoSegudons / 3600);
const minutos = Math.floor((duracaoSegudons % 3600) / 60);
const segundos = duracaoSegudons % 60;  

console.log(`${horas}:${minutos}:${segundos}`);