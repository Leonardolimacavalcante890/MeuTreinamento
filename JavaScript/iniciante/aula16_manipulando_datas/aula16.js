//MANIPULAÇÃO DE DATAS

//COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);

//2 METODOS PARA PEGAR O ANO ATUAL
let ano = new Date().getFullYear();
let ano2 = data.getFullYear();
console.log(ano);
console.log(ano2); 


//2 METODO PARA PEGAR O MES ATUAL / ELE É COMO UMA ARRAY, começando a CONTAR a partir do MES DE JANEIRO = 0
let mes1 = new Date().getMonth();
let mes2 = data.getMonth();
console.log(mes1);
console.log(mes2);
//                 0           1         2        3       4       5       6        7          8           9           10         11
const meses = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let mesEscrito = meses[data.getMonth()];
// Aqui foi puxado a MATRIZ meses, e dentro dela irá puxar o GETMONTH, que como retorna em forma de número, então se for número 2, será MARÇO
console.log(mesEscrito);


//DIA DO MÊS 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);


//PEGAR O DIA DA SEMANA 0 ATÉ 6
let semana = data.getDay();
//                    0          1         2           3           4           5          6
const diaSemana = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let semanaEscrita = diaSemana[data.getDay()];
console.log(semanaEscrita);
//MESMA FORMA PARA SABER QUE MÊS É


//PEGAR A HORA 0 ATÉ 23
let hora = data.getHours();
console.log(hora);


//PEGAR OS MINUTOS 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

console.log("Agora são: "+ hora +":"+ minutos);


//PEGAR SEGUNDOS 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);



//PEGAR MILISEGUNDOS 0 ATÉ 999
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);


//PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MES / ANO
let dataBR = data.toLocaleString('pt-BR'); //O METODO TOLOCALESTRING é feito para SABER o LOCAL em que estamos e O PADRÃO de HORÁRIO
console.log(dataBR);
//Se quiser pegar APENAS A DATA é necessário coloca em um OBJETO{}, passando o DATESTYLE: "SHORT"
let dataBR2 = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(dataBR2);
//Caso queira pegar APENAS o HORÁRIO é necessário coloca em um OBJETO{}, passando o TIMESTYLE: "SHORT"
let dataBR3 = data.toLocaleString('pt-BR', {timeStyle: 'short'});
console.log(dataBR3);


//PEGANDO OS VALORES SEPARADOS
let date = new Date();
let dia = date.getDate();
let mes = date.getMonth() + 1; //O 1 foi usado para que o valor NÃO de 0 por CAUSA DA MATRIZ
let year = date.getFullYear();

let BR = dia +"/"+ mes +"/"+ ano;
console.log(BR);


//COMPARAR DATAS MAIOR O MENOR EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2024, 11, 23);
//DENTRO DO NEW DATE(SERÁ COLOCADO A DATA DE VENCIMENTO, COM PADRÃO ANO / MES / DIA) com o mês que o JS faz 0 é JANEIRO e assim por dinte

if(hoje > vencimento){
    console.log("Você está atrasado, sua fatura já venceu");
}else{
    console.log("Está tudo bem, sua fatura ainda não venceu");
}


//DIFERENÇA ENTRE 2 DATAS EM DIAS

var dataInicial = new Date();
var dataFinal = new Date(2025, 11, 31); //Foi colocado o FIM DO ANO para que possa CALCULAR quanto tempo FALTA

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();
//O GETTIME é usado para TRANSFORMAR a DATA em MILISEGUNDOS / ele tem que ser usado para fazer o CALCULO

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));
//CEIL É USADO PARA ARREDONDAR os MILISEGUNDOS
//É ONDE SERÁ FEITO UMA CONTA ONDE DE CONVERSÃO DE MILESIMOS DE SEGUNDOS PARA DIAS
//SENDO = (HORA * MINUTO * SEGUNDOS * MILESIMOS)
console.log(diferencaDias +" dias");