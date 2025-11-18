// let numero01 = Number.parseFloat(prompt("Digite o primeiro numero"))

// let numero02 = Number.parseFloat(prompt("Digite o segundo numero"))

// let numero03 = Number.parseFloat(prompt("Digite o terceiro numero"))

// let numero04 = Number.parseFloat(prompt("Digite o quarto numero"))

// let numero05 = Number.parseFloat(prompt("Digite o quinto numero"))

// let numero06 = Number.parseFloat(prompt("Digite o sexto numero"))

// let numero07 = Number.parseFloat(prompt("Digite o sétimo numero"))

// let resultado = numero01 == ("Segunda-feira")

let dia_semana = prompt("Informe um número de 1 a 7: ")

switch (dia_semana) {
    case "1":
        console.log("Segunda-Feira")
        break;

    case "2":
        console.log("Terça-Feira")
        break;

    case "3":
        console.log("Quarta-feira")
        break;

    case "4":
        console.log("Quinta-Feira")
        break;

    case "5":
        console.log("Sexta-feira")
        break;

    case "6":
        console.log("Sabado")
        break;

    case "7":
        console.log("Domingo")
        break;

    default:
        console.log("Este dia esta errado")
        break;
}