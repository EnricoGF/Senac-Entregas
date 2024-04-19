/*
a) Peça ao usuário que insira um número par.

b) Imprima no console o resto da divisão desse número por 2.

c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código.

Dica: não se esqueça de converter as respostas para o tipo número.
*/

let par = Number(prompt("Insira um número par"))
let resto = par % 2

console.log("O resto da divisão desse número por 2 é:", resto) //se for par o resto sempre será 0, se for ímpar o resto sempre será 1
