//EVENTOS


//ONCLICK
function botaoOnclick(){
    alert("Acionou um EVENTO ONCLICK");
    document.body.style.backgroundColor = "black"; //Aqui está pedindo para que MUDE o ESTILO DO FUNDO com a TAG BODY
}


//ONDBLCLICK
function botaoDBLclick(){
    document.h1.style.backgroundColor = "red";
}


//ONMOUSEOVER
function viraVermelho(){
    let div1 = document.getElementById("elemento1"); //O elemento1 vai estar CONTIDO dentro da DIV1
    div1.style.backgroundColor = "red";
}


//ONMOUSEOUT
function viraAzul(){
    let div1 = document.getElementById("elemento1"); //O elemento1 vai estar CONTIDO dentro da DIV1
    div1.style.backgroundColor = "blue";
}


//ONMOUSEMOVE
function adicionaTexto(){
    let paragrafo = document.getElementById("texto");
    paragrafo.append("O mouse moveu"); //APPEND é uma FUNÇÃO que ADICIONA um novo elemento, pode ser TAG, textos e assim por diante
} //cuidado pois o MOUSEMOVE é muito sensivel e NÃO TEM LIMITE



//ONMOUSEDOWN
function mouseclicadoParaBaixo(){ 
    alert("clicou na tela");
}


//ONMOUSEUP
function mouseclicadoParaBaixo(){ 
    alert("parou de clicar na tela");
}

//ONFOCUS
