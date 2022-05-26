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
        echo "<th>N</th>";
        echo "<th>APELLIDOS Y NOMBRES</th>";
        echo "<th>ESTADO</th>";
        echo "<th>JUSTIFICACIÓN</th>";
        echo "</thead";

        while($row = $resultado->fetch_array()){    

            $id = $row['N'];
            $nombre = $row["NOMBRE"];
            $estado = $row["ASISTENCIA"];
            $justi = $row["JUSTIFICACION"];
            
            $iDtxt;
            if($id<10){
                $iDtxt='0'.$id;
            }else{
                $iDtxt=$id;
            }

            echo "<tr>";
                echo "<td class='orden'>$iDtxt</td>";
                echo "<td class='name'>$nombre</td>";
                echo "<td class='estado'>$estado</td>";
                echo "<td class='justificacion'>$justi</td>";

            echo "</tr>";
        }
        echo "</table>";
        echo "<style> 
                table, td, th {
                    border: 1px solid;
                    padding: 5px;
                    font-size:10px;s
                }
                table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: 'Lucida Sans Unicode', sans-serif;
                }
                table th{
                    background-color:#000;
                    color:white;
                }
                .orden{
                    text-align: center;
                    width:5%;
                    
                }
                .estado{
                    width:5%;
                    text-align: center;
                }
                .name{
                    width:35%;
                }
            </style>";
    }

    $html = ob_get_clean();

    require_once 'dompdf/autoload.inc.php';

    use Dompdf\Dompdf;
    $dompdf = new Dompdf();

    $dompdf->loadHtml($html);
    $dompdf->setPaper('letter');
    $dompdf->render();
    $dompdf->stream("{$leer}.pdf",array("Attachment" => true));
    echo "<tr><td>ff</td></tr>";
?>
