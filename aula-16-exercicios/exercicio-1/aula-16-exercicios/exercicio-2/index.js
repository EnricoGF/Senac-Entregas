/*
2. Faça um programa
Faça um programa que verifica que turno do dia um aluno estuda.

Peça para digitar "M" (matutino), "V" (Vespertino) ou "N" (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
Utilize os blocos if/else if/else.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let turno = prompt(`Digite o turno que você estuda. "M" (matutino), "V" (Vespertino) ou "N" (Noturno).`).toUpperCase()

if(turno ===`M`){
	console.log(`Bom dia!`)
}
else if(turno ===`V`){
	console.log(`Boa tarde!`)
}
else if(turno===`N`){
	console.log(`Boa noite!`)
}
else{
	console.log(`Turno não existente`)
}
