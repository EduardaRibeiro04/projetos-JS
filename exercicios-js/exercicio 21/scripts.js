function tipoDeDado(dado) {

    if(typeof dado === 'string') {
        console.log("este tipo de dado é uma string");
    } else if(typeof dado === 'boolean') {
        console.log("este tipo de dado é um boolean");
    } else if(typeof dado === 'number') {
        console.log("este tipo de dado é uma number");
    }
        
    }


 tipoDeDado('eduarda');
 tipoDeDado(false);
 tipoDeDado(78);