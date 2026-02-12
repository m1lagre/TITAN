function pegarID() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(id)
        }, 1500);
    })
}

function buscarEmailNoBanco(id){
    return new Promise((resolve,reject) => {
        setTimeout(() => {resolve(email)}, 1500)
    })
}

function enviarEmail(corpo, para, callback) {

    setTimeout(() => {
    console.log(`
        Para ${para}
        ---------------------------------
        ${corpo}
        ---------------------------------
        De: Gabriel`)
        callback("OK",5,"8s","Gabriel");
    },8000)


    console.log("E-mail enviado!")
}

function enviarEmail2(corpo, para,) {

return new Promise((resolve, reject)=> {

    setTimeout(() => { var deuErro = true;
        if(!deuErro){
            resolve() // Promessa OK!

        } else {
            reject("fila cheia") // Falha!
        }
    }, 4000)

})
}



enviarEmail2("Oi","gabriel@email.com").then( (dados) => {
    console.log("OKAY!")
}).catch((err) => {console.log(err)})


pegarID().then((id) => {
    buscarEmailNoBanco(id).then((email) => {
        enviarEmail2("Olá", email).then(() => {
            console.log("EMAIL ENVIADO PRO ID" + id)})
        .catch(err => {
            console.log(err);
        })
    })
})

