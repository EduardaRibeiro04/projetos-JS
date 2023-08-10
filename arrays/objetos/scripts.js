let cachorro = {
    patas: 4,
    nome: 'hachi',
    latir: function() {
        console.log("au au");
    }
};

console.log(cachorro.patas);
console.log(cachorro.nome);
cachorro.latir();


let pessoa = {
    nome: 'duda',
    namorados: 'douglas',
    idade: 19,
    falar: function(n) {
        console.log("eu te amo amorr");
    }

};

console.log(pessoa.nome);
console.log(pessoa.namorados);
console.log(pessoa.idade);
pessoa.falar();
