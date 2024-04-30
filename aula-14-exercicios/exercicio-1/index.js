/*
a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos).
Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo:

// Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: [ "Vitinho", "Vitão", "Vit" ]
}

// Exemplo de saída
// "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
Dica: não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
Depois, chame a função feita no item anterior passando como argumento o novo objeto.
*/

const pessoa =
{
    nome: "Vitor Hugo", 
    apelidos: [ "Vitinho", "Vitão", "Vit" ]
}

function printa (obj)
{
    console.log (`Eu sou ${obj.nome}, mas pode me chamar de : ${obj.apelidos[0]}, ${obj.apelidos[1]} ou ${obj.apelidos[2]}`)
}

printa (pessoa)

const pessoa2 =
{
    ...pessoa,
    apelidos: ["Huguinho", "Zézinho","Luisinho"]
}

printa (pessoa2)