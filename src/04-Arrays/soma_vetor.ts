import promptSync from 'prompt-sync';
const prompt = promptSync();

const valores: number[] = [];
let soma = 0;
let media = 0;

const qtd_num = Number(prompt("Quantos numeros voce vai digitar? "));

for (let i = 0; i < qtd_num; i++) {
    const n = Number(prompt("Digite um numero: "));
    soma+=n;
    valores.push(n);
}

console.log("VALORES = " + valores.join(" "));

media = soma / qtd_num;

console.log("SOMA = " + soma.toFixed(2));
console.log("MEDIA = " + media.toFixed(2));
