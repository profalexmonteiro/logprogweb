function calculaArea2(){
    //recuperação de entradas de dados
    var base    = document.getElementById("base").value;
    let altura  = document.getElementById("altura").value;

    //processamento
    var area = (base*altura)/2;

    //saida
    document.getElementById("area").value = area;              
}