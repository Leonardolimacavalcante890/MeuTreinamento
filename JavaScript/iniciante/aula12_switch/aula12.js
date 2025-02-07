//SWITCH

// switch (expressao/VALOR A SER EXECUTADO) {
//     case a: Aqui ja deve ser colocado uma logica
//         //O que acontece
//         break;
    
//     case b:
//     //O que acontece
//     break;
//     default: //Se nenhuma das condições for executada, então irá para o DEFAULT
//         //O que acontece
//         break;
// }

function validaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();// faz com que tudo que foi escrito fique em minusculo/CONVERTE para minusculo
    cor = cor.toBiggerCase();// faz com que tudo que foi escrito fique em MAIUSCULO/CONVERTE para maiusculo

    switch(cor){
        case "azul":
        document.body.style.backgroundColor = "blue";
        break;

        case "amarelo":
        document.body.style.backgroundColor = "yellow";
        break;

        case "verde":
        document.body.style.backgroundColor = "green";
        break;

        case "vermelho":
        document.body.style.backgroundColor = "red";
        break;

        default:
            document.getElementById("texto").innerHTML = "Não há a cor"+ cor +" disponivel no estoque.";//A COR é o que o usuario escreveu no INPUT
    }
}


function diaDaSemana(){
    let dia = new Date().getDay; // O GETDAY mostra o dia da semana como se estivesse dentro de uma ARRAY,
    //Como a semana tem 7 dias, ele mostra o dia da semana por um número/ O 0 é o DOMINGO

    switch(dia){

        case 0:
        let p = document.getElementById("texto").innerHTML = "Hoje é DOMINGO";
        break;

        case 1:
        let p = document.getElementById("texto").innerHTML = "Hoje é SEGUNDA-FEIRA";
        break;

        case 2:
        let p = document.getElementById("texto").innerHTML = "Hoje é TERÇA-FEIRA";
        break;

        case 3:
        let p = document.getElementById("texto").innerHTML = "Hoje é QUARTA-FEIRA";
        break;

        case 4:
        let p = document.getElementById("texto").innerHTML = "Hoje é QUINTA-FEIRA";
        break;

        case 5:
        let p = document.getElementById("texto").innerHTML = "Hoje é SEXTA-FEIRA";
        break;

        case 6:
        let p = document.getElementById("texto").innerHTML = "Hoje é SABÁDO";
        break;
        default:
        let p = document.getElementById("texto").innerHTML = "Não sei que dia é hoje";
    }
}