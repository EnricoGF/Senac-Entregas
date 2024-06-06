/*
Pergunte ao usuário quantos bichos de estimação ele tem e guarde esse dado em uma variável.

Se a quantidade for 0, imprima no console Que pena! Você pode adotar um pet!.

Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.

Dica: coloque um prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu.
Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

Por fim, imprima no console o array completo, com os nomes dos bichos.
*/

let bichosUser = Number(prompt(`Quantos animais de estimação você tem?`))


if(bichosUser <= 0){
    console.log(`Que pena! Você pode adotar um pet!`)
}
else if(bichosUser > 0){
    let arrayNomes = [ ]
    let cont = 0

    while(bichosUser>cont){
        let nomeBicho = prompt(`Digite o nome dos seus animais de estimação um por um `)
        arrayNomes.push(nomeBicho)
        cont++
    }
    console.log(arrayNomes)
}
