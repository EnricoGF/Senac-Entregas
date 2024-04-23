/*
a) Crie um array vazio e guarde-o em uma variável, chamada listaDeTarefas.

b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array.

c) Imprima o array no console.

d) Peça ao usuário que digite o índice de uma tarefa que ele já realizou: 0, 1 ou 2.

e) Remova da lista o item do índice que o usuário escolheu.

f) Imprima o array no console
*/

let listaDeTarefas = []

let tarefa0 = prompt("Informe uma tarefa que você precisa realizar no dia")
let tarefa1 = prompt("Informe outra tarefa que você precisa realizar no dia")
let tarefa2 = prompt("Informe outra tarefa que você precisa realizar no dia")

listaDeTarefas.push(tarefa0, tarefa1, tarefa2)

let done = Number(prompt("Digite o índice da tarefa que você já realizou: 0, 1 ou 2"))

listaDeTarefas.splice(done, 1)

console.log("Tarefas a serem realizadas:", listaDeTarefas)