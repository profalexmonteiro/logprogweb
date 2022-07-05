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
    var numero1    = document.getElementById("numero1").value;
    var numero2    = document.getElementById("numero2").value;
    var numero3    = document.getElementById("numero3").value;
    var numero4    = document.getElementById("numero4").value;
    
    //processamento
    var soma = numero1 + numero2 + numero3 + numero4;

    //saida
    document.getElementById("soma").value = soma;
}

function somarAlert(){
    //recuperação de entradas de dados
    var numero1    = parseInt( window.prompt("Digite o número 1: ","0") );
    var numero2    = parseInt( window.prompt("Digite o número 2: ","0") );
    var numero3    = parseInt( window.prompt("Digite o número 3: ","0") );
    var numero4    = parseInt( window.prompt("Digite o número 4: ","0") );
    
    //processamento
    var soma = numero1 + numero2 + numero3 + numero4;

    //saida
    window.alert("A soma é " + soma);
}