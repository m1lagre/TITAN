class Calculator {
    // Definimos tudo como string de texto inicialmente
    public currentInput: string;
    public previousInput: string;
    public operator: string;

    // começa limpa
    constructor() {
        this.currentInput = "";
        this.previousInput = "";
        this.operator = "";
    }

    appendNumber(number: string): void {
        this.currentInput = this.currentInput + number
    }

    // Recebe o sinal da operação
    setOperator(operator: string): void {
        this.operator= operator
    }

    calculate(): void {
    
    }
}