import promptSync from 'prompt-sync';
const prompt = promptSync();

const valores: number[] = [];
let soma = 0;
let media = 0;

const qtd_num = Number("Quantos numeros voce vai digitar? ");

for (let i = 0; i < qtd_num; i++) {
    const n = Number(prompt("Digite um numero"));
    soma +=n;
    valores.push(n);
}

media = soma / qtd_num;


console.log("Digite um numero: ");

console.log("VALORES = ");
