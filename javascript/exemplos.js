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

function calculaNovoSalario(){

       //recuperação de entradas de dados
       var salarioAtual   = parseFloat( document.getElementById("salarioAtual").value ); 
       var porcentagem    = parseFloat( document.getElementById("porcentagem").value  );       
       
       //processamento
       var novoSalario = salarioAtual + (salarioAtual * porcentagem)/100;
   
       //saida
       document.getElementById("novoSalario").value = novoSalario.toFixed(2);
    
}

function calculaSalarioLiquido(){

    //recuperação de entradas de dados
    var salarioBase     = parseFloat( document.getElementById("salarioBase").value    ); 
    var dependentes     = parseFloat( document.getElementById("dependentes").value    );      
    var salarioFamilia  = parseFloat( document.getElementById("salarioFamilia").value );
    var imposto         = parseFloat( document.getElementById("imposto").value        ); 
    
    //processamento
    var salarioBruto = salarioBase + dependentes * salarioFamilia;

    var salarioLiquido = salarioBruto - salarioBruto*imposto/100;

    //saida
    document.getElementById("salarioLiquido").value = salarioLiquido.toFixed(2);
 
}

function calculaAumento(){

    //recuperação de entradas de dados
    var valorAntigo     = parseFloat( document.getElementById("valorAntigo").value    ); 
    var novoValor       = parseFloat( document.getElementById("novoValor").value    );          
    
    //processamento
    var porcentagem = (novoValor - valorAntigo)*100/valorAntigo;

    //saida
    document.getElementById("aumentop").value = porcentagem.toFixed(2);
 
}

function calcularMedidas(){
    //recuperação de entradas de dados
    var raio     = parseFloat( document.getElementById("raio").value    ); 
    const pi = 3.1415;
    
    
    //processamento
    var diametro = 2 * raio;

    var perimetro = 2 * pi * raio;

    var area = pi * Math.pow(raio,2);

    var volume = 4 * pi * Math.pow(raio,3)/3;  

    //saida
    document.getElementById("diametro").value = diametro.toFixed(2);
    document.getElementById("perimetro").value = perimetro.toFixed(2);
    document.getElementById("area").value = area.toFixed(2);
    document.getElementById("volume").value = volume.toFixed(2);    

}

function converterVelocidade(){
  //recuperação de entradas de dados
  var velocidadeKPH    = parseFloat( document.getElementById("velocidadeKPH").value ); 
  
  //processamento
  var velocidadeMPS = velocidadeKPH/3.6;

  //saida
  document.getElementById("velocidadeMPS").value = velocidadeMPS.toFixed(2);
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