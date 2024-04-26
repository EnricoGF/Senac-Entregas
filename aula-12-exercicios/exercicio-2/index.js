/*
a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e 
imprima no console o resultado.

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não.

d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.
*/

function soma (n1, n2)
{
    let resultado = n1 + n2
    return resultado
}

function maiorIgual (n1, n2)
{
    let resultado = n1 >= n2
    return resultado
}

function par (numeroPar)
{
    let resto = numeroPar % 2
    let testaPar = resto === 0
    return testaPar
}

function mensagem (frase)
{
    let tamanhoFrase = frase.length
    let caixaAlta = frase.toUpperCase()
    console.log("Tamanho da frase:", tamanhoFrase, "\nFrase em letras maiúsculas:", caixaAlta)
}

console.log("Resultado soma:", soma(22, 78),)
console.log("Resultado maior ou igual:", maiorIgual(75, 49))
console.log("Resultado par ou não", par(738))
mensagem("Eu GoStO de SORVETE de Choco-MENTA")
