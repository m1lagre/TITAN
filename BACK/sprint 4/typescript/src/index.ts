const frutas: string[] = []

frutas.push("banana");
frutas.push("1");

const pessoa: [string, number] = ["1",2]

console.log(pessoa)

function soma(a:number, b:number):number { return a+b}

const cumprimentar = (nome:string):string =>{
    return `Olá, ${nome}!`
}

console.log(soma(10,10))
console.log(cumprimentar("Gabriel"))

interface User {
    nome:string;
    age:number;
    maior:boolean;
    estado: "solteiro" | "casado";

}

let usuario:User;

usuario = { 
    nome: "Gabriel",
    age: 23,
    maior: true,
    estado: "casado",

}


const deMaior = (user:User) => {
    if (user.age >= 18) {return "é de maior";}
    else {return "é de menor";}
}
const printUser = (user:User) => {
    console.log(`Nome:${user.nome}, idade:${user.age} e ${deMaior(usuario)}`)
}

printUser(usuario)

class Instancia {
    nome:string;
    age:number;
    constructor(nome:string, age:number){
        this.nome = nome;
        this.age = age;
        console.log("Nova instância criada!");
    }
}

const usuario2 = new Instancia("eu", 23)
