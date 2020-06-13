<?php
require_once("./conectarBD.php");
$id = $_GET['id_pro'];

$obj = new \stdClass();

try {
    $consulta = conectarBD::conexion()->query("SELECT arc_fis_pro FROM tabla_proyectos WHERE id_pro=$id");
    conectarBD::conexion()->query("DELETE FROM tabla_proyectos WHERE id_pro=$id");
    unlink("./pfd/" . $consulta['arc_fis_pro']);
    $obj->estado = true;
} catch (exception $e) {
    echo $e;
    $obj->estado = false;
} finally {
    echo json_encode($obj);
}
