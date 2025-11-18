let nota1 = Number.parseFloat(prompt("Digite sua primeira nota"))

let nota2 = Number.parseFloat(prompt("Digite sua segunda nota"))

let nota3 = Number.parseFloat(prompt("Digite sua terceira nota"))

let nota4 = Number.parseFloat(prompt("Digite sua quarta nota"))

let media = (nota1 + nota2 + nota3 + nota4)/4
console.log("A média do aluno é: " + media)

if (media>= 7) {
    console.log("Aprovado!!!")
}

else if (media < 7 && media >=5){
   console.log("Você está de recuperação!")
}

else{
    console.log("Você foi reprovado!")
}