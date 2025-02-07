//LAÇOS DE REPETIÇÃO 

// for (let i = 0;  i < 1000;  i++) { //No 1º parametro está dizendo que o LAÇO começa em 0; 
// // Depois ele pergunta se 0 é menor que 1000, Sí é VERDADE,
// // então ele começará a ACRESCENTAR de 1 em 1 até chegar em 1000 e ficar como FALSO
//     document.getElementById("texto").innerHTML += i +", ";
//     //NÃO pode ser usado o =(IGUAL), pois ele irá dar apenas o ULTIMO VALOR do LAÇO, por isso +=
// }



//PARA QUE NÃO PRECISE ATUALIZAR O ANO CONSTANTEMENTE, é preciso usar a FERRAMENTA DO JS
var ano = new Date().getFullYear();//Isso sempre atualizara o ano sem que precise trocar

for (let i = ano; i >= 1920; i--){
    document.getElementById("ano").innerHTML += "<option value'"+i+"'>"+i+"</option>";
    //Aqui foi pedido para ADICIONAR no campo SELECT, coloca dentro dele, de forma REPETIDA, 
    //Enquanto a CONDIÇÃO ACONTECER que ADICIONE a A OPTION
    //onde dentro do VALOR foi usado ASPAS SIMPLES para não achar que terminou ali a STRING,
    //E foi CONCATENADO 2 VEZES o ANO e depois fechado a TAG OPTION
}


//OUTRO EXEMPLO

const carros = ["Gol Quadrado", "Ford Ka", "Opala", "Caravan", "Parati", "Voyage", "Brasilia", "Honda Civic 1995", "Monza", "Chevette"];

var tamanho = carros.length; //Necessario para percorrer a MATRIZ

for (i = 0; i < tamanho; i++){
    document.getElementById("texto").innerHTML += carros[i];
    //Esse laço faz com que ele PERCORRA A MATRIZ 
}


