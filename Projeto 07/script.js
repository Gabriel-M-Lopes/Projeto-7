const pacientes = [
    { nome: "Gabriel", peso: 67.4, altura: 1.93 },
    { nome: "Maria", peso: 60, altura: 1.65 },
    { nome: "Carlos", peso: 85, altura: 1.80 },
    { nome: "Ana", peso: 68, altura: 1.70 }
];

function calcularIMC(peso, altura) {
    return (peso / (altura * altura)).toFixed(2);
}

for (let paciente of pacientes) {
    const imc = calcularIMC(paciente.peso, paciente.altura);
    alert(`Paciente ${paciente.nome} possui o IMC de: ${imc}`);
}