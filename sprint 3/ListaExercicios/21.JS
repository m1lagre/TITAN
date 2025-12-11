const paciente = {
  idade: 61,
  valorFixo: 100,
  valorVar: function() {
    let valorTotal = 0;

    const fixo = Number(this.valorFixo);

    if (this.idade > 60) {
      valorTotal = fixo + 130;
    } else if (this.idade < 10) {
      valorTotal = fixo + 80;
    } else if (this.idade >= 30 && this.idade <= 60) {
      valorTotal = fixo + 95;
    } else if (this.idade >= 10 && this.idade <= 30) {

      valorTotal = fixo + 50;
    } else {

      valorTotal = fixo;
    }


    return valorTotal;
  }
};


const totalAPagar = paciente.valorVar();
console.log(`O valor total a pagar é: R$ ${totalAPagar}`); 

