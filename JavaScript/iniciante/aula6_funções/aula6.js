//FUNÇÕES

function soma(){ //dentro do PARENTESÊS() é onde se coloca os PARAMETROS, VALORES DE SAÍDA/ pode ficar vazio também

}

function soma(valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 20); //Para chamar a função,
//é só chamar o nome dela junto dos PARENTESES colocar os valores a serem calculados

var total = soma(20, 30); //Outra forma de chamar a FUNÇÃO

var valor1 = 20;
var valor2 = 30;

var total = soma(valor1, valor2); //Pode se dar o valor por uma variavel

function cotacaoDoDolar(real, dolar){
    real = 1; 
    dolar = 5.83;
    return real / dolar;
}

var real = 20;
var dolar = 3;

var total = cotacaoDoDolar(real, dolar);

function alerta(){ //Aqui seria uma função de EVENTO, onde foi colocado em um BOTÃO que iniciará esta função
    alert("Olá Pessoal");
}

alerta(); //Assim que se chama uma função/invocando sem precisar de VARIAVEL ou DOCUMENT

function calculoCelsius(valorFahrenheit){
    return (5 / 9) * (valorFahrenheit - 32);
}

var calor = 33;

alert("O valor de: "+ calor +"em Graus Celsius para Fahrenheit é: "+calculoCelsius(33));


function variavel(){
    var x = 2; //Está variavel apenas tem esse valor dentro da FUNÇÃO, também chamada de VARIÁVEL LOCAL
}
