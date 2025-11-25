console.log('a=', a); // undefined
var a = 5;
console.log('a=', a); // 5

console.log('b=', b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log('b=', b); // 10

//Hosting é o comportamento padrão do JavaScript de mover declarações para o topo do escopo atual antes da execução do código.
//O hosting ocorre apenas com var, não com let ou const.