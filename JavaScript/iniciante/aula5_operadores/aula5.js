//OPERADORES

//OPERADORES ARITMETICOS(MATEMATICOS)

var valor1, valor2, total;

valor1 = 5;
valor2 = 16;

total = valor1 + valor2; 
// Operador de SOMA(+) é ARITMETICO
// operador de IGUAL(=) é de ATRIBUIÇÃO 

total = valor1 - valor2;
// Operador de MENOS(-) é ARITMETICO

total = valor1 * valor2;
// Operador de MULTIPLICAÇÃO(*) é ARITMETICO

total = valor1 / valor2;
// Operador de DIVISÃO(/) é ARITMETICO

total = ++valor1;
// Operador de INCREMENTO(++) é ARITMETICO / ACRESCENTA +1 do valor atual = 5+1

total = --valor1;
// Operador de DECREMENTO(--) é ARITMETICO / RETIRA -1 do valor atual = 5-1

alert('O valor atual do valor1 é: '+ valor1); //O simbolo de + é de SEQUÊNCIA
//OS VALORES USADO DECREMENTO E INCREMENTO foram ATUALIZADOS

// ESSES ULTIMOS 2 são bons para fazer funções, ex: itens de um carrinho



//OPERADORES DE ATRIBUIÇÃO

valor1 = valor1 + valor2; //Forma ineficiente de ATRIBUIR UM NOVO VALOR
valor1 += valor2; //Aqui diz que o VALOR1 MAIS(+) o VALOR2 fará com que de um NOVO VALOR ao VALOR1
//FORMA EFICIENTE

valor1 = valor1 - valor2; //FORMA INEFICIENTE
valor1 -= valor2; //FORMA EFICIENTE 

valor1 = valor1 * valor2; //FORMA INEFICIENTE
 valor1 *= valor2; //FORMA EFICIENTE

valor1 = valor1 / valor2; //FORMA INEFICIENTE
valor1 /= valor2; //FORMA EFICIENTE 



//OPERADORES DE SEQUENCIA/CONCATENAÇÃO: JUNTAR TEXTOS/STRINGS

valor1 = "Leonardo ";
valor2 = "Lima do Carmo Cavalcante";

total = valor1 + valor2; //O sinal de SOMA virá um CONCATENADOR, pois ele está JUNTANDO TEXTO



//OPERADORES DE COMPARAÇÃO: USADOS EM DECLARAÇÕES LÓGICAS/VERDADEIRO OU FALSO

valor1 = 8;  
valor2 = "10";

total = (valor1 == valor2); //Operador de Comparação IGUAL(==), igual ao VALOR, NÃO ao TIPO DE VALOR

total = (valor1 === valor2); //Operador de Comparação IDENTICO(===),
//  tem que ser IDENTICO no TIPO DE VALOR e INDENTICO no VALOR

total = (valor1 != valor2); //Operador de Comparação de DIFERENÇA/NÃO IGUAL(!=),
//  tem que ser DIFERENTE no VALOR

total = (valor1 !== valor2); //Operador de Comparação de DIFERENÇA/NÃO IDENTICO(!==),
//  tem que ser DIFRENTE no TIPO DE VALOR e DIFERENTE no VALOR  

total = (valor1 < valor2); //Operador de Comparação MENOR(<),
// O valor1 tem que ser MENOR que o valor2

total = (valor1 > valor2); //Operador de Comparação MAIOR(>),
// O valor1 tem que ser MAIOR que o valor2

total = (valor1 <= valor2); //Operador de Comparação MENOR ou IGUAL(<=),
// O valor1 tem que ser MENOR ou IGUAL ao valor2

total = (valor1 >= valor2); //Operador de Comparação MAIOR ou IGUAL(<=),
// O valor1 tem que ser MAIOR ou IGUAL ao valor2



//OPERADORES DE CONDIÇÃO/TERNÁRIO

var idade, eleitor;

idade = 18;
eleitor = // Aqui está falando que para a variavél ELEITOR uma condição TERNARIA
(idade < 18) //SE IDADE for MENOR que 18
? "Não, eleitor" //Primeiro resultado: "Não, eleitor"/ TRUE
: "Sim, eleitor"; //SENÃO //Segundo resultado: "Sim, eleitor"/ FALSE

//FORMA CORRETA ESCRITA

eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";



//OPERADORES LÓGICOS

var idade, eleitor, resultado;
idade = 28;

eleitor = (idade < 18) ? "Não, eleitor" : "Sim, eleitor";

resultado = (idade > 60 && idade < 70); //Operador de Lógica E(&&)
//Se idade for maior que 60 E menor que 70, retornará TRUE se for e FALSE se não for

resultado = (idade == 60 || idade == 70); //Operador de Lógica OU(||)
//Se idade for igual a 60 ou igual a 70, Se algumas das CONDIÇÕES derem TRUE, ele retornará TRUE, se não será FALSE

resultado = !(idade == 60); //Operador de Lógica NÃO(!)
//O Simbolo significa ALCONTRARIO do que está alí dentro, se não der 60 é TRUE