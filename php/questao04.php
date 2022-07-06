<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Questão 04</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="exemplos.css" rel="stylesheet">
    </head>
    <body>

        <?php
                //recuperação de variáveis 
                $salarioAtual = $_GET["salarioAtual"];
                $porcentagem = $_GET["porcentagem"];                         

                //processamento
                $novoSalario = $salarioAtual + $salarioAtual*$porcentagem/100;

                //saída
                echo "O novo salário é R$ " . $novoSalario;

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>