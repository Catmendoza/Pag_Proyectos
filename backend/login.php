<?php
  header("Content-Type: application/json"); 
   
  require_once("./conectarBD.php");

  $obj = new \stdClass();

  $usu = $_GET['usuario'];
  $contrasena = $_GET['contrasena'];


$consulta = conectarBD::conexion()->query("SELECT * FROM sesion_proyectos");

while ($usuario = $consulta->fetch(PDO::FETCH_ASSOC)){
    if(strtolower($usu) == strtolower($usuario['usu_pro'])){
        if ($contrasena == $usuario['con_pro']) {
            $obj->estado = true;
            echo json_encode($obj);
            return;
        }
    }
}

$obj->estado = false;
echo json_encode($obj);


  

?>