let duda = {
    nome: 'duda',
    idade: 19,
    cabelo: 'castanho',
    compromisso: 'solteira'
}

console.log(duda.nome);
console.log(duda.idade);
console.log(duda.cabelo);
console.log(duda.compromisso);

delete duda.compromisso;

console.log(duda.compromisso);

duda.compromisso = 'agora está namorando';

console.log(duda.compromisso);

//2 exeplos de como deletar e adicionar 