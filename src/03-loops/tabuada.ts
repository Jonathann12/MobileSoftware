import PromptSync from "prompt-sync";
const prompt = PromptSync();

const n = Number(prompt("Deseja a Tabuada para qual valor? "));
for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} = ${n * i}`);
}