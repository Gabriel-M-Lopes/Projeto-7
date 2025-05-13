let first = prompt("Digite o primeiro número:");
let second = prompt("Digite o segundo número:");

first = Number(first);
second = Number(second);

const sum = first + second;
const sub = first - second;
const mult = first * second;
const div = first / second;
const rest = first % second;

alert("Soma: " + sum);
alert("Subtração: " + sub);
alert("Multiplicação: " + mult);
alert("Divisão: " + div);
alert("Resto da divisão: " + rest);