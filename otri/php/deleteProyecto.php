<?php
    require_once("./conectarBD.php"); 
    $id = $_GET['id'];

    $obj = new \stdClass();

    try {
        $consulta = conectarBD::conexion()->query("DELETE FROM tabla_proyectos WHERE cod_pro=$id");
        $obj->estado = true;
    } catch (exception $e) {
        echo $e;
        $obj->estado = false;
    } finally {
        echo json_encode($obj);
    }
?>