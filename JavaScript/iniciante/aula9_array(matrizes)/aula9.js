//ARRAY(MATRIZES)

//JEITO ERRADO DE FAZER UMA LISTA
var item1 ="arroz";
var item2 = "feijão";


const lista = [
    "arroz",
    "feijão", 
    "macarrão", 
    "leite"
]; //Array LITERAL, aquela ARRAY que já tem seus valores / MELHOR JEITO de fazer uma ARRAY/ ARRAY é um tipo ESPECIAL de OBJETO
// ARRAY pode armazenar qualquer coisa, seja uma FUNÇÃO, um OBJETO e assim por diante


alert("O item é: "+ lista[0]); //Aparecerá o ARROZ, pois cada item tem sua POSIÇÃO

//OUTRA FORMA DE FAZER UMA ARRAY
const lista2 = [];
lista2[0] = "Arroz";
lista2[1] = "Feijão";
lista2[2] = "Pessego";
lista[3] = "Peito de Frango";

lista[0] = "Banana"; //Foi dado um novo valor para a lista, especificamente para a posição 0
alert(lista[0]);

var doc = document.getElementById("texto").innerHTML = lista; //Será mostrado a lista trocando ARROZ por BANANA na posição 0

//DIFERENÇA DE UMA ARRAY e UM OBJETO

const pessoa = ["Leonardo", "Lima", 17.5];//ARRAY, bom quando precisa LIDAR com DADOS

const pessoa1 = {nome:"Leonardo", sobrenome:"Lima", idade: 17.5}; //OBJETO, bom para coisas MAIS SIMPLES, como ITENS

pessoa1.nome; //OBJETO

pessoa[0]; //ARRAY

// SABER QUANTOS ITENS TEM DENTRO DE UMA ARRAY
const itens = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

alert(itens.length); //Usado para saber quantos ITENS tem DENTRO da MATRIZ

alert(itens[itens.length - 1]);// Saber o que está escrito na ultima posição

