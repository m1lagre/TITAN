var x = document.getElementById("x");
var y = document.getElementById("y");
var z = document.getElementById("z");
function TITANcalc(x,y,z){
    var a = parseFloat(x.value);
    var b = parseFloat(y.value);
    var c = (z.value);

label = document.querySelector('#res');

switch(c){
    case '+':
        console.log(`${a+b}`);
        label.innerText = `O resultado da operação é: ` + (a+b);
        break;
    case '-':
        console.log(`${a-b}`);
        label.innerText = `O resultado da operação é: ` + (a-b);
        break;
    case '*':
        console.log(`${a*b}`);
        label.innerText = `O resultado da operação é: ` + (a*b);
        break;
    case '/':
        console.log(`${a/b}`);
        label.innerText = `O resultado da operação é: ` + (a/b);    
        break;
    default:
        console.log('operação invalida');
}}
