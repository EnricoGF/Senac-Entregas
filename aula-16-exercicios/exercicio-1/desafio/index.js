//tabela de valores dos ingressos domesticos
const tabelaValores = {
    SF: [ 1320, 880, 550, 220 ],
    DT: [ 660, 440, 330, 170 ],
    FI: [ 1980, 1320, 880, 330 ]
}

//dados solicitados do usuario
const nomeUser = prompt(`Nome completo:`)
const tipoJogo = prompt(`Selecione o tipo de jogo entre IN para internacional e DO para doméstico`).toUpperCase()
const etapaJogo = prompt(`Selecione a etapa do jogo entre SF para Semi-final, DT para Decisão de Terceiro lugar e FI para Final`).toUpperCase()
const categoria = Number(prompt(`Selecione a categoria entre 1, 2, 3 ou 4`)) - 1
const ingressoUser = Number(prompt(`Selecione a quantidade de ingressos`))
let ingressoValor
let ingressoInfo
let valorTotalInfo

//definindo o valor do ingresso a partir do tipo do jogo
if(tipoJogo===`DO`){
     ingressoValor = tabelaValores[etapaJogo][categoria]
     ingressoInfo = `R$ ${ingressoValor}`
     let valorTotal = ingressoUser*ingressoValor
     valorTotalInfo = `R$ ${valorTotal}`//tranformando no formato final da tabela de informações
}
else if(tipoJogo===`IN`){
     ingressoValor = tabelaValores[etapaJogo][categoria]/5
     ingressoInfo = `U$ ${ingressoValor}`
     let valorTotal = ingressoUser*ingressoValor
     valorTotalInfo = `U$ ${valorTotal}`//tranformando no formato final da tabela de informações
}

//função para printar informações no console
function printInfo (){
    console.log(`---Dados da compra---\n
    Nome do cliente: ${nomeUser}\n
    Tipo do jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapaJogo}\n
    Categoria: ${categoria+1}\n
    Quantidade de Ingressos: ${ingressoUser}\n
    ---Valores---\n
    Valor do ingresso:  ${ingressoInfo}\n
    Valor total: ${valorTotalInfo}`)
}

printInfo()
