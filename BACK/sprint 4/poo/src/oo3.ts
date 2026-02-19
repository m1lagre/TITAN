class Address { 
    constructor(
        public address: string,
        public readonly zipCode: string,
        public number?: number
    ) {}
}

const address1 = new Address('Rua x', '40465-000', 100)
console.log(address1.zipCode)
//address1.zipCode = '12334-554'  readonly impede de mudar
//console.log(address1.zipCode)