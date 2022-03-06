function gerarNumeroAleatorio(){
    setInterval(function(){
        let numero = Math.ceil(Math.random()*100);
        console.log(numero);
        }, 1000);
    }
    
    gerarNumeroAleatorio();

