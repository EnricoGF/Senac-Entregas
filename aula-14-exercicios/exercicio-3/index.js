/*
a) Crie uma variável de escopo global que guarde um array vazio chamada carrinho.

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (string) e
disponibilidade (boolean - devem começar como true).

c) Crie uma função que receba um objeto fruta por parâmetro e coloque-a dentro do array de carrinho. Invoque essa função passando os três objetos criados.
Dica: aqui você deve usar o método push().

d) Imprima a variável carrinho e garanta que ela agora seja um array preenchido com três objetos.
*/

let carrinho = []

const fruta1 =
{
    nome: "Maracujá",
    disp: true
}

const fruta2 =
{
    nome: "Pitaya",
    disp: false
}

const fruta3 =
{
    nome: "Carambola",
    disp: false
}

function recebe (obj1, obj2, obj3)
{
    carrinho.push (obj1, obj2, obj3)
}

recebe (fruta1, fruta2, fruta3)

console.log (carrinho)

