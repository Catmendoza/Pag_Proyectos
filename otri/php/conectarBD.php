<?php
    header('Access-Control-Allow-Origin: *');

    // Clase para conectar la base de datos
    class conectarBD{
        public static function conexion(){
            // Try catch por si ocurre algun error
            try {
                // Se toma el localhost mostado en XAMPP
                $conexion = new PDO('mysql:host=https://combita.company/otri/php/ ; dbname=otri_proyecto', "root", "8426803156229492Ca#");
                // Se generean los atributos
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // Se especifica una conexio UTF-8
                $conexion->exec("SET CHARACTER SET UTF8");
            } catch (exception $e) {
                // Muere
                die();
            }
            // retorna la conexion
            return $conexion;
        }
    }
?>