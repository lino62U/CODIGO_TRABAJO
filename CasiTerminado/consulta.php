<?php
//$leer = $_POST['info'];
$leer = "noveas";
echo $leer;

$conexion = new mysqli("localhost","root","","asistencia");

?>

<?php
ob_start();
$conex = mysqli_connect("localhost","root","","asistencia");

    $consulta = "SELECT * FROM $leer";
    $resultado = mysqli_query($conex,$consulta);
    if($resultado){
        echo "<table>";
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
    $dompdf->stream("archivo.pdf",array("Attachment" => true));
?>
