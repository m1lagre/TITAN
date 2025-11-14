var x = document.getElementById("div");
var isDiv = false
function TITANdiv(x){  
    const text = document.querySelector("#isDiv")
    var a = parseInt(x.value);
    if (3%a == 0){ isDiv = true;
        console.log("É divisível por 3");
        text.innerText = "É divisível por 3";
    } else { isDiv = false;
        console.log("Não é divisível por 3");
        text.innerText = "Não é divisível por 3";
    } }     