<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Questão 01</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="exemplos.css" rel="stylesheet">
    </head>
    <body>

        <?php
                //recuperação de variáveis 
                $numero1 = $_GET["numero1"];
                $numero2 = $_GET["numero2"];
                $numero3 = $_GET["numero3"];
                $numero4 = $_GET["numero4"];                

                //processamento
                $soma = $numero1 + $numero2 + $numero3 + $numero4;

                //saída
                echo "A soma é " . $soma;

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>