//EVENTOS DE TEMPO COM JS

function ativarContagem(){
    // setTimeout(function, tempo em milisegundos)
    document.getElementById("tempo").innerHTML = "começou a contar";
    // SETTIMEOUT = ativa a funçãoa apenas 1 vez quando der o tempo especificado
  tempo = setTimeout(function (){
    //Foi colocada como uma variavel para que ela seja convocada em outra FUNÇÃO
        // document.getElementById("tempo").innerHTML = "Executou o setTimeout";
        document.body.style.backgroundColor = "gray";
    }, 5000);  // a função será acionada e 5 segundos depois dira que foi executado o setTimeout
}


//FUNÇÃO QUE INTERROMPE A CONTAGEM DO SETTIMEOUT
function pararContagem(){
    clearTimeout(tempo);
    //Parou a contagem
    document.getElementById("tempo").innerHTML = "Parou a contagem!";
}


//SETINTERVAL

function ativaIntervalo(){
   tempo = setInterval(function(){
        var cronometro = document.getElementById("texto").innerHTML;
        var soma = parseInt(cronometro) + 1;//PARSEINT é usado para tranformar TEXTO em NÚMERO
        document.getElementById("texto").innerHTML = soma;
    }, 1000);//Irá repetir a FUNÇÃO a cada 1 SEGUNDO
}

function paraIntervalo() {
    clearInterval(tempo); //Faz com que pare o CRONOMETRO, não o reseta, apenas RESETA o TEMPO
   inverso = setInterval(function(){
        var revCronometro = document.getElementById("texto").innerHTML;
        var reverso = parseInt(revCronometro) - 1;//PARSEINT é usado para tranformar TEXTO em NÚMERO
        document.getElementById("texto").innerHTML = reverso;
        if (tempo === 0){
            document.getElementById("texto").innerHTML = "Tempo esgotado";
            clearInterval(tempo);
        }else{
            document.getElementById("texto").innerHTML = reverso;
        } 
    }, 1000);

    
    
    
}