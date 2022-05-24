<?php
    $leer = $_GET['base'];
?>
<?php
ob_start();
$conex = mysqli_connect("localhost","root","","asistencia");

    $consulta = "SELECT * FROM  `$leer`";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        echo "<table>";
        echo "<thead";
        echo "<tr>";
        echo "<td>N</td>";
        echo "<td>NOMBRES Y APELLIDOS</td>";
        echo "<td>ESTADO</td>";
        echo "<td>JUSTIFICACIÓN</td>";
        echo "</thead";

        while($row = $resultado->fetch_array()){    

            $id = $row['N'];
            $nombre = $row["NOMBRE"];
            $estado = $row["ASISTENCIA"];
            $justi = $row["JUSTIFICACION"];
            
            echo "<tr>";
                echo "<td>$id</td>";
                echo "<td>$nombre</td>";
                echo "<td>$estado</td>";
                echo "<td>$justi</td>";

            echo "</tr>";
        }
        echo "</table>";
    }

    $html = ob_get_clean();

    require_once 'dompdf/autoload.inc.php';

    use Dompdf\Dompdf;
    $dompdf = new Dompdf();

    $dompdf->loadHtml($html);
    $dompdf->setPaper('letter');
    $dompdf->render();
    $dompdf->stream("{$leer}.pdf",array("Attachment" => true));
?>
