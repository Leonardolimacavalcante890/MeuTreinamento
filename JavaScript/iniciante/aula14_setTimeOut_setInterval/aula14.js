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
    setInterval(function(){
        var cronometro = document.getElementById("texto").innerHTML; 
    }, 1000)
}
