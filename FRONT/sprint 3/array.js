const valores = [1, 2, 3, 4, 5]
console.log (valores[0], valores[2]) // Retorna o valor na posição 0 e 2;
delete valores[3]
console.log(typeof valores[2]) // Retorna undefined, pois o valor na posição 3 foi deletado