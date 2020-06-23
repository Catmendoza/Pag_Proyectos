<?php
    header('Access-Control-Allow-Origin: *');
    header(
    "Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method"
    );
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    // Clase para conectar la base de datos
    class conectarBD{
        public static function conexion(){
            // Try catch por si ocurre algun error
            try {
                // Se toma el localhost mostado en XAMPP
               $conexion = new PDO('mysql:host=localhost; dbname=otri_proyecto', "root", "");
                
                // Se generean los atributos
                $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                // Se especifica una conexio UTF-8
                $conexion->exec("SET CHARACTER SET UTF8");
            } catch (exception $e) {
                // Muere
                echo $e;
                die();
            }
            // retorna la conexion
            return $conexion;
        }
    }
?>
