const x = document.getElementById("meuInput");
const y = document.getElementById("meuInput2");

function TITAN(x,y){
    const valorx = x.value;
    const valory = y.value;
    return console.log('Resultado da divisão é: ',valorx/valory), console.log('Resto é: ', valorx%valory)   

}


TITAN(x,y);