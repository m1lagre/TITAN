const x = 10;
const y = 20;   
const z = 10;
function TITAN(x,y,z){ 
    triang = ""
    if (z == y && z == x){ triang = "Equilátero";
    }
    else if (z == y || z == x || y == x){ triang = "Isósceles";
    }
    else { triang = "Escaleno";
        return console.log(triang);
}}

TITAN(x,y,z);