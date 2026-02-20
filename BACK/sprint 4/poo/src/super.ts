class Address { 
    constructor(
        public address: string,
        public zipCode: string,
        public number?: number
    ) {}
}

export class User {
    private name: string;
    private email: string;
    private address: Address[] = [];
    private active: boolean;

    constructor(name: string, email: string, active: boolean = false){
        this.name = name;
        this.email = email;
        this.active = active;
    }

    addAddress(newAddress: Address): void {
        this.address.push(newAddress);
    }

    public changeName(newName: string): void {
        if (newName.length < 3) {
            throw new Error('invalid name');
        }
        this.name = newName;
    }

    public getName(): string {
        return this.name;
    }
}

// 1. A palavra 'extends' cria a herança. AdminUser é um User.
export class AdminUser extends User {
    private adminLevel: number;

    constructor(name: string, email: string, adminLevel: number, active: boolean = true) {
        // 2. O super() DEVE ser a primeira linha do construtor.
        // Ele envia o 'name', 'email' e 'active' para o construtor da classe User.
        super(name, email, active); 
        
        // Só depois do super() podemos usar o 'this' na classe filha
        this.adminLevel = adminLevel;
    }

    // 3. Sobrescrevendo o método getName para adicionar a tag [ADMIN]
    public getName(): string {
        // Usamos super.getName() para pegar o nome original lá da classe pai
        // já que a propriedade 'name' é 'private' e não pode ser acessada com this.name aqui
        const originalName = super.getName(); 
        
        return `[ADMIN Level ${this.adminLevel}] ${originalName}`;
    }
}

// --- Testando o código ---

// Criando um usuário comum
const user1 = new User('User 01', 'user1@email.com');
console.log(user1.getName()); // Imprime: User 01

// Criando um usuário administrador
const admin1 = new AdminUser('Gabriel Admin', 'admin@email.com', 99);
console.log(admin1.getName()); // Imprime: [ADMIN Level 99] Gabriel Admin

// O admin também tem acesso aos métodos da classe pai!
admin1.changeName('Gabriel Master');
console.log(admin1.getName()); // Imprime: [ADMIN Level 99] Gabriel Master