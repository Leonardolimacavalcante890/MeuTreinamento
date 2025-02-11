//CLASSES


class Carro{ //Isto é uma FABRICA DE CARRO, a CLASS seria a FABRICA 
    constructor(valor1, valor2, valor3){ //DENTRO DOS PARENTESES irá passar as MATERIAS PRIMAS do CARRO
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina(){ //Um METODO(FUNÇÃO)
        return this.marca + " buzinou: BIIIIIIIIIIIIIIII"; //Para saber qual carro está BUZINANDO foi necessario CONCATENAR junto o MODELO do CARRO
    }
}
//O jeito CORRETO de começar uma CLASSE é sempre començando com LETRA MAIUSCULA 

const gol = new Carro("Gol GTI", "1.8", 2004);

console.log(gol);
//se quiser pegar alguma informação especifica, é necessario colocar JUNTO O PONTO e a PROPRIEDADE desejada
console.log(gol.buzina());

gol.ano = 2014
//ATUALIZA a PROPRIEDADE ANO do gol