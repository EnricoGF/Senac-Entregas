
//1. Indique todas as mensagens impressas no console, sem executar o programa.
let array //cria variavel indefinida
console.log('a. ', array) //a. undefined

array = null //variavel =  null
console.log('b. ', array) //b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //variavel array vira uma array com valores
console.log('c. ', array.length) //c. 11

let i = 0 //cria variavel i com valor 0
console.log('d. ', array[i]) //d. 3

array[i+1] = 19 //muda o valor 4 para 19 na array
console.log('e. ', array) // e. 3, 19, 5, 6, 7, 8, 9, 10, 11

const valor = array[i+6] //cria variavel valor = 9
console.log('f. ', valor) //f. 9

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//2. Leia o código abaixo com atenção.
const frase = prompt("Digite uma frase") // cria variavel frase com valor a ser definido pelo usuário

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //transfora a frase inteira para caixa alta, troca as letras A contidas na frase 
//pela letra I, printa a frase e diz o tamanho dela


//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//SUBI NUM ÔNIBUS EM MIRROCOS
//27
