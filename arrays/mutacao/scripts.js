let pessoa = {
    nome: "duda"
}

let pessoa2 = pessoa;

let pessoa3 = {
    nome: "douglas"
}

console.log(pessoa == pessoa2);
console.log(pessoa3 == pessoa);
console.log(pessoa3 == pessoa2);

pessoa2.nome = "chagas";

console.log(pessoa.nome);

pessoa.nome = "ribeiro";

console.log(pessoa2.nome);