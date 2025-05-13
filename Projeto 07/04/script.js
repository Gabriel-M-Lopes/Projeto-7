const nome = prompt("Qual é o seu nome?");
let nota1 = parseFloat(prompt("Digite a nota da primeira prova:"));
let nota2 = parseFloat(prompt("Digite a nota da segunda prova:"));
let nota3 = parseFloat(prompt("Digite a nota da terceira prova:"));

let GPA = (nota1 + nota2 + nota3) / 3;

GPA = GPA.toFixed(2);

if (GPA >= 6) {
  alert("Parabéns " + nome + ", você foi aprovado! Media: " + GPA);
} else if (GPA < 3){
  alert("Você foi reprovado. Media: " + GPA)
}
else {
  alert("Você não foi aprovado, boa sorte na prova de recuperação! Media: " + GPA);
}