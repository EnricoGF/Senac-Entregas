/*
4. Faça um programa que pergunte ao usuário dois números.
Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas por true/false:

a) O primeiro numero é maior que segundo? true/false

b) O primeiro numero é igual ao segundo? true/false

c) O primeiro numero é divisível pelo segundo? true/false

d) O segundo numero é divisível pelo primeiro? true/false

Dica: O true/false vai depender dos números inseridos e do resultado das operações.
*/
let numero1 = Number(prompt("Insira um número"))
let numero2 = Number(prompt("Insira outro número"))

let maior = numero1 > numero2
let igual = numero1 == numero2
let resto1 = numero1 % numero2
let resto2 = numero2 % numero1

let divisivel1 = resto1 === 0
let divisivel2 = resto2 === 0

console.log("O primeiro numero é maior que segundo?\n", maior)
console.log("O primeiro numero é igual ao segundo?\n", igual)
console.log("O primeiro numero é divisível pelo segundo?\n", divisivel1)
console.log("O primeiro numero é dividível pelo segundo?\n", divisivel2)
