<?php
    require_once("./conectarBD.php");
    $consulta = conectarBD::conexion()->query("SELECT * FROM tabla_proyectos");

    $lista = array();

    while ($filas = $consulta->fetch(PDO::FETCH_ASSOC)){
      if ($_GET['estado'] == $filas['est_pro']){
        array_push($lista, $filas);
      }
    }

    echo json_encode($lista);
?>