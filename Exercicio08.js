let idade = parseInt(prompt("Digite sua idade: "))

while(idade <18){
    idade = parseInt(prompt("Voce é menor de idade, digite outra idade: "))
}

console.log("Voce é maior de idade. Sua idade é: " + idade)