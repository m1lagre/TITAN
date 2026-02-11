function enviarEmail(corpo, para) {

    setTimeout(() => {
    console.log(`
        Para ${para}
        ---------------------------------
        ${corpo}
        ---------------------------------
        De: Gabriel`)
    },8000)
    console.log("E-mail enviado!")
}


enviarEmail("Oi","gabriel@email.com")

