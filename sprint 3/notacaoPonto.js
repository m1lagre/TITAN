console.log(Math.ceil(4.2)); // 5

const obj1 = {}
obj1.nome = 'Caneta';
obj1['nome'] = 'Bola2';

function Obj(nome) {
    this.nome = nome;}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj1.nome); // Caneta
console.log(obj2.nome); // Cadeira
console.log(obj3.nome); // Mesa