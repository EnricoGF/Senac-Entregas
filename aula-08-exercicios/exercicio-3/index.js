/*
a) Pergunte ao usuário sua idade em anos.

b) Imprima no console a idade do usuário em meses.

c) Imprima no console a idade do usuário em dias.

d) Imprima no console a idade do usuário em horas.
*/
let anos = Number(prompt("Qual sua idade em anos?"))

let meses = anos * 12
let dias = anos * 365
let horas = dias * 24

console.log("Sua idade em anos:", anos)
console.log("Sua idade em meses:", meses)
console.log("Sua idade em dias:", dias)
console.log("Sua idade em hora:", horas)