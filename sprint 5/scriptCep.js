const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep')
const resultadoCep = document.querySelector('.resultadoCep')
inputCep.addEventListener('click', handleClick);

function handleClick(event){
    event.preventDefault();
    const cep = inputCep.value;
    buscaCep(cep);
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.text())
    .then(body => {
        console.log(body);
        resultadoCep.innerText = body;
    })
}
