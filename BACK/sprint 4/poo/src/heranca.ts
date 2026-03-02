abstract class Pessoa{
    protected telefone: string
    protected nome: string

    constructor(nome:string, telefone:string){
        this.nome = nome;
        this.telefone = telefone;
    }
}

class Fisica extends Pessoa{
    private cpf: string;
    private rg: string;
    private dataNascimento: Date;
    
    public set CPF (CPF:string) {
        this.cpf = CPF
    }

    public set RG (RG:string) {
        this.rg = RG
    }
    
    public set dataNasc (dataNasc:Date) {
        this.dataNascimento = dataNasc
    }   

    constructor(nome:string, telefone:string){
        super(nome, telefone)
        this.cpf = "";
        this.rg = "";
        this.dataNascimento = new Date();
    }
    
    public getIdade():number {
        const anoNasc:number = this.dataNascimento.getFullYear()
        const anoAtual:number = new Date().getFullYear()

        if ((new Date().getMonth() > this.dataNascimento.getMonth()) || (new Date().getDate() > this.dataNascimento.getDate()) && (new Date().getMonth() === this.dataNascimento.getMonth())){
            return (anoAtual-anoNasc)
        }
        return (anoAtual-anoNasc-1)
        
    }

    public toString():string {
        return `NOME:${this.nome}
            TEL:${this.telefone}
            CPF:${this.cpf}
            RG:${this.rg}`
    }
}

class Juridica extends Pessoa {
    private cnpj: string;
    private inscricaoEstadual: string;

    public set CNPJ (CNPJ:string) {
        this.cnpj = CNPJ
    }

    public set IE (IE:string) {
        this.inscricaoEstadual = IE
    }
    constructor(nome:string, telefone:string){
        super(nome, telefone)
        this.cnpj = "";
        this.inscricaoEstadual = "";
    }

    public toString():string {
        return `NOME:${this.nome}
            TEL:${this.telefone}
            CNPJ:${this.cnpj}
            IE:${this.inscricaoEstadual}`
    }    
}

const pessoaFisica = new Fisica('Gabriel','71986471884')
pessoaFisica.CPF='123'
pessoaFisica.RG='321'
pessoaFisica.dataNasc=new Date("09-28-2002")
console.log(pessoaFisica.getIdade())
console.log(pessoaFisica.toString())
console.log(pessoaFisica)

const pessoaJuridica = new Juridica('Gabriel','71986471884')
pessoaJuridica.CNPJ='123'
pessoaJuridica.IE='321'
console.log(pessoaJuridica)