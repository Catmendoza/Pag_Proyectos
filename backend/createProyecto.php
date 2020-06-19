<?php
  require_once("./conectarBD.php");

  $ani_pro = $_POST["ani_pro"] == "" ? "NULL": $_POST["ani_pro"];
  $tip_pro = $_POST["tip_pro"];
  $con_pro = $_POST["con_pro"];
  $fac_pro = $_POST["fac_pro"];
  $tit_pro = $_POST["tit_pro"];
  $cod_pro = $_POST["cod_pro"] == "" ? "NULL": $_POST["cod_pro"];
  $est_pro = $_POST["est_pro"];
  $imp_pro = $_POST["imp_pro"];
  $inv_pro = $_POST["inv_pro"];
  $co_inv_pro = $_POST["co_inv_pro"];
  $inv_lid_pro = $_POST["inv_lid_pro"];
  $gru_pro = $_POST["gru_pro"];
  $otr_ent_par = $_POST["otr_ent_par"];
  $ent_eje_pro = $_POST["ent_eje_pro"];
  $val_efe_tot = $_POST["val_efe_tot"] == "" ? "NULL": $_POST["val_efe_tot"];
  $val_esp_tot = $_POST["val_esp_tot"] == "" ? "NULL": $_POST["val_esp_tot"];
  $val_tot_pro = $_POST["val_tot_pro"] == "" ? "NULL": $_POST["val_tot_pro"];
  $val_efe_fin = $_POST["val_efe_fin"] == "" ? "NULL": $_POST["val_efe_fin"];
  $val_efe_usc = $_POST["val_efe_usc"] == "" ? "NULL": $_POST["val_efe_usc"];
  $val_esp_otr = $_POST["val_esp_otr"] == "" ? "NULL": $_POST["val_esp_otr"];
  $cont_esp_usc = $_POST["cont_esp_usc"] == "" ? "NULL": $_POST["cont_esp_usc"];
  $fec_ini_pro = $_POST["fec_ini_pro"] == "" ? "0000-00-00": $_POST["fec_ini_pro"];
  $fec_fin_pro = $_POST["fec_fin_pro"] == "" ? "0000-00-00": $_POST["fec_fin_pro"];
  $pro_pro = $_POST["pro_pro"];
  $obs_pro = $_POST["obs_pro"];
  $val_eje_usc = $_POST["val_eje_usc"] == "" ? "NULL": $_POST["val_eje_usc"];
  $arc_fis_pro = date("Ymdhis"). ".pdf";

  $obj = new \stdClass();

  try {
    if($_FILES["arc_fis_pro"]["tmp_name"]){
      file_put_contents("./pdf/". $arc_fis_pro, file_get_contents($_FILES["arc_fis_pro"]["tmp_name"]));
      $consulta = conectarBD::conexion()->query("INSERT INTO tabla_proyectos VALUES(NULL,{$ani_pro}, '{$tip_pro}','{$con_pro}','{$fac_pro}','{$tit_pro}', {$cod_pro},'{$est_pro}','{$imp_pro}','{$inv_pro}','{$co_inv_pro}','{$inv_lid_pro}','{$gru_pro}','{$otr_ent_par}', '{$ent_eje_pro}',{$val_efe_tot}, {$val_esp_tot}, {$val_tot_pro}, {$val_efe_fin}, {$val_efe_usc}, {$val_esp_otr}, {$cont_esp_usc}, '{$fec_ini_pro}', '{$fec_fin_pro}', '{$pro_pro}','{$obs_pro}',{$val_eje_usc},'{$arc_fis_pro}')");
    } else {
      $arc_fis_pro = "";
      $consulta = conectarBD::conexion()->query("INSERT INTO tabla_proyectos VALUES(NULL,{$ani_pro}, '{$tip_pro}','{$con_pro}','{$fac_pro}','{$tit_pro}', {$cod_pro},'{$est_pro}','{$imp_pro}','{$inv_pro}','{$co_inv_pro}','{$inv_lid_pro}','{$gru_pro}','{$otr_ent_par}', '{$ent_eje_pro}',{$val_efe_tot}, {$val_esp_tot}, {$val_tot_pro}, {$val_efe_fin}, {$val_efe_usc}, {$val_esp_otr}, {$cont_esp_usc}, '{$fec_ini_pro}', '{$fec_fin_pro}', '{$pro_pro}','{$obs_pro}',{$val_eje_usc},NULL)");
    }
    $obj->estado = true;
  } catch (exception $e) {
    echo $e;
    $obj->estado = false;
  } finally {
    echo json_encode($obj);
  }
