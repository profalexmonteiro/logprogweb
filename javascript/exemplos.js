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
    var numero1    = parseInt( document.getElementById("numero1").value ); 
    var numero2    = parseInt( document.getElementById("numero2").value );
    var numero3    = parseInt( document.getElementById("numero3").value );
    var numero4    = parseInt( document.getElementById("numero4").value );
    
    //processamento
    var soma = numero1 + numero2 + numero3 + numero4;

    //saida
    document.getElementById("resultado").value = soma;
}

function mediaArimetica(){
    //recuperação de entradas de dados
    var numero1    = parseInt( document.getElementById("nota1").value ); 
    var numero2    = parseInt( document.getElementById("nota2").value );
    var numero3    = parseInt( document.getElementById("nota3").value );
    var numero4    = parseInt( document.getElementById("nota4").value );
    
    //processamento
    var media = (numero1 + numero2 + numero3 + numero4)/4;

    //saida
    document.getElementById("media").value = media;
}

function mediaPonderada(){
    //recuperação de entradas de dados
    var nota1    = parseFloat( document.getElementById("nota1").value ); 
    var peso1    = parseFloat( document.getElementById("peso1").value );
    var nota2    = parseFloat( document.getElementById("nota2").value );
    var peso2    = parseFloat( document.getElementById("peso2").value );
    
    //processamento
    var media = (nota1 * peso1 + nota2 * peso2)/(peso1 + peso2);

    //saida
    document.getElementById("media").value = media.toFixed(2);
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