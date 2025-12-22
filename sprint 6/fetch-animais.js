function initFetchAnimais(){

}

async function fetchAnimais(url) {
    const animaisResponse = await fetch(url);
    const animaisJSON = await animaisResponse.json();
    console.log(animaisJSON);

    animaisJSON.forEach(animal => {
        createAnimal(animal)}
    )
}

function createAnimal(animal) {
    console.log(animal)
}

fetchAnimais('./animaisapi.json')