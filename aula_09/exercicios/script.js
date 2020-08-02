function Cumprimentar(){
    alert ("Olá");
}

function trocaDeCor(){
    document.getElementById('trocar').style.backgroundColor= 'green';
}

function passarMouse(){
    alert("Estou vendo a foto");
    document.getElementById('aumentar').style.value= width='500px'
}

function clickPassaro(id){
   
    id.innerHTML = alert("Estou clicado no pássaro"); 
    
}
 function clickPassaroVermelho(){
    document.getElementById('passaroFundoVermelho').addEventListener("click", corVermelho, true);
    
 }
 function corVermelho(){
    clickPassaroVermelho.style.background = "red";
 }

 function naoEnviar(){
     alert("Não é possivel enviar!");
 }

 
 setTimeout(function(){ alert("Tempo Esgotado"); }, 10000);

var tempo = 10;
 setTimeout(function(){ for(var i=0; i<tempo; i++){alert("Hora do Intervalo");} }, 5000);
 tempo(i);

 

 