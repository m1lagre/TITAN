var x = document.getElementById("cod");

function TITANfruit(x){
    var a = (x.value);

switch(a){
    case 'maçã':
        return console.log(`${cardarpio[a]}`);
    case 'kiwi':
        return console.log(`${cardarpio[a]}`);
    case 'melancia':
        return console.log(`${cardarpio[a]}`);
    default:
        return console.log('Código inválido');
}}


const cardarpio = {'maçã':"Não vendemos esta fruta aqui", 'kiwi':"Estamos com escassez de kiwis", 'melancia':"Aqui está, são 3 reais o quilo"};