let login = prompt ("informe seu nome: ")
let senha = prompt ("informe sua senha: ")

if (login == "Admin" && senha == "senha123") {
    console.log ("Login bem sucedido!")
} else {
    console.log ("Você não tem permissão para esse acesso")
}
