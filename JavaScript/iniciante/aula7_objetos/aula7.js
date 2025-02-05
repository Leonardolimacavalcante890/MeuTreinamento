//OBJETOS



const carro = { //Para colocar um conjunto de VALORES, se abre CHAVES
    marca: "Audi", 
    modelo: "RS5", 
    ano: 2018, 
    cor: "azul-escuro", 
    placa: "12D4A6F", 
    Chassi: "4x4",
    buzina: function(){ //Foi criado um MÉTODO chamado BUZINA, onde é feito uma FUNÇÃO
        alert("BURRRRRRRRRRRRRRRRRRRRRRRRRRRROOOOOOOOOOO");
    },
    completo: function(){
        return "A marca do carro é "+ this.marca +" e o modelo é "+ this.modelo; //Para CHAMAR uma PROPRIEDADE DENTRO do OBJETO, é necessário usar o THIS e PONTO
    } 
}; 
//Foi definido o OBJETO CARRO com as propriedades MARCA, MODELO, ANO, COR, PLACA E CHASSI
//É comum usar CONSTANTE(CONST) para definir um OBJETO e deixar ele em forma de COLUNA
//Chamado de OBJETO LITERAL, pois já define as propriedades que ele terá

document.getElementById("texto").innerHTML = carro; //Foi chamado o objeto

console.log(carro.marca); //Aqui foi procurado uma PROPRIEDADE ESPECIFICA no OBJETO, com o PONTO(.)

console.log(carro["marca"]); //Aqui será mostrado o conteúdo dentro daquela MARCA

carro.buzina(); //Assim que se chama uma FUNÇÃO DENTRO de um OBJETO

console.log(carro.completo());

carro.completo();