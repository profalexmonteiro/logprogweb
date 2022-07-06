<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Questão 02</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="exemplos.css" rel="stylesheet">
    </head>
    <body>

        <?php
                //recuperação de variáveis 
                $salarioBase = $_GET["salarioBase"];
                $dependentes = $_GET["dependentes"];
                $salarioFamilia = $_GET["salarioFamilia"];
                $imposto        = $_GET["imposto"];                

                //processamento
                $salarioBruto = $salarioBase + $salarioFamilia * $dependentes;

                $salarioLiquido = $salarioBruto - $salarioBruto*$imposto/100;

                //saída
                echo "Salário líquido é R$ " . $salarioLiquido;

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>