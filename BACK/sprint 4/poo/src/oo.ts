// usar  npm i typescript e npx ts-node "caminho"
class User {
    name:string;
    email:string;
    active:boolean = false;

    constructor(name:string, email:string, active:boolean = false){
        this.name = name
        this.email = email
        this.active = active

    }
}

const user1 = new User('use1', 'user1@email.com')
console.log(user1)
const user2 = new User('use2', 'user2@email.com')
const user3 = new User('use3', 'user3@email.com')