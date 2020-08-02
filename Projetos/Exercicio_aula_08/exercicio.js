/*1.	Crie uma função que recebe um número e verifica se ele é par ou ímpar. */ 

// function parOuImpar(numero){
//     if (numero%2 == 0){
//         console.log("Número "+ numero+ " é par");
//     }else{
//         console.log("Número "+ numero+ " é ímpar")
//     }
// }
//parOuImpar(10);


/**2.	Crie uma arrow function que receba um número e verifique se é primo. */

var exFuncao = (numero) => {
    if (numero === 2 || numero % 2 === 1) {
        console.log(numero + " é um número primo!")
    } else {
        console.log(numero + " não é um número primo!")
    }
}
exFuncao(16);


/** 3.	Crie uma função que imprime de 10 até 1 e depois imprime na tela “feliz ano novo” através de uma callback*/

// function contagemRegressiva(callback){
//     setTimeout(function(){
//         callback();
//     },  2000);
   
//     let i = 11;
//     while(i>1){
//         console.log(i-1);
//         i--;
//     }
// }
// function anoNovo(){
//     console.log('Feliz Ano Novo!!!')
// }
// contagemRegressiva(anoNovo);

/*4.	Faça o mesmo utilizando Promise com concatenação de then*/

const contagemRegressivaAsync= new Promise((resolve, reject)=>{
        setTimeout(function(){
            let i= 11;
            while(i>1){
                resolve(" ");
            console.log(i-1);
            i--;
        }},2000);
        
    });
const anoNovoAsync = new Promise(( resolve, reject)=>{
    console.log('Feliz Ano Novo!')
});

contagemRegressivaAsync.then(function(res){
    return console.log(res)})
    .then(function() {return anoNovoAsync})
    .then(function(res) {return console.log(res)});






    /*5-Agora repita a função utilizando o método async/await
*/

const teste01 = new Promise((resolve, reject) => {
    setTimeout( function() {
        let contador = 0;
        let i = 10;
        while (i > contador) {
        resolve("");
        console.log(i);
        i--;
    }}, 3000)
})

const test02 = new Promise((resolve, reject) => {
    resolve('Feliz Ano Novo');
})

const asyncFunction = async () => {
 
    try{
        const firstPart = await test01;
        console.log(firstPart)
        const secondPart = await test02S;
        console.log(secondPart);
    }
    catch(err){
        console.log(err);
    }
}

asyncFunction();


/*
6-Crie um array com as seguintes notas [5.3, 4.7, 8.5, 7.1,
6.4, 9.2, 9.8, 5.5, 7.4, 7.0], construa uma função
para imprimir apenas as notas acima de 7
*/

let notasArray = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];
notasArray.forEach(function(value, index) {
    if(value > 7) {
        console.log(value);
    }
});

/*
7-Crie um array de objetos onde cada objeto será um produto
de supermercado e terá o nome do produto e o seu
respectivo preço, agora construa uma função que some
todos os valores e te devolva o total.
*/

const produtos = [
    { valor: 2.99, id: 1, categoria: 'limpeza', name: 'Sabão' },
    { valor: 3.40, id: 2, categoria: 'alimento', name: 'Óleo' },
    { valor: 4.50, id: 3, categoria: 'alimento', name: 'Feijão' },
];

const total = produtos.reduce((acumulado, produto) => acumulado + produto.valor, 0);

console.log("A soma dos produtos é: " + total);
/*
8-Em uma escola ficou definido que os alunos do 8º ano
terão aulas de história e os alunos do 9º terão aulas
de física às quartas-feiras. Você deve criar uma
função que receba um array de objetos contendo nome
e série de cada aluno e atribua a sua respectiva
disciplina da quarta-feira. (O array de alunos deve
ser criado como você desejar contanto que contenha
pelo menos 5 alunos).
*/

function exam(array) {
    array[1] = "Física"
    array[3] = "Física"
    array[5] = "Física"
    array[7] = "História"
    array[9] = "História"
    array[11] = "História"
    console.log(array);
}
exam(["Fernando 9º", "", "Joana 9", "", "Marcelo 9º", "", "Pablo 8º", "", "Iara 8º", "", "Trevis 8º", ""]);