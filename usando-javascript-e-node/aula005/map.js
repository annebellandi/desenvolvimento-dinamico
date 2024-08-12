var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
})
console.log(nums);

var funcionarios = [
    {nome: "luis", idade:62},
    {nome: "davi", idade:22},
    {nome: "artur", idade:18},
    {nome: "lucas", idade:40},
]

nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes);