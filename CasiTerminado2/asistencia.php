<?php
    $datos = $_POST;

    $conexion = new mysqli("localhost","root","","asistencia");

    $fecha = $_POST['archivo'];
    
    $sql = "CREATE TABLE `$fecha`(
        N INT(5) NOT NULL,
        NOMBRE VARCHAR(100) NOT NULL,
        ASISTENCIA VARCHAR(20) NOT NULL,
        JUSTIFICACION VARCHAR(200) NOT NULL
    )";

    $conexion->query($sql);
    
    $conex = mysqli_connect("localhost","root","","asistencia");

    for($j=1;$j<41;$j++){
        $orden = $j;
        $name = $datos["nombre".($j-1)];
        $estado = $datos["estado".($j-1)];
        $justi = $datos["justi".($j-1)];
        $consulta = "INSERT INTO `$fecha`(N,NOMBRE,ASISTENCIA,JUSTIFICACION) VALUES ('$orden','$name','$estado','$justi')";
        mysqli_query($conex,$consulta);
    }

    echo $datos['nombre10'];
?>
