const brlDisplay = document.querySelector('.brl')

function buscaBRL() {
    fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`)
    .then(response => response.json())
    .then(brlJson => {
        console.log(brlJson.USDBRL.bid);
        brlDisplay.innerText = "R$ " + brlJson.USDBRL.bid.replace('.',',');
})
}

setInterval(buscaBRL, 1000)

buscaBRL()