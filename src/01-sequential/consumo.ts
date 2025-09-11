import promptSync from "prompt-sync";
const prompt = promptSync();

const distancia: number = Number(prompt("Distancia percorrida: "));
const combustivel: number = Number(prompt("Combustível gasto: "));

const consumo = distancia / combustivel;

console.log(`Consumo medio = ${consumo.toFixed(3)}`);
