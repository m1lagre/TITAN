const express = require('express')
const app = express()

// middlewares - funções que são executadas antes de chegar na rota, 
// para tratar as requisições (urlencoded é uma delas, para tratar formulários)
// extended:true permite receber dados complexos (arrays, objetos)
app.use(
    express.urlencoded({
        extended:true
    })

)

app.use(express.json())

//rotas - endpoints

// utilizo (req,res) para receber requisições e respostas
app.get('/', (req,res) =>{ 

    res.json({message: 'Primeira rota criada com sucesso!'})

})


app.listen(3000)
