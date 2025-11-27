let opcaoEscolhida = 0;


do {
    opcaoEscolhida = parseInt(prompt(`
        ============MENU DE EXERCÍCIOS============

        Digite um número das opções:
        
        0 - Sair
        1 - Login
        2 - IMC
        3 - Par ou ímpar
        4 - Média do aluno
        5 - Número crescente, decrecente e aleatório

        ==========================================
        `));

    switch (opcaoEscolhida) {
        case 0:
            alert("Volte sempre");
            break;
        case 1:
            login();
            break;
        case 2:
            calculoIMC();
            break;
        case 3:
            verificarNumeroImparouPar();
            break;
        case 4:
            calculoMediaAluno();
            break;
        case 5:
            vericarSequenciaNumeros
            break;

        default:
            alert("Opção invalida! Escolha uma opção que exista no nosso sistema");
            break;
    }
}
while (opcaoEscolhida != 0);

function login() {
    alert("Login feito com sucesso!!!")
}

function calculoIMC() {

    let peso = parseFloat(prompt("informe seu peso (em KG): "))
    let altura = parseFloat(prompt("informe a sua altura (em metros): "))

    let imc = peso / (altura * altura)

    alert("Seu IMC é: " + imc)

    if (imc < 18.5) {
        alert("Abaixo do peso")
    }

    else if (imc >= 18.5 && imc <= 24.9) {
        alert("peso normal")
    }

    else if (imc >= 25 && imc <= 29.9) {
        alert("sobrepeso")
    }

    else if (imc >= 35 && imc <= 39.9) {
        alert("obesidade grau 2")
    }

    else {
        alert("obesidade grau 3")
    }
}

function verificarNumeroImparouPar() {

    let numero = parseInt(prompt("Informe o numero inteiro"))

    if (numero % 2 == 0) {
        alert("O numero é Par")
    } else {
        alert("O numero é Impar")
    }

}

function calculoMediaAluno() {

    let nota1 = Number.parseFloat(prompt("Digite sua primeira nota"))

    let nota2 = Number.parseFloat(prompt("Digite sua segunda nota"))

    let nota3 = Number.parseFloat(prompt("Digite sua terceira nota"))

    let nota4 = Number.parseFloat(prompt("Digite sua quarta nota"))

    let media = (nota1 + nota2 + nota3 + nota4) / 4
    alert("A média do aluno é: " + media)

    if (media >= 7) {
        alert("Aprovado!!!")
    }

    else if (media < 7 && media >= 5) {
       alert("Você está de recuperação!")
    }

    else {
        alert("Você foi reprovado!")
    }

}

function vericarSequenciaNumeros() {
    let numero01 = parseInt(prompt("digite o primeiro numero"))
    let numero02 = parseInt(prompt("digite o segundo numero"))
    let numero03 = parseInt(prompt("digite o terceiro numero"))

    if (numero01 < numero02 && numero02 < numero03) {
        alert("Os numeros estão em ordem crescente!")
    }

    else {
        alert("Os números não estão em ordem crescente!")
    }

}