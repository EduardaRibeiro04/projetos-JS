let nome = "luana"

for(let i = 0; i < 10; i = i + 1) {

  

    if(i == 3) {
      nome = "duda";
    }

    if(i == 5 && nome == "duda") {
        console.log("o nome é duda, pode parar");
        break;
    }

    console.log(i);
}