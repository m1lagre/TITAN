const x = document.getElementById("cod");
const y = document.getElementById("qtd");

function TITANcard(x,y){
    var a = parseInt(x.value);
    var b = parseInt(y.value);

switch(a){
    case 100:
        return console.log(`Total a pagar: R$${(cardarpio[100]*b).toFixed(2)}`);
    case 200:
        return console.log(`Total a pagar: R$${(cardarpio[200]*b).toFixed(2)}`);
    case 300:
        return console.log(`Total a pagar: R$${(cardarpio[300]*b).toFixed(2)}`);
    case 400:
        return console.log(`Total a pagar: R$${(cardarpio[400]*b).toFixed(2)}`);
    case 500:
        return console.log(`Total a pagar: R$${(cardarpio[500]*b).toFixed(2)}`);
    case 600:
        return console.log(`Total a pagar: R$${(cardarpio[600]*b).toFixed(2)}`);
    default:
        return console.log('Código inválido');
}}


const cardarpio = {100:3.00, 200:4.00, 300:5.50, 400:7.50, 500:3.50, 600:2.80};
