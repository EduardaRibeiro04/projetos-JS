let pessoa = {
    nome: "duda",
    idade: 19,
    profissao: "programador",
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);

console.log(pessoa);

pessoa.casado = true;

console.log(pessoa.casado);

console.log(pessoa);