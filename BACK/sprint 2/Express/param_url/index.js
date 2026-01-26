const express = require("express")
const app = express()
const port = 3000 // variavel ambiente

const path = require("path")

//ler o body
app.use(express.urlencoded({
    extended:true,}),
)

app.use(express.json())


const basePath = path.join(__dirname, 'templates')


app.get('/users/add', (req,res) =>{res.sendFile(`${basePath}/userform.html`)})

app.post('/users/save', (req,res) => {
    console.log(req.body)

    const name = req.body.name
    const age = req.body.age

    console.log(`Nome ${name}, Idade ${age}`)

    res.sendFile(`${basePath}/userform.html`)
})



app.get('/users/:id',(req,res) => {

    const id = req.params.id
    //leitura da tabela users pra resgatar usuário do banco
    console.log(`buscando usuário: ${id}`)
    res.sendFile(`${basePath}/users.html`)

})

app.get('/',(req,res) => {

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port,()=>{
    
    
    console.log(`App rodando na porta ${port}`)


})