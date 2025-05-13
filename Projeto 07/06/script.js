let result = prompt("Adivinhe o número que estou pensando? Esta entra 0 e 10.");
const randomNumber = Math.round(Math.random() * 10);

let attempts = 1;

while(Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente: ");
  attempts++;
}

alert(`Parabéns! Você adivinhou o número em ${attempts} tentativas.`)