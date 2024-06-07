const total = Number(prompt("Digite a quantidade de linhas"))
let atual = 0

while (atual < total) {
    const blocos = atual + 1
    const espacos = total - blocos

	let linha = ""

    //espaco = quantidade de espaços na camada / espacos = quantidade de espaços calculada
    for (let espaco = 0; espaco < espacos; espaco++) {
        linha += " "
    }

    //bloco = quantidade de blocos na camada / blocos = quantidade de blocos calculada
    for (let bloco = 0; bloco < blocos; bloco++) {
        linha += "#"
    }

	console.log(linha)

	atual++
}
