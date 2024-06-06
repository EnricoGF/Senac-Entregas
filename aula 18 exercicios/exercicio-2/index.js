/*
Considere que você tenha acesso a um array que é composto somente de números. Crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

Escreva uma função que imprime cada valor do array em uma linha.

Escreva uma função que imprime cada um dos valores do array divididos por 10.

Escreva uma função que cria um novo array contendo somente os números pares do array original e, depois, imprima esse novo array.

Escreva uma função que cria um novo array contendo strings no seguinte formato: O elemento do índice ${i} é: ${numero}. Depois, imprima esse novo array.

Escreva uma função que imprime no console o maior e o menor números contidos no array original.

const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]
*/

const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]

function printaString(array){
    let arrayString = ``
    for(let item of array){
        arrayString += item + `, `
    }
    return arrayString
}

function printaDivisao(array){
    let arrayDividida = [ ]
    for(let item of array){
        item = item / 10
        arrayDividida.push(` ${item}`)
    }
    return arrayDividida
}

function printaPares(array){
    let arrayPar = [ ]
    for(let item of array){
        if(item % 2 == 0){
            arrayPar.push(` ${item}`)
        }
    }
    return arrayPar
}

function printaIndVal(array){
    let arrayIndVal = [ ]
    for(let [index, valor] of array.entries()){
        let stringArray = ``
        stringArray += ` O elemento do índice ${index} é: ${valor}`
        arrayIndVal.push(stringArray)
    }
    return arrayIndVal
}

function printaMaiorMenor (array){
    let maiorNumero = array[ 0 ]
    let menorNumero = array[ 0 ]

    for(let item = 1; item < array.length; item++){
        if(array[item]>maiorNumero){
            maiorNumero = array[item]
        }
    }
    for(let item = 1; item < array.length; item++){
        if(array[item]<menorNumero){
            menorNumero = array[item]
        }
    }

    return `Maior: ${maiorNumero}; Menor: ${menorNumero}`
}

console.log(arrayOriginal)
console.log(`Array em string: ${printaString(arrayOriginal)}`)
console.log(`Array dividida por 10: ${printaDivisao(arrayOriginal)}`)
console.log(`Pares da array: ${printaPares(arrayOriginal)}`)
console.log(`Indice e valor dos itens da array: ${printaIndVal(arrayOriginal)}`)
console.log(`Maior e menor números da array: ${printaMaiorMenor(arrayOriginal)}`)
