const x = document.getElementById("CapInicial");
const y = document.getElementById("TxJuros");
const z = document.getElementById("Tempo");

function TITANsimp(x,y,z){
    const CapInicial = parseFloat(x.value);
    const TxJuros = parseFloat(y.value);
    const Tempo = parseInt(z.value);
    var M = CapInicial 
    k= 0;
    do{ 
        M += CapInicial * (TxJuros/100);
        console.log( M )
        k++
        
    } while(k < Tempo);
    var tot = M.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2});
    return console.log('O valor é ', tot);
    }

function TITANcomp(x,y,z){
    const CapInicial = parseFloat(x.value);
    const TxJuros = parseFloat(y.value);
    const Tempo = parseInt(z.value);
    var M = CapInicial * ( (1 + (TxJuros/100)) ** Tempo );
    return console.log('O valor é ', M.toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2}));
}