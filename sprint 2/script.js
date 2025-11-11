
contato.addEventListener('submit', function(event) {

    event.preventDefault(); 

    const formData = new FormData(contato);
    const formObject = Object.fromEntries(formData.entries());
    
    formObject.lembrar = document.querySelector('#lembrar').checked;
    formObject.aceitotermos = document.querySelector('#aceito').checked;

    const jsonString = JSON.stringify(formObject, null, 2);

    console.log("Objeto JavaScript:", formObject);
    console.log("String JSON Formatada:", jsonString);
    console.log(contato)

    texto.innerHTML = `<pre>${jsonString}</pre>`; // Usando <pre> para preservar a formatação do JSON
});


