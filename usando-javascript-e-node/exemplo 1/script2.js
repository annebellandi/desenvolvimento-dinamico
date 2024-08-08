let rlsync = require(`readline-sync`);
let nome = rlsync.question("qual o seu nome?\n");
console.log(`Olá, ${nome}`);
let idade = rlsync.question("qual a sua idade?\n")
console.log(`Sua idade é: ${idade}`);