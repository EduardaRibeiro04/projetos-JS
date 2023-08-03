function imprimePar(num) {
    for(let i = num; i >= 0; i--) {
        if(i % 2 == 0) {
            console.log(i);
        }
    }
}

imprimePar(15);
imprimePar(20);
imprimePar(25);