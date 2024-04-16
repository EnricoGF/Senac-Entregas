
### Exercícios de escrita de cídigo

#### 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
    
```
let a = 10
let b = 25
```

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.
Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
    
```
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
```
    
Crie a lógica que deve ser inserida no código para que os valores de `a` e `b` sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

**Dicas:**

1. Podemos começar fazendo com que o valor de `a` seja igual ao que está no `b`, então ficaria assim: `a = b`. Nesse ponto, se déssemos um `console.log` no `a` e no `b`, teríamos que `a = 25` e `b = 25`. Mas desse jeito, a gente perdeu o valor anterior que estava no `a`! E agora, como você poderia guardar esse valor para atribuir à variável `b`?

2. Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?

3. Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!
