//VARIAVEIS
//VAR pode ser REDECLARADA

var pote = "Bombom"; //O valor da variável é BOMBOM
var segundoPote = 1; // O valor da variável é 1
var terceiroPote = 10*10; // O valor da variável é 10x10

//Outra forma de atribuir o valor a elas seria

var first,second,third; // Foi nomeado o nome das TRÊS VARIAVEIS/ DECLARAÇÃO

first = 1; // Dado o valor da primeira variavel
second = "dois"; // Dado o valor da segunda variavel
third = 3; // Dado o valor da terceira variavel

//OUTRO EXEMPLO

var nome, sobrenome, nomeCompleto;

nome = "Nicole";
sobrenome = "Santos do Carmo";
nomeCompleto = nome + " " + sobrenome; // O JS leva a soma na forma literaria e junta as 2 variaveis, 
// porém com as ASPAS com ESPAÇO EM BRANCO, faz com que eles se separem.

document.getElementById("texto").innerHTML = nomeCompleto;

var x = 17; //Aqui continuava em 10

{
    var x = 18; // Aqui trocou para 18
}
document.getElementById("texto").innerHTML = x; //Aqui será 18


//LET não pode ser REDECLARADO / Bom para FAZER FUNÇÕES

let nome, sobrenome, idade, cpf, rg;
let nome; //Dará ERRO pois já foi DECLARADO está variável

let numero = 44; // Aqui será do Scopo Geral, "Universal"
{
    let numero = 22; // Aqui apenas terá esse número dentro desse bloco
}

document.getElementById("texto").innerHTML = numero; //Aqui dará o número 44


//CONST é uma constante, é uma coisa que nunca pode mudar, em lugar nenhum, nem mesmo em bloco 

const nuncaMuda = "NUNCA MUDA";

{
    const nuncaMuda = "Mudou?";
}

// const nuncaMuda = "Será?";

document.getElementById("texto").innerHTML = nuncaMuda; // O resultado é "NUNCA MUDA" ou ERRO;