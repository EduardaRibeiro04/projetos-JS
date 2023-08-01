function checarTamanhoTexto(texto) {
    if(texto.length > 10) {
        console.log("texto muito longo");
    } else {
        console.log("texto dentro do limite");
    }
}

checarTamanhoTexto("teste");
checarTamanhoTexto("vamos testar se funciona");
checarTamanhoTexto("10-");