function multiplicarTresNumeros(x,y,z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2,3,4));

const mult = multiplicarTresNumeros(5,4,9);

console.log("o valor de mult é " + mult);

function podeDirigir(idade, cnh) {
    if(idade >=18 && cnh == true) {
        console.log("pode dirigir");
    } else {
        console.log("não pode dirigir");
    }
}

console.log(podeDirigir(19,true));
console.log(podeDirigir(25, false));
console.log(podeDirigir(44,0));
console.log(podeDirigir(19,1));
console.log(podeDirigir(17,false));
console.log(podeDirigir(18,true));