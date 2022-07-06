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
                $numero1 = $_GET["nota1"];
                $numero2 = $_GET["nota2"];
                $numero3 = $_GET["nota3"];
                $numero4 = $_GET["nota4"];                

                //processamento
                $media = ($numero1 + $numero2 + $numero3 + $numero4)/4;

                //saída
                echo "A média é " . $media;

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>