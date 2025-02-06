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
function limpaTexto(){
    document.getElementById("campoTexto").value = ""; //Como é um campo de texto, "ou por ser INPUT", não será innerHTML, mas sim VALUE
    //As ASPAS VAZIAS é para mostrar que quando FOCADO ficará VAZIO
}


//ONCHANGE
function mudar(){
    let muda = document.getElementById("campoTexto1");
    muda.style.borderColor = "red";
}


//ONBLUR
function desfocado(){
    alert("Acionou o evento ONBLUR");
    document.body.style.backgroundColor = "black"; 
}


//ONKEYPRESS
function teclPressionada(){
    let input = document.getElementById("campoTexto3").value; //Está pedindo o VALOR escrito no CAMPO
    console.log(input); //REPASSAR o que foi DIGITADO 
}


//ONKEYDOWN
function teclDespressionada(){
    let input = document.getElementById("campoTexto3").value; //Está pedindo o VALOR escrito no CAMPO
    console.log(input); //REPASSAR o que foi DIGITADO 
}


//ONKEYUP
function teclado(){
    let input = document.getElementById("campoTexto3").value; //Está pedindo o VALOR escrito no CAMPO
    console.log(input); //REPASSAR o que foi DIGITADO 
}


//ONLOAD
function corpo(){
    alert("A pagina foi carregada");
}


//ONRESIZE
function redimencionamento(){
    alert("Houve um REDIMENCIONAMENTO");
}