<?php
require_once("./conectarBD.php");

$search = $_GET["id"];

if(!empty($search)){
    $consulta = conectarBD::conexion()->query("SELECT * FROM tabla_proyectos WHERE tit_pro LIKE '$search%' || inv_pro LIKE '$search%' || ent_eje_pro LIKE '$search%' || || fac_pro LIKE '$search%'");
    
    $lista = array();
    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)){
        array_push($lista, $filas);
    }

    echo json_encode($lista);
}