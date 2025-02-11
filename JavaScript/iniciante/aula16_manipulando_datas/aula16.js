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