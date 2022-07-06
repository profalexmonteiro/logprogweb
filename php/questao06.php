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
                $valorAntigo = $_GET["valorAntigo"];
                $novoValor = $_GET["novoValor"];                

                //processamento
                $aumento = ($novoValor - $valorAntigo)*100 / $valorAntigo;

                //saída
                echo "A aumento foi de " . $aumento . "%";

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>