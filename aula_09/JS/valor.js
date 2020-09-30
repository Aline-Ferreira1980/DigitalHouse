var valor = parseFloat(gets());

var n100 = 0;
var n50 = 0;
var n20 = 0;
var n10 = 0;
var n5 = 0;
var n2 = 0;
var n1 = 0;

var contador = 0;

if(contador >= n100){
    contador -= n100;
    n100++;
}
else if(contador >= n50){
    contador -= n50;
    n50++;
}
else if(contador >= n20){
    contador -= n20;
    n20++;
}
else if(contador >= n10){
    contador -= n10;
    n10++;
}
else if(contador >= n5){
    contador -= n5;
    n5++;
}

else if(contador >=2){
        contador -= n2;
        n2++;
}
    else{
        contador -= n1;
        n1++;
    }



// var total = (n100100+n5050+n2020+n1010+n55+n22+n1*1);

console.log(n100 + " nota(s) de R$ 100,00");
console.log(n50 + " nota(s) de R$ 50,00");
console.log(n20 + " nota(s) de R$ 20,00");
console.log(n10 + " nota(s) de R$ 10,00");
console.log(n5 + " nota(s) de R$ 5,00");
console.log(n2 + " nota(s) de R$ 2,00");
console.log(n1 + " nota(s) de R$ 1,00");