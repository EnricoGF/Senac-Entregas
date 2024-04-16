/*
1. Construa um programa, seguindo os seguintes passos:
a) Declare uma variável para armazenar um nome, sem atribuir um valor.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando typeof.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

Dica: Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá nome, você tem idade anos". Onde nome e idade são os valores que o usuário inseriu.

Dica: Para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe: console.log(valor1, valor2).
*/

//a e b: declarando variaveis
let nome
let idade

//c: tipos das variaveis
console.log("Tipo da variavel nome:", typeof nome)
console.log("Tipo da variavel idade:", typeof idade)//undefined pq não foi atribuido nenhum valor às variaveis

//e: perguntas ao usuario
nome = prompt("Qual o seu nome?")
idade = prompt("Qual sua idade?")

//f: tipos das variaveis com novos valores
console.log("Tipo da variavel nome após atribuir um valor:", typeof nome)
console.log("Tipo da variavel idade após atribuir um valor:", typeof idade)// string pq agora as variaveis tem valores inseridos por meio do prompt

//g: impressão na tela
console.log("Olá", nome, "você tem", idade, "anos.")
