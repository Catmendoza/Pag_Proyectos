<?php
  header("Content-Type: application/json"); 

  $data = json_decode(file_get_contents("php://input")); 
   
  require_once("./conectarBD.php");

  $obj = new \stdClass();

  try {
    $consulta = conectarBD::conexion()->query("INSERT INTO tabla_proyectos VALUES(NULL,{$data->ani_pro}, '{$data->tip_pro}','{$data->con_pro}','{$data->fac_pro}','{$data->tit_pro}', {$data->cod_pro},'{$data->est_pro}','{$data->imp_pro}','{$data->inv_pro}','{$data->co_inv_pro}','{$data->inv_lid_pro}','{$data->gru_pro}','{$data->otr_ent_par}', '{$data->ent_eje_pro}',{$data->val_efe_tot}, {$data->val_esp_tot}, {$data->val_tot_pro}, {$data->val_efe_fin}, {$data->val_efe_usc}, {$data-> val_esp_otr}, {$data->cont_esp_usc}, '{$data->fec_ini_pro}', '{$data->fec_fin_pro}', '{$data->pro_pro}','{$data->obs_pro}',{$data->val_eje_usc},'{$data->arc_fis_pro}')");
    $obj->estado = true;
  } catch (exception $e) {
    echo $e;
    $obj->estado = false;
  } finally {
    echo json_encode($obj);
  }

?>