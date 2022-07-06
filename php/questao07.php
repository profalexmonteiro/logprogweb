<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>Questão 07</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="exemplos.css" rel="stylesheet">
    </head>
    <body>

        <?php

                $pi = 3.1415;
                //recuperação de variáveis 
                $raio = $_GET["raio"];                
             
                //processamento
                $diametro = 2 * $raio;

                $perimetro = 2 * $pi * $raio;

                $area = $pi * pow($raio,2);

                $volume = 4 * $pi * pow($raio,3)/3;

                //saída
                echo "As medidas são: <br>
                        Diâmetro: " . $diametro . " m<br>" .
                        "Perímetro: " . $perimetro . " m<br>" .
                        "Área: " . $area . " m²<br>" .
                        "Volume: " . $volume . " m³<br>";

        ?>

        <script src="exemplos.js"></script>

    </body>
</html>