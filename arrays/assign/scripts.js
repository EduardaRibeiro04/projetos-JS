let carro = {
    portas: 2,
    portmalas: '200l',
    motor: '2.0'

}

let adicionais = {
    tetosolar: true,
    arcondicionado: false,
}

console.log(carro);

Object.assign(carro, adicionais);

console.log(carro);