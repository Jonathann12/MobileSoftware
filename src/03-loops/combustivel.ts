import promptSync from "prompt-sync";
const prompt = promptSync();

let alcool = 0, gasolina = 0, diesel = 0;

while (true) {
  const codigo: number = Number(prompt("Informe um codigo (1.Alcool, 2.Gasolina, 3.Diesel, 4.Fim): "));

  if (codigo === 4) break;

  if (codigo === 1) alcool++;
  else if (codigo === 2) gasolina++;
  else if (codigo === 3) diesel++;
}

console.log("MUITO OBRIGADO");
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);
