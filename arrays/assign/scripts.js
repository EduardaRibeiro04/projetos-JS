let shopping = {
    lojas: 134,
    alimentação: 125,
    pessoas: 156

}

console.log(shopping);

let adicionais = {
    arcondicionado: true,
    limpeza: true,
    estacionamento: false
}

Object.assign(shopping, adicionais);

console.log(shopping);

//exemplos


let carro = {
    portas: 2,
    portmalas: '200l',
    motor: '2.0'

}

let adicionaiss = {
    tetosolar: true,
    arcondicionado: false,
}

console.log(carro);

Object.assign(carro, adicionaiss);

console.log(carro);







