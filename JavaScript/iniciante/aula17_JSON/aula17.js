//JSON


//OBJETO CARRO
const carro = {
    marca: "Fiat",
    modelo: "Uno",
    motor: ["1.0", "1.4", "1.6"] //FOI CRIADO UMA MATRIZ
}//           0      1      2                          

//CONVERTEU PARA TXT
let texto = JSON.stringify(carro);//PASSOU DE OBJETO PARA UM TXT

document.getElementById("area").innerHTML = carro;
//USANDO O INNERHTML, não foi mostrado o que TEM DENTRO DO OBJETO


//FOI COLOCADO O TXT NO HTML
document.getElementById("area").innerHTML = texto;
//Aqui foi pego a VARIAVEL TEXTO, onde o JSON passou o OBJETO para UM TEXTO

console.log(texto.modelo); //Irá APARECER como INDEFINIDO, pois é um TXT, e não um OBJ

//CONVERTEU PARA OBJ NOVAMENTE
let obj = JSON.parse(texto); //Foi transformado novamente em um OBJ
console.log(obj.motor[1]); //Irá APARECER FIAT
//Como MOTOR é uma ARRAY, ela foi chamada e em seguida foi escolhida uma PROPRIEDADE

//Foi Criado um METODO DO JS para FAZER UMA REQUISIÇÃO ao SITE sem PRECISAR ACESSAR O SITE
const ajax = XMLHttpRequest();
ajax.open('GET', "https://viacep.com.br/ws/01001000/json/");
