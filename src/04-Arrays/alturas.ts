import promptSync from 'prompt-sync';
const prompt = promptSync();

const nome: String[] = [];
const idade: Number[] = [];
const altura: Number[] = [];
const nomeMenor: String[] = [];
 

let p = 0;
let qtd = 0;
let media = 0;
let menor = 0;
let porcent = 0;
const qtdPessoas = Number(prompt("Quantas pessoas serao digitadas?: "));

for (let i = 0; i < qtdPessoas; i++) {
    p++
    console.log("Dados da " + p +"º" + " pessoa: ");

    const n = String(prompt("Nome: "));
    const id = Number(prompt("Idade: "));
    const a = Number(prompt("Altura: "));

    nome.push(n);
    idade.push(id);
    altura.push(a);

    qtd +=a;

    if(id < 16){
        menor++;
        nomeMenor.push(n);
    }

}
    media = qtd / qtdPessoas;
    porcent = (menor / qtdPessoas) * 100;

    console.log("Altura média: " + media);
    console.log("Pessoas com menos de 16 anos: " + porcent);
    console.log(nomeMenor.join("\n"));