/*
a) Pergunte ao usuário seu nome e seu e-mail.

b) Trate a string com o e-mail para que ela fique toda em letras minúsculas.

c) Imprima no console a seguinte mensagem: o e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!
*/

let nome = prompt("digite seu nome")
let email = prompt("digite seu email")

let emailLower = email.toLowerCase()

console.log(`O e-mail ${emailLower} foi cadastrado com sucesso. Seja bem-vindo(a), ${nome})`)