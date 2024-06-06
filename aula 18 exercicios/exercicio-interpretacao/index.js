const total = Number(prompt("Digite a quantidade de linhas"))
let atual = 0

while (atual < total) {
    const blocos = atual + 1
    const espacos = total - blocos

	let linha = ""

    //checa se contador é menor que espaços, enquanto contador for menor que espacos, acrescenta espacos na linha
    for (let i = 0; i < espacos; i++) {
        linha += " "
    }

    //checa se contador é menor que blocos, enquanto contador for menor que blocos, acrescenta blocos na linha
    for (let i = 0; i < blocos; i++) {
        linha += "#"
    }

	console.log(linha)

	atual++
}

////////////////////////////////////////////////////////////////INCOMPLETO


/*
const total = Number(prompt("Digite a quantidade de linhas"))
let atual = 0

while (atual < total) {
    const blocos = atual + 1
    const espacos = total - blocos

    let linha = ""

    //Checar se atual é maior que espaços e menor que blocos, enquanto for menor que espaco
    for (espacos>atual>blocos) {
        linha += " "
        atual++
    }

    console.log (linha)

    atual++
}
*/