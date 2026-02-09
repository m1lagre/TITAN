const brlDisplay = document.querySelector('.brl')

function handleClick(event){
    event.preventDefault();
    const cep = inputCep.value;
    buscaJoke(cep);
}

function buscaJoke() {
    fetch(`https://api.chucknorris.io/jokes/random`)
    .then(response => response.json())
    .then(Joke => {
        console.log(Joke);
        brlDisplay.innerText = Joke.value;
})
}

//setInterval(buscaJoke, 10000)
