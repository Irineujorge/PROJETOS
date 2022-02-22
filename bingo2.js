//Gerar um numero aleatorio entre 1 e 75
//min = 1
//max = 75

function gerarNumeroAleatorio(min, max){
    return Math.ceil(Math.random()*(max - min));    
}

let cartela = [];
let pares = [];
let impares = [];

//Loop de repetiçao / laço de repetiçao


for(let i = 0; i < 25; i++){
    let numeroAleatorio = gerarNumeroAleatorio(1,75);
    if(cartela.indexOf(numeroAleatorio) === -1){
        cartela.push(numeroAleatorio);
        if(numeroAleatorio%2 === 0){
            pares.push(numeroAleatorio);
        }else{
            impares.push(numeroAleatorio);
        }
    }

}

//console.log("Cartela", cartela.sort(function(a,b){return a-b}));
//console.log("Numeros pares", pares.sort(function(a,b){return a-b}));
//console.log("Numeros impares", impares.sort(function(a,b){return a-b}));

let numerosSorteados = [];

function sorteio(){
    let intervalo = setInterval(function(){

        let numeroSorteado = gerarNumeroAleatorio(1,75);
        let numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;

        if(numeroExiste === false){
            numerosSorteados.push(numeroSorteado);
        }else{
            while(numeroExiste === true){
                numeroSorteado = gerarNumeroAleatorio(1,75);
                numeroExiste = numerosSorteados.indexOf(numeroSorteado) !== -1;
                if(numeroExiste === false){
                    numerosSorteados.push(numeroSorteado);                   
                }
            }
        }
        
        console.log("Numeros sorteados", numerosSorteados);
        console.log("tamanho", numerosSorteados.length);

        if(numerosSorteados.length === 75){
            clearInterval(intervalo);
        }
            
    }, 2000)
}

function conferirCartela(){
    if(numerosSorteados.length < 25)
        return false;

    let ganhouBingo = true;
    let quantidadeNumerosSorteados = 0;

    numerosSorteados.forEach(function(sorteado){
        cartela.forEach(function(meuNumero){
            ganhouBingo = true;
            if(sorteado = meuNumero){
                quantidadeNumerosSorteados++;
            }  
        })
    })

    if(quantidadeNumerosSorteados == cartela.length){
        console.log("Parabens! Voce ganhou o bingo!");
        clearInterval(intervalo);        
    }else{
        console.log("voce ainda nao chegou la! Faltam " + (cartela.length - quantidadeNumerosSorteados) + " numeros");
    }
}

sorteio()