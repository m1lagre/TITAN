const x = 157
const cedulas = [1, 5, 10, 50, 100];
var notas = 0
let n=0
var i=4
var qtdNotas =""

function verify(){
while (n<x){
    if (cedulas[i]+n <= x){
    notas += 1
    n+=cedulas[i]}

    if (cedulas[i]+n > x){
        if (notas>0){
            qtdNotas +=`${notas} nota(s) de R$ ${cedulas[i]}. `}
    i--
    notas = 0
    }
    console.log(n)
}
return console.log(qtdNotas)
}

verify(x)