console.log('a=', a); // undefined
var a = 5;
console.log('a=', a); // 5

console.log('b=', b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log('b=', b); // 10

//O hosting ocorre apenas com var, não com let ou const.