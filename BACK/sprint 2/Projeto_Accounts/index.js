// modulos externos
const inquirer = require('inquirer')
const chalk = require ('chalk')

// modulos internos
const fs = require ('fs')

console.log("iniciamos o Account")

operation()


function operation() {
    inquirer.prompt([{

        type:'list',
        name: 'action',
        message:'O que você deseja fazer?',
        choices:[
            'Criar conta',
            'Consultar saldo',
            'Depositar',
            'Sacar',
            'Sair',
            'Transferir',
        ]},
]).then((answer) => { 
        const action = answer['action']

        console.log(chalk.green(`A opção escolhida foi: ${action}`))

        if (action === 'Criar conta') {
            createAccount()
            
        }else if (action ==='Depositar'){
            deposit()

        }else if (action ==='Consultar saldo'){
            viewBalance()

        }else if (action ==='Sacar'){
            withdrawBalance()

        }else if (action ==='Transferir'){
            Transfer()

        }else if (action ==='Sair'){
            console.log(chalk.bgBlue.black('Obrigado por usar o Accounts!'))
            process.exit()
        }
    }).catch((err)=> console.log(err)) 
}

// create an account

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite um nome para sua conta',
        }
    ]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if (!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta conta já existe, escolha outro nome!')),
            buildAccount()
            return
        }

        fs.writeFileSync(`accounts/${accountName}.json`, '{"balance":0}', function(err) {console.log(err)},)

        console.log(chalk.green('Parabéns, sua conta foi criada!'))
        operation( )

    }).catch((err) => console.log(err))
}

// add an amount to user account
function deposit(){

    inquirer.prompt([
        {
            name:'accountName',
            message:'Qual nome da sua conta?'
        }
    ]).then((answer)=>{

        const accountName = answer['accountName']
        
        //verify if account exists
        if(!checkAccount(accountName)){
            return deposit()
        }

        inquirer.prompt([{

            name: 'amount',
            message:'Quanto você deseja depositar?',


        }]).then((answer)=>{

            const amount = answer['amount']

            // add an amount
            addAmount(accountName, amount)
            operation()

        }).catch(err => console.log(err))

    })
    .catch(err =>console.log(err))
}

function checkAccount(accountName){

    if(!fs.existsSync(`accounts/${accountName}.json`)){ 
        console.log(chalk.bgRed.black('Esta conta não existe, escolha outro nome'))
        return false 
    }

    return true
}

function addAmount(accountName, amount){
    const accountData = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.black('ERRO, tente novamente mais tarde'))
        return deposit()
    }
    accountData.balance = parseFloat(amount) + parseFloat(accountData.balance)

    fs.writeFileSync(`accounts/${accountName}.json`,
        JSON.stringify(accountData),
        function(err){ console.log(err)},
    )

    console.log(chalk.green(`Foi depositado um valor de R$${amount} na sua conta!`)
)

}

function getAccount(accountName){
    const AccountJSON = fs.readFileSync(`accounts/${accountName}.json`,{
       encoding: 'utf8',
       flag: 'r', 
})

    return JSON.parse(AccountJSON)
}

function viewBalance(){
    inquirer.prompt([{

        name:'accountName',
        message:'Qual o nome da sua conta?',

    }]).then((answer)=>{const accountName = answer['accountName']

    if (!checkAccount(accountName)){
        return viewBalance()
    }

    const accountData = getAccount(accountName)
    console.log(chalk.bgBlue.black(`Seu saldo é ${accountData.balance}`))
    return  operation()
    
    

    }).catch(err => console.log(err))

}

function withdrawBalance(){

    inquirer.prompt([{

        name:'accountName',
        message:'Qual nome da sua conta?',


    }]).then((answer)=> {
        
        const accountName = answer['accountName']

        //verify if account exists
        if(!checkAccount(accountName)){
            return withdrawBalance()}

        inquirer.prompt([{

            name:'amount',
            message:'Quanto você deseja sacar?'

        }]).then((answer)=> {

            const amount = answer['amount']

            // remove an amount
            removeAmount(accountName, amount)
            operation()        


        }).catch(err => console.log(err))

    })
    .catch(err =>console.log(err))
}

function removeAmount(accountName, amount){

    const accountData = getAccount(accountName)
    if(!amount){
        console.log(chalk.bgRed.black('ERRO, tente novamente mais tarde'))
        return withdrawBalance()
    }

    if (accountData.balance< amount){
        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return withdrawBalance()
    }

    accountData.balance = parseFloat(accountData.balance) - parseFloat(amount) 

    fs.writeFileSync(`accounts/${accountName}.json`,
    JSON.stringify(accountData),
    function(err){ console.log(err)},)

    console.log(chalk.green(`Foi sacado um valor de R$${amount} na sua conta, novo saldo R$${accountData.balance}.`)
)
}

function Transfer(){

    inquirer.prompt([{

        name:'accountName1',
        message:'Qual nome da sua conta?',


    }]).then((answer)=> {
        
        const accountName1 = answer['accountName1']  

        inquirer.prompt([{

            name:'accountName2',
            message:'Qual nome da conta que vai receber?',

            }]).then((answer)=> {
                const accountName2 = answer['accountName2'] 

                inquirer.prompt([{

                name:'amount',
                message:'Quanto deseja transferir?',

                }]).then((answer)=> {

                const amount = answer['amount']
                // transfer amount
                Balances = transferAmount(accountName1,accountName2,amount)
                console.log(`Transferência realizada com sucesso!\nNovo valor da conta ${chalk.bold(accountName1)} é ${chalk.green(`R$ ${Balances[0]}`)} e valor da conta ${chalk.bold(accountName2)} é ${chalk.green(`R$ ${Balances[1]}`)}`)
                operation()
            })
            .catch(err => console.log(err))

            })
        .catch(err => console.log(err))

    }).catch(err => console.log(err))

}

function transferAmount(accountName1, accountName2, amount){

    const accountData1 = getAccount(accountName1)
    if(!amount){
        console.log(chalk.bgRed.black('ERRO, tente novamente mais tarde'))
        return Transfer()
    }

    if (accountData1.balance< amount){
        console.log(chalk.bgRed.black('Valor indisponivel!'))
        return Transfer()
    }

    accountData1.balance = parseFloat(accountData1.balance) - parseFloat(amount) 

    fs.writeFileSync(`accounts/${accountName1}.json`,
    JSON.stringify(accountData1),
    function(err){ console.log(err)},)

    const accountData2 = getAccount(accountName2)
    if(!amount){
        console.log(chalk.bgRed.black('ERRO, tente novamente mais tarde'))
        return Transfer()
    }
    accountData2.balance = parseFloat(amount) + parseFloat(accountData2.balance)

    fs.writeFileSync(`accounts/${accountName2}.json`,
        JSON.stringify(accountData2),
        function(err){ console.log(err)},
    )
    return [accountData1.balance,accountData2.balance]
}