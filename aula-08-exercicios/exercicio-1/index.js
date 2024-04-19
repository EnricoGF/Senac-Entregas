/*
a) Pergunte a idade do usuário.

b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga.

c) Imprima no console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (true/false).

d) Imprima no console a diferença de idade (não tem problema se sair um número negativo).

Dica: não se esqueça de converter as respostas para o tipo número
*/

let idade = Number(prompt("Qual a sua idade?"))
let amiga = Number(prompt("Qual a idade da sua melhor amiga"))

let maior = idade > amiga
let diferença = idade - amiga

console.log("Sua idade é maior que a do seu melhor amigo?\n", maior)
console.log("Essa é a diferença das suas idades:\n", diferença)