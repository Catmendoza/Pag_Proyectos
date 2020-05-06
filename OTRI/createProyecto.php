<?php
  header("Content-Type: application/json"); 

  $data = json_decode(file_get_contents("php://input")); 
   
  require_once("./conectarBD.php");

  $obj = new \stdClass();

  try {
    $consulta = conectarBD::conexion()->query("INSERT INTO tabla_proyectos VALUES(NULL, '{$data->titulo}', '{$data->cifra}', {$data->totalValor}, {$data->totalEspecias}, {$data->totalContrapartida}, {$data->totalEfectivo}, '{$data->identFinanciera}', '{$data->invPrincipal}', '{$data->uniAsociada}', '{$data->fecObtencion}', '{$data->fecFin}', '{$data->estado}')");
    $obj->estado = true;
  } catch (exception $e) {
    echo $e;
    $obj->estado = false;
  } finally {
    echo json_encode($obj);
  }

?>