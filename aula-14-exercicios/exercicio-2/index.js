/*
a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

b) Escreva uma função que receba um objeto de cada vez e retorne um array com as seguintes informações:

O valor de nome.
O numero de caracteres do valor nome.
O valor de idade.
O valor de profissão.
O numero de caracteres do valor profissão.
const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}

function minhaFuncao(pessoa) {
	let resultado = []
	// desenvolver sua logica
	return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
*/

const pessoa1 =
{
	nome: "Vitor", 
	idade: 52, 
	profissao: "Cantor"
}

const pessoa2 =
{
	nome: "Leo", 
	idade: 49, 
	profissao: "Cantor"
}

function array (obj)
{
    const lista = [obj.nome, obj.nome.length, obj.idade, obj.profissao, obj.profissao.length]
    return lista
}

console.log (array (pessoa1))
console.log (array (pessoa2))