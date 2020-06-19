<?php
    require_once("./conectarBD.php");
    $consulta = conectarBD::conexion()->query("SELECT * FROM proyectos");

    $valor = $_GET['val'];

    $cont = 0;
    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)){
        if($filas['pro_tot_efe'] > $valor){
            $cont++;
        }
    }

    $obj = new \stdClass();
    $obj->cantidad = $cont;

    echo json_encode($obj);
?>