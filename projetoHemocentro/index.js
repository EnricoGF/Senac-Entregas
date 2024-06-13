// Definições básicas
let continuar = true
const dados = []
let index = 0
let cabecalho = {
	index: "#",
	nome: "Nome e sobrenome",
	idade: "Idade",
	peso: "Peso",
	sangue: "Tipo",
	doacao: "Última doação"
}

//Função para formatar o retorno no console
function formatar(objeto){
	let string = ""
		string += objeto.index + " | "
		string += objeto.nome.padEnd(25, " ") + " | "
		string += objeto.idade.toString().padEnd(5, " ") + " | "
		string += objeto.peso.toString().padEnd(4, " ") + " | "
		string += objeto.sangue.padEnd(4, " ") + " | "
		string += objeto.doacao

	return string
}

// Função para cadastro de usuário
function cadastrar() {
	let nomeUser = prompt("Qual o seu nome?").toUpperCase()
	let idadeUser = Number(prompt("Qual a sua idade?"))
	let pesoUser = Number(prompt("Qual o seu peso? Em kg"))
	let sangueUser = prompt("Qual o seu tipo sanguíneo?").toUpperCase().trim()
	let doacaoUser = prompt("Quando foi sua última doação de sangue? DD/MM/AAAA").trim()
	index++

	let objeto = {
		index: index,
		nome: nomeUser,
		idade: idadeUser,
		peso: pesoUser,
		sangue: sangueUser,
		doacao: doacaoUser
	}

	//Inserindo dados cadastrados pelo usuário na array "dados"
	dados.push(objeto)

	console.log("----Dados cadastrados com sucesso----")
	console.log(`${objeto.index} | Nome: ${objeto.nome} | Idade: ${objeto.idade} | Peso: ${objeto.peso} | Tipo sanguíneo: ${objeto.sangue} | Última doação: ${objeto.doacao}`)
}

// Função para listar dados
function listar() {
	console.log("----Função listar doadores----")

	if (index !== 0) {
		console.log(formatar(cabecalho))

		for (let dado of dados) {
			console.log(formatar(dado))
		}
	}

	if(index == 0){
		console.log("Nenhum doador foi cadastrado ainda.")
	}
}

// Função para buscar tipo sanguineo
function buscarTipo() {
	let tipoInserido = prompt("Por que tipo sanguíneo gostaria de procurar?").toUpperCase()
	let aux = 0

	console.log(`----Função busca por tipo sanguíneo----\nBuscas para ${tipoInserido}\nResultados:`)

	for (let dado of dados) {
		if (dado.sangue == tipoInserido) {
			aux++

			if (aux == 1) {
				console.log(formatar(cabecalho))
			}

			console.log(formatar(dado))
		}
	}
	
	if (aux == 0) {
		console.log("Não achamos nenhum doador com esse tipo sanguíneo.")
	}
}

// Função para buscar
function buscarData() {
	let dataInserida = Number(prompt("Por que ano gostaria de procurar?"))
	let aux = 0

	console.log(`----Função busca por data----\nBuscas para ${dataInserida}\nResultados:`)

	for (let dado of dados) {
		if (dado.doacao.includes(dataInserida)) {
			aux++

			if (aux == 1) {
				console.log(formatar(cabecalho))
			}

			console.log(formatar(dado))
		}
	}

	if (aux == 0) {
		console.log("Não achamos nenhum doador nesta data.")
	}
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

//Função de resposta inválida
function invalido() {
	console.log("Opção inválida, tente novamente.")
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "4. Buscar doador por data da última doação\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscarTipo()
			break
		case 4:
			buscarData()
			break
		case 0:
			sair()
			break
		default:
			invalido()
	}
}
