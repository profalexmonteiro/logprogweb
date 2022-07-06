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
                $velocidadeKPH = $_GET["velocidadeKPH"];                       

                //processamento
                $velocidadeMPS = $velocidadeKPH/3.6;

                //saída
                echo "A velocidade é " . round($velocidadeMPS,2) . " m/s";

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>