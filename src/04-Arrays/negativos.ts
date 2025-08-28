import promptSync from 'prompt-sync';
const prompt = promptSync();

const n = Number(prompt("Quantos numeros voce vai digitar? "));

const numeros: number[] = [];

for (let i = 0; i < n; i++){
    const valor = Number(prompt("Digite um numero: "));
    numeros.push(valor);
}

console.log("NUMEROS NEGATIVOS: ");

numeros.forEach(num => {
    if(num < 0){
        console.log(num);
    }
});