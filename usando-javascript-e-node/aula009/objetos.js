//CRIANDO OBJETOS

// FORMA 1
const pessoa = {
    nome: 'anne',
    sobrenome: 'bellandi'
};

console.log(pessoa['sobrenome']);

// FORMA 2
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sibrenome = "Silva"

console.log(funcionario.nome)

// FORMA 3 (melhor na opiniao do prof)
function criarPessoa(nome,sobrenome){
    return {nome,sobrenome}
}

const p1 = criarPessoa("arthur", "oliveira")
const p2 = criarPessoa("aline", "santos")

console.log(p1)
console.log(p2)