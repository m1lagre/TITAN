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
        this.previousInput = this.currentInput 
        this.currentInput = ""
    }

    calculate(): void {

        if (this.operator === "+") {
            const result = parseFloat(this.previousInput) + parseFloat(this.currentInput);
            this.currentInput = result.toString();
        }
        else if(this.operator === "-"){
            const result = parseFloat(this.previousInput) - parseFloat(this.currentInput);
            this.currentInput = result.toString();
        }
        else if(this.operator === "*"){
            const result = parseFloat(this.previousInput) * parseFloat(this.currentInput);
            this.currentInput = result.toString();
        }
        else if(this.operator === "/"){
            const result = parseFloat(this.previousInput) / parseFloat(this.currentInput);
            this.currentInput = result.toString();
        }
    }
}

const minhaCalculadora = new Calculator();
minhaCalculadora.appendNumber("10");
minhaCalculadora.setOperator("*");
minhaCalculadora.appendNumber("5")
minhaCalculadora.calculate()
console.log(minhaCalculadora.currentInput)