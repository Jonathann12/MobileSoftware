import promptSync from 'prompt-sync';
const prompt = promptSync();

const par: Number[] = [];

let qtd = 0;

const num = Number(prompt("Quantos numeros voce vai digitar? "));

for(let i = 0; i < num; i++){

    const n = Number(prompt("Digite um numero: "));

    if(n % 2 === 0){
        par.push(n);
       qtd ++;
    }
}

console.log("Numeros pares: " + par.join("\n"));
console.log("Quantidade de pares: " + qtd);