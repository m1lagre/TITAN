// Armazenando uma função em uma variavel
const ImprimirSoma = function(a, b){
    console.log(a + b)
}

ImprimirSoma(2,3)

// Armazenando uma função arrow em uma variavel
const Soma = (a, b) => {
    return a + b
}

console.log(Soma(2,3))

// Retorno implícito
const Subtracao = (a, b) => a - b
console.log(Subtracao(2,3))

