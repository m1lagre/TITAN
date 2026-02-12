function pegarUsuarios(){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
        resolve([
            {name:"v", lang:"JS"},
            {name:"g", lang:"C#"},
            {name:"h", lang:"Java"},
            ])
        }, 3000)
    })
}

// var usuarios = pegarUsuarios().then((usuarios)=>{ console.log(usuarios)})

async function principal (){
    var usuarios = await pegarUsuarios(); // Bloqueante
    console.log(usuarios);
    console.log("olá");
}

principal();

async function email (){
    var id = await pegarID()
    var email = await buscarEmailNoBanco(id)
    enviarEmail("olá", email)
}

pegarID().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail2("Olá", email).then(() => {
            console.log("EMAIL ENVIADO PRO ID" + id)})
        .catch(err => {
            console.log(err);
        })
    })
})
