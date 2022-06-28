function calculaArea2(){
    //recuperação de entradas de dados
    var base    = document.getElementById("base").value;
    let altura  = document.getElementById("altura").value;

    //processamento
    var area = (base*altura)/2;

    //saida
    document.getElementById("area").value = area;              
}


function somar(){
    //recuperação de entradas de dados
    var num1    = document.getElementById("numero1").value;
    var num2    = document.getElementById("numero2").value;
    var num3    = document.getElementById("numero3").value;
    var num4    = document.getElementById("numero4").value;
    
    //processamento
    var soma = numero1 + numero2 + numero3 + numero4;

    //saida
    document.getElementById("soma").value = soma;
}