<?php
include_once '../conexion.php';
$sql = "SELECT * FROM pelo_mascota";
$resultado = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($resultado)) {
    echo '<option value="' . $row['tipo_pelo'] . '">' . $row['tipo_pelo'] . '</option>';
}

?>