const x = document.getElementById("meuInput");
const y = document.getElementById("meuInput2");


function TITAN(x,y){
    const valorx = parseFloat(x.value);
    const valory = parseFloat(y.value);
    var atual = (valorx+valory);
    var f = atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
    return console.log('O valor é ', f);
    }