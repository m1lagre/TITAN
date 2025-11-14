const x = document.getElementById("a");
const y = document.getElementById("b");
const z = document.getElementById("c");

function TITANbhaskara(x,y,z){
    const a = parseInt(x.value);
    const b = parseInt(y.value);
    const c = parseInt(z.value);
    var delta = (b**2) - 4*a*c;
    if (delta < 0){
        return console.log('Não existem raízes reais');
    } else {
        var raiz1 = (-b + Math.sqrt(delta)) / (2*a);
        var raiz2 = (-b - Math.sqrt(delta)) / (2*a);
        return console.log('As raízes são: ', raiz1.toFixed(2), 'e', raiz2.toFixed(2));
    }}