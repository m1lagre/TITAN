// 1. ENUMS E INTERFACES

enum UF { BAHIA = "BA", SAO_PAULO = "SP", RIO_DE_JANEIRO = "RJ" }
enum Genero { MASCULINO = "Masculino", FEMININO = "Feminino" }
enum EstadoCivil { SOLTEIRO = "Solteiro", CASADO = "Casado", SEPARADO = "Separado", DIVORCIADO = "Divorciado", VIUVO = "Viúvo" }
enum Setor { ENGENHARIA = "Engenharia", SAUDE = "Saúde", JURIDICO = "Jurídico", RECURSOS_HUMANOS = "Recursos Humanos", MARKETING = "Marketing", OPERACOES = "Operações" }
enum SetorFornecedor { TECNOLOGIA = "Tecnologia", MATERIAL_CONSTRUCAO = "Material de Construção", MATERIA_PRIMA = "Matéria Prima", ALIMENTICIO = "Alimentício" }

interface Contratacao {
    admitir(funcionario: Funcionario): void;
    demitir(funcionario: Funcionario): void;
}

interface SalarioFinal {
    getSalarioFinal(): number;
}

// 2. CLASSES BASE (COMPOSIÇÃO E ABSTRAÇÃO)

class Endereco {
    protected logradouro: string;
    protected numero: string;
    protected complemento: string;
    protected cep: string;
    protected cidade: string;
    protected uf: UF;

    constructor(logradouro: string, numero: string, complemento: string, cep: string, cidade: string, uf: UF) {
        this.logradouro = logradouro;
        this.numero = numero;
        this.complemento = complemento;
        this.cep = cep;
        this.cidade = cidade;
        this.uf = uf;
    }

    public toString(): string {
        return `${this.logradouro}, ${this.numero} - ${this.cidade}/${this.uf}`;
    }
}

abstract class Pessoa {
    public nome: string; // Colocado como public para facilitar leitura no console de testes
    protected telefone: string;
    protected email: string;
    protected endereco: Endereco;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
        this.endereco = endereco;
    }

    public toString(): string {
        return `NOME: ${this.nome} | TEL: ${this.telefone} | E-MAIL: ${this.email}
            ENDEREÇO: ${this.endereco.toString()}`;
    }    
}


// 3. CLASSES INTERMEDIÁRIAS (FÍSICA E JURÍDICA)

abstract class Fisica extends Pessoa {
    protected genero: Genero;
    protected estadoCivil: EstadoCivil;
    protected dataNascimento: Date;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date) {
        super(nome, telefone, email, endereco);
        this.genero = genero;
        this.estadoCivil = estadoCivil;
        this.dataNascimento = dataNascimento;
    }

    public getIdade(): number {
        const hoje = new Date();
        const anoNasc = this.dataNascimento.getFullYear();
        const anoAtual = hoje.getFullYear();
        const mesAtual = hoje.getMonth();
        const mesNasc = this.dataNascimento.getMonth();
        const diaAtual = hoje.getDate();
        const diaNasc = this.dataNascimento.getDate();

        if (mesAtual < mesNasc || (mesAtual === mesNasc && diaAtual < diaNasc)) {
            return (anoAtual - anoNasc - 1);
        }
        return (anoAtual - anoNasc);
    }
}

abstract class Juridica extends Pessoa {
    protected cnpj: string;
    protected inscricaoEstadual: string;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string) {
        super(nome, telefone, email, endereco);
        this.cnpj = cnpj;
        this.inscricaoEstadual = inscricaoEstadual;
    }

    public toString(): string {
        return `${super.toString()}
            CNPJ: ${this.cnpj} | IE: ${this.inscricaoEstadual}`;
    }
}


// 4. CLASSES CONCRETAS (PONTAS DO DIAGRAMA)


// --- LADO DOS CLIENTES E PRESTADORES ---
class Cliente extends Fisica {
    private protocoloAtendimento: number;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, protocoloAtendimento: number) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
        this.protocoloAtendimento = protocoloAtendimento;
    }

    public toString(): string {
        return `[CLIENTE]
            ${super.toString()}
            Idade: ${this.getIdade()} anos | Protocolo: ${this.protocoloAtendimento}`;
    }
}

class PrestacaoServico extends Juridica {
    private contratoInicio: Date;
    private contratoFim: Date;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string, contratoInicio: Date, contratoFim: Date) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
        this.contratoInicio = contratoInicio;
        this.contratoFim = contratoFim;
    }

    public toString(): string {
        return `[PRESTADOR DE SERVIÇO]
            ${super.toString()}
            Início: ${this.contratoInicio.toLocaleDateString()} | Fim: ${this.contratoFim.toLocaleDateString()}`;
    }
}

// --- LADO DOS FORNECEDORES E PRODUTOS ---
class Produto {
    private nome: string;
    private categoria: string;
    private preco: number;

    constructor(nome: string, categoria: string, preco: number) {
        this.nome = nome;
        this.categoria = categoria;
        this.preco = preco;
    }

    public toString(): string {
        return `${this.nome} (${this.categoria}) - R$ ${this.preco.toFixed(2)}`;
    }
}

class Fornecedor extends Juridica {
    private setor: SetorFornecedor;
    private produto: Produto; // Composição com Produto

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, cnpj: string, inscricaoEstadual: string, setor: SetorFornecedor, produto: Produto) {
        super(nome, telefone, email, endereco, cnpj, inscricaoEstadual);
        this.setor = setor;
        this.produto = produto;
    }

    public toString(): string {
        return `[FORNECEDOR]
            ${super.toString()}
            Setor: ${this.setor} | Fornece: ${this.produto.toString()}`;
    }
}

// --- LADO DOS FUNCIONÁRIOS ---
abstract class Funcionario extends Fisica implements SalarioFinal {
    protected cpf: string;
    protected rg: string;
    protected matricula: string;
    protected setor: Setor;
    protected salario: number;

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento);
        this.cpf = cpf;
        this.rg = rg;
        this.matricula = matricula;
        this.setor = setor;
        this.salario = salario;
    }

    public getSalarioFinal(): number {
        return this.salario;
    }

    public toString(): string {
        return `${super.toString()}
            CPF: ${this.cpf} | RG: ${this.rg}
            Matrícula: ${this.matricula} | Setor: ${this.setor} | Salário Base: R$ ${this.salario.toFixed(2)}`;
    }
}

class Engenheiro extends Funcionario {
    private crea: string;
    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number, crea: string) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
        this.crea = crea;
    }
    public toString(): string {
        return `[ENGENHEIRO]\n${super.toString()}\n            CREA: ${this.crea}`;
    }
}

class Medico extends Funcionario {
    private crm: string;
    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number, crm: string) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
        this.crm = crm;
    }
    public toString(): string {
        return `[MÉDICO]\n${super.toString()}\n            CRM: ${this.crm}`;
    }
}

class Motoboy extends Funcionario {
    private carteiraDeHabilitacao: string;
    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number, carteiraDeHabilitacao: string) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
        this.carteiraDeHabilitacao = carteiraDeHabilitacao;
    }
    public toString(): string {
        return `[MOTOBOY]\n${super.toString()}\n            CNH: ${this.carteiraDeHabilitacao}`;
    }
}

class Diretor extends Funcionario implements Contratacao {
    private readonly PREMIO: number = 0.2; // 20% de bônus do diagrama

    constructor(nome: string, telefone: string, email: string, endereco: Endereco, genero: Genero, estadoCivil: EstadoCivil, dataNascimento: Date, cpf: string, rg: string, matricula: string, setor: Setor, salario: number) {
        super(nome, telefone, email, endereco, genero, estadoCivil, dataNascimento, cpf, rg, matricula, setor, salario);
    }

    // Sobrescreve o método da Interface SalarioFinal adicionando o prêmio
    public getSalarioFinal(): number {
        return this.salario + (this.salario * this.PREMIO);
    }

    // Implementação da Interface de Contratação
    public admitir(funcionario: Funcionario): void {
        console.log(`>>> O Diretor ${this.nome} ADMITIU o funcionário ${funcionario.nome} <<<`);
    }

    public demitir(funcionario: Funcionario): void {
        console.log(`>>> O Diretor ${this.nome} DEMITIU o funcionário ${funcionario.nome} <<<`);
    }

    public toString(): string {
        return `[DIRETOR]\n${super.toString()}\n            Salário C/ Prêmio: R$ ${this.getSalarioFinal().toFixed(2)}`;
    }
}