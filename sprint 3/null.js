//Atribuição por referência
const a = {nome: 'Teste'}
console.log(a)
const b = a
b.nome = 'Opa'
console.log(b)
console.log(a)

//ausencia de valor
let c = null
console.log(c)
//nao inicializada
let d
console.log(d)

//A diferença de let e var é que o var