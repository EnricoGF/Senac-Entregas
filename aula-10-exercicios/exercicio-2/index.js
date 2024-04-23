/*
a) Contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.

b) Imprima no console o array completo.

c) Imprima no console a mensagem "Essas são as minhas comidas preferidas:" seguida por cada uma das comidas, uma embaixo da outra.

Desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela resposta do usuário e imprima no console a nova lista.
*/

let comida = [ "strogonoff", "lasanha", "nhoque", "frango", "batata" ]

console.log(comida)

console.log("Essas são minhas comidas preferidas:\n1:", comida[0],"\n2:", comida[1],"\n3:", comida[2],"\n4:", comida[3],"\n5:", comida[4])

let user = prompt("Qual a sua comida preferida?")

comida[1] = user

console.log(comida)