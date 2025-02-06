//METODOS ARRA´S

const pessoa = ["Leonardo", "Lima", 17.5];

//METODO PUSH
pessoa.push("brasileiro"); //Usado para ADICIONAR no FINAL DA LISTA, um item sem que precise MEXER na ARRAY

//OU

pessoa[pessoa.length] = "Casado"; //Outro metodo para ADICIONAR um item NO FINAL DA LISTA


//METODO PARA SABER SE É UMA ARRAY

Array.isArray(pessoa); // IRÁ dar verdadeiro, pois PESSOA é uma ARRAY


//METODO JOIN
document.getElementById("texto").innerHTML = pessoa.join(" & "); //Colocar o e-commerce ENTRE os ITENS junto com um ESPAÇO


//METODO POP
pessoa.pop(); //REMOVE o ULTIMO ITEM da LISTA


//METODO SHIFT
pessoa.shift();
[ "Lima", 17.5]; //quando RETIRADO UM ITEM, a POSIÇÃO dos ITENS MUDA
   //0      1


//METODO UNSHIFT
pessoa.unshift("Dragão Guerreiro");


//METODO DELETE
delete pessoa[0];// A ARRAY não irá MUDAR a POSIÇÃO DOS ITENS
//  1          2      3    ficará como INDEFINIDO
[undefined, "Lima", 17.5];


//METODO SPLICE
pessoa.splice(1, 2, "1º item ADD", "2º item ADD"); //Irá ADD a partir do 1º item,
//em seguida será REMOVIDO 2 ITENS, e então SOBRECREVIDO os 2 itens


//METODO CONCAT
const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lista2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const lista3 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

const superLista = lista1.concat(lista2, lista3); //Irá conctenar as 2 listas em uma só
//Não pode criar uma lista CONCATENADA sé já tem uma PRONTA, por isso tem que CRIAR UMA NOVA VARIAVEL
//Pode ser com quantas Arrays quiser


//METODO SLICE
const jogadores = ["Neymar Jr.", "Endrick", "Rodrygo", "Vinicius Jr.", "Hugo Souza", "Fabricio Bruno", "Eder Militão", "Lucas Moura", "Raphinha", "Wesley", "Vanderson"]
const defesa = jogadores.slice(6, 8); //IRA MOSTRAR OS JOGADORES Fabricio Bruno, Eder Militão


//METODO SORT
const jogOrdem = jogadores.sort();//Colocou os JOGADORES EM ORDEM ALFABETICA


//PARA COLOCAR A ARRAY EM ORDEM NUMERICA
const numeros = [21, 1, 5, 44, 760, 10]

numeros.sort(function (a, b){ return a - b});//Colocará em ordem NUMERICA


//METODO MAIOR NUMERO
function maiorNumero(array){
    return Math.max.apply(null, array);
}

document.getElementById("texto").innerHTML = maiorNumero(numeros);//Mostrará o MAIOR NUMERO DA ARRAY


//METODO MENOR NUMERO
function menorNumero(array){
    return Math.min.apply(null, array);
}

document.getElementById("texto").innerHTML = menorNumero(numeros);//Mostrará o MENOR NUMERO DA ARRAY