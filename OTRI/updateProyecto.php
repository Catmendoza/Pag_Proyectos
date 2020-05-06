<?php
    require_once("./conectarBD.php");

    $id = $_GET['id'];
    $dato = $_GET['dato'];
    $valor = $_GET['valor'];

    $obj = new \stdClass();

    try {
        conectarBD::conexion()->query("UPDATE tabla_proyectos SET $dato=$valor WHERE pro_cod = $id");
        $obj->estado = true;
    } catch (exception $e) {
        $obj->estado = false;
    } finally {
        echo json_encode($obj);
    }
?>