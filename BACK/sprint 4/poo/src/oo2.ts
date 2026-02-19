class Address { 
    constructor(
        public address: string,
        public zipCode: string,
        public number?: number
    ) {}
}

class User {
    name:string;
    email:string;
    active:boolean = false;
    address: Address

    constructor(name:string, email:string, address:Address, active:boolean = false){
        this.name = name
        this.email = email
        this.active = active
        this.address = address
    }
}

const address1 = new Address('Rua x', '40465000', 100);
const user1 = new User('User 01', 'user1@email.com', address1)
console.log(user1.address.zipCode)