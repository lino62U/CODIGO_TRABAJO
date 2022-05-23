<?php
    $datos = $_POST;

//////////////////////////
    $conexion = new mysqli("localhost","root","","asistencia");

    $fecha = $_POST['archivo'];

    if($conexion->connect_error){
        echo "ZZZZ";
    }
    else{
        echo "NICE";
    }
    
    $sql = "CREATE TABLE $fecha(
        N INT(100) NOT NULL,
        NOMBRE VARCHAR(100) NOT NULL,
        ASISTENCIA VARCHAR(20) NOT NULL,
        JUSTIFICACION VARCHAR(200) NOT NULL
    )";

    $conexion->query($sql);
    
////////////////////
    $conex = mysqli_connect("localhost","root","","asistencia");

    for($j=0;$j<40;$j++){
        $orden = $j;
        $name = $datos["nombre".$j];
        $estado = $datos["estado".$j];
        $justi = $datos["justi".$j];
        $consulta = "INSERT INTO $fecha(N,NOMBRE,ASISTENCIA,JUSTIFICACION) VALUES ('$orden','$name','$estado','$justi')";
        mysqli_query($conex,$consulta);
    }

    echo $datos['nombre10'];

/*
    
    $sql = "CREATE DATABASE asistencia";

    if($conexion->query($sql) === true){
        echo "base de datos creada";    
    }
    else{
        die("NO SE CREO LA DB ".$conexion_error);
    }
    
*/

?>
