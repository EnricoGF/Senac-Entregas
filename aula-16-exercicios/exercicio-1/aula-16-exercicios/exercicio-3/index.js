/*
3. Programa com switch/case
Repita o exercício anterior, mas utilizando a estrutura de switch/case.

Dica: Lembre-se que switch/case é como se fosse um if, mas verifica somente igualdades estritas (===).
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let turno = prompt(`Digite o turno que você estuda. "M" (matutino), "V" (Vespertino) ou "N" (Noturno).`).toUpperCase()

switch(turno){
    case `M`:
        console.log(`Bom dia!`)
        break
    case `V`:
        console.log(`Boa tarde!`)
        break
    case `N`:
        console.log(`Boa noite!`)
        break
    default:
        console.log(`Turno não existente`)
}
