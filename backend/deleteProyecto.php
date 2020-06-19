<?php
require_once("./conectarBD.php");
$id = $_GET['id'];

$obj = new \stdClass();

try {
    $consulta = conectarBD::conexion()->query("SELECT arc_fis_pro FROM tabla_proyectos WHERE id_pro=$id");
    conectarBD::conexion()->query("DELETE FROM tabla_proyectos WHERE id_pro=$id");
    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC))
        if ($filas['arc_fis_pro']) {
            unlink("./pdf/" . $filas['arc_fis_pro']);
            break;
        }
    $obj->estado = true;
} catch (exception $e) {
    echo $e;
    $obj->estado = false;
} finally {
    echo json_encode($obj);
}
