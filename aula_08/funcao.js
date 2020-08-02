//console.log(dizerOla);

function dizerOi(nome){
    console.log("Olá "+nome);
}
dizerOi("Aline");

parOuImpar(14);
function parOuImpar (numero){
    if(numero%2 ==0){
        console.log("Número " + numero + " é par!");
    }
    else{
        console.log("Número "+ numero + " é ímpar");
    }
}
  // função anonima
var dizerOla = function(nome){ //sem parametro ele retorna o que é aquela variavel. Nesse caso é uma função.
    return "Olá " + nome;
}

console.log(dizerOla("Aline"));

//função com construtor é pouco utilizada e  inseguro.

//var dizerTchau = new  Function("nome", "console.log('Tchau '+nome);");
//dizerTchau("Aline");

/*function circunferencia(raio){
    function diametro(){ //função aninhada
        return 2*raio  //raio é uma variavel da função pai
    }
    return Math.PI *diametro(); //invocando a função
}
console.log(circunferencia(2));*/

/*function a(callback){
    setTimeout(function(){ callback();}, 3000);
    console.log( 'a vem primeiro' ); 
}
function b(){
    console.log( 'b vem depois' );
}
a(b);
*/
/*function dizerOi(nome){ // costuma-se não utilizar dessa forma. 
    console.log(this);
    console.log("oi "+ nome);
}
dizerOi("Aline"); //os três fazem a mesma coisa.
dizerOi.call({},"Arya"); // pode ser passado somente o parametro null 
dizerOi.apply({}, ["Arya"]); // sempre dentro de um array null*/


//função auto invocada, não é necessário chamar ela
(function(){
    var a =1;
    console.log(a);
})();
//console.log(a);   // só existe dentro do escopo

//declarando um objeto colocando função dentro de um objeto 
/*var obj = {
    nome: "Jhon",
    sobrenome: "Snow",
    idade: 16,
    apresentar: apresentacao
};
function apresentacao(){
    console.log("Olá, eu sou "+ this.nome +' '+ this.sobrenome+ '.');
}

console.log(obj.sobrenome);
obj.apresentar(); */

// Prototype
//String.Prototype.apagar=function(){
 //   return " ";
//}
//console.log("Oi".apagar());

/*var d = new Date();
console.log(d);

var f = new Date(1467827595397);
console.log(f);
*/

var s="The winter is coming. It's really coming!";

// console.log(s.length);
// console.log(s.indexOf('coming'));
// console.log(s.lastIndexOf('coming'));
// console.log(s.slice(4,10));
// console.log(s.slice(4,-8));
// console.log(s.substr(4,6));
// console.log(s.replace("winter", "summer"));
// console.log(s.toUpperCase());
// // console.log(s.toLocaleLowerCase());
//  console.log(s.concat("?","!"));
// // console.log(s.split(" "));
// console.log(s.toLocaleUpperCase().indexOf('COMING'));

// console.log("Olá ".concat("ALine","!"));

// var nome = "Ned,Jhon,Robb,Sansa,Bran,Arya,Rickon";
// var array = nome.split(',');
// console.log(array[6]);

// var array = "Ned Jhon Robb Sansa Bran Arya Rickon".split(' ');
// console.log(array.join(','));
// array.push("Sansa"); // coloca na posição 1º
// array.unshift("Sansa"); // coloca na posição ultima
// console.log(array);


// //retirar elemento
 //var elemento = array.pop();
 //elemento = array.shift();

 //console.log(elemento);
// console.log(array);

// //substituir o elemento
//array[1] = "Jon Snow";

// console.log(array);

// //extrair elementos do array
 //var slice = array.slice(3,5);
 //console.log(slice);

// //retirar e inserir elemeto, qual elemento, quantidade aser retirado após e e incluir mais
 /*var splice = array.splice(1,1,"Arya", "Sansa");
 console.log(splice);
 console.log(array);
*/
// array.splice(3,1); //posicao e numero de elementos a ser removido

// console.log(array);

// array = array.concat(splice, slice); //juntar arrays
// console.log(array);


// let array = [1, 5, 7]

//  array.forEach(function(value, index) {
//    console.log("No índice: " + index + " está o valor: " + value);
//  });


//  let array = [1, 5, 7]

//  array.map(function(numero) { //modificar elementos do array
//      	console.log(numero * 2);
//  });

// let array = [13, 18, 20]

//  console.log(array.filter(function(numero) {      
//          return (numero >= 18);         
//  }));
 

let array = [1, 5, 7]

console.log(array.reduce(function(total, numero) { //reduzir a um número
    	return total + numero;
}));