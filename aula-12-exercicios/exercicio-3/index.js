/*
Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e
chame essas 4 funções com esses valores inseridos pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

Exemplo:

Números inseridos: 30 e 3
--
Soma: 33
Diferença: 27
Multiplicação: 90
Divisão: 10
*/

let n1 = Number(prompt("Insira o primeiro número"))
let n2 = Number(prompt("Insira o segundo número"))

function soma ()
{
    let resultado = n1 + n2
    return resultado
}

function subtracao ()
{
    let resultado = n1 - n2
    return resultado
}

function multiplicacao ()
{
    let resultado = n1 * n2
    return resultado
}

function divisao ()
{
    let resultado = n1 / n2
    return resultado
}

console.log("Soma:", soma(), "\nDiferença:", subtracao(), "\nMultiplicação:", multiplicacao(), "\nDivisão:", divisao())