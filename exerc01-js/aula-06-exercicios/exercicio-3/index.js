/*
3. Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25
Agora, queremos trocar os valores delas, de forma que a passe a ter o valor de b e b passe a ter o valor de a.
Ou seja, no caso desse exemplo acima, a passaria a ser 25 e b passaria a ser 10.

let a = 10
let b = 25


// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas
variáveis assumam inicialmente (ou seja: não basta dizer que a = 25 e b = 10 porque se os valores iniciais mudarem,
a lógica do seu programa teria que mudar também).
*/

//declarando variaveis a e b
let a = 10
let b = 25

//printando os valores de a e b
console.log("Valor da variavel A antes da troca:\n", a)
console.log("Valor da variavel B antes da troca:\n", b)

//trocando os valores de a e b
let c = a
a = b
b = c

//printando os novos valores de a e b
console.log("Valor da variavel A depois da troca:\n", a)
console.log("Valor da variavel B depois da troca:\n", b)
