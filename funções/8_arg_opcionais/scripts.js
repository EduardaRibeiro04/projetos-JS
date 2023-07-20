function soma(a,b) {

    if(a === undefined || b === undefined) {
        console.log("está função precisa ter dois argumentos");
    } else {
        return a + b;
    }
}

console.log(soma(1));

console.log(soma(1,3));



function saudacao(nome, idade) {

    if(idade === undefined) {
        console.log("olá " + nome);
    } else {
        console.log("olá " + nome + " voçê tem " + idade + " anos");
    }
}

saudacao("duda");

saudacao("duda", 19);