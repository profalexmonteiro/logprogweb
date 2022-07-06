<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Questão 03</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="exemplos.css" rel="stylesheet">
    </head>
    <body>

        <?php
                //recuperação de variáveis 
                $nota1 = $_GET["nota1"];
                $peso1 = $_GET["peso1"];
                $nota2 = $_GET["nota2"];
                $peso2 = $_GET["peso2"];                

                //processamento
                $media = ($nota1 * $peso1 + $nota2 * $peso2)/($peso1 + $peso2);

                //saída
                echo "A média ponderada é " . round($media,2);

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>