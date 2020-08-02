function calcular(){
    var operacao = document.getElementById('operacao').value;

    //alert (opereacao);
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    //forçando o tipo de variavel;
    // num1=parseFloat(num1);
    // num2=parseFloat(num2);

    if (num1 =='' || num1 == null){
        alert('Favor digitar um número valido para operação (num1)');
        return false;
    }
    if (num2 =='' || num2 == null){
        alert('Favor digitar um número valido para operação (num2)');
        return false;
    }
    var resultado = null;
    //forçando o tipo de variavel 
    num1=parseFloat(num1);
    num2=parseFloat(num2);

    switch(operacao){
        case '1': //subtracao
        resultado= num1-num2;
        break;

        case '2'://soma
        resultado= num1+num2;
        break;

        case '3': //multiplicação
        resultado= num1* num2;
        break;

        case '4'://divisao
        resultado=num1/num2;
        break;

        default: alert('A opção é inválida!');
        return false;

    }
    document.getElementById('resultado').value=resultado;
}