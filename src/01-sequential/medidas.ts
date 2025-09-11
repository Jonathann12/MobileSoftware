import promptSync from "prompt-sync";
const prompt = promptSync();

const A: number = Number(prompt("Digite a medida A: "));
const B: number = Number(prompt("Digite a medida B: "));
const C: number = Number(prompt("Digite a medida C: "));

const areaQuadrado = A * A;
const areaTriangulo = (A * B) / 2;
const areaTrapezio = ((A + B) * C) / 2;

console.log(`AREA DO QUADRADO = ${areaQuadrado.toFixed(4)}`);
console.log(`AREA DO TRIANGULO = ${areaTriangulo.toFixed(4)}`);
console.log(`AREA DO TRAPEZIO = ${areaTrapezio.toFixed(4)}`);
