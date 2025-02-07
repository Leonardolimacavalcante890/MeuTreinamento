//IF E ELSE


var interruptor = "on";

if(interruptor=="on"){
    alert("A lampâda está ligada");
  let corpo = document.getElementById("corpo");
  corpo.style.backgroundColor = "yellow";
}else{
    alert("A lampada está desligada");
    let corpo = document.getElementById("corpo");
    corpo.style.backgroundColor = "black";
}

//Neste caso, a CONDIÇÃO dará TRUE, pois o INTERRUPTOR está LIGADO(ON), então o BODY ficará AMARELO


var hora = new Date().getHours(); //O metodo GETHOURS pega o HORÁRIO de agora.

if(hora < 12){
   alert("Agora são: "+ hora +" , Bom dia!");
   let corpo = document.getElementById("corpo");
   corpo.style.backgroundColor = "blue";
} else if(hora < 18){
    alert("Agora são: "+ hora +" , Boa tarde!");
   let corpo = document.getElementById("corpo");
   corpo.style.backgroundColor = "orange";
}else{
    alert("Agora são: "+ hora +" , Boa noite!");
   let corpo = document.getElementById("corpo");
   corpo.style.backgroundColor = "black";
}


//IF E ELSE SÃO USADOS EM FORMULÁRIOS

function validacao() { //função onde mostra se o cliente é APTO para o TRABALHO
    let idade = document.getElementById("nome").value;

    if(value < 18 && > 15) {
        let p = document.getElementById("texto");
        p.innerHTML = "Encaminhado para uma entrevista de Jovem Aprendiz";
        p.style.color = "green";
    }else if(value > 18 && < 60) {
        let p = document.getElementById("texto");
        p.innerHTML = "Encaminhado para uma entrevista como CLT";
        p.style.color = "green";
    }else{
        let p = document.getElementById("texto");
       
        value < 15 = p.innerHTML = "Não tem idade para TRABALHAR";
        p.style.color = "red";
    }
}