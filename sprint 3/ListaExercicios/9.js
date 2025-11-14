var x = document.getElementById("nota");

function TITANnota(x){  
    var a = parseInt(x.value);
    if (a>37){
        if (a%5>=3){ const rest = 5 - (a%5);
        a += rest;
        ;}
        return console.log('A nota final é: ', a,' aprovado!')
    } else {
        return console.log('A nota final é: ', a,' reprovado!');
    }}