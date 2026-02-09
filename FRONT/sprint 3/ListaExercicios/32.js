array = [2, 2, 2, 2, 2, 2, 2, 2, 2, 2];
function media(array){
    var soma = 0;
    for(var i = 0 ; i<array.length ; i++){
        soma += array[i];
        console.log(soma);
    }
    return console.log(soma/array.length);
}

media(array);