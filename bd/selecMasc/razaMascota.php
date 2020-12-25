<?php
include_once '../conexion.php';
$sql = "SELECT * FROM raza_mascota";
$resultado = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($resultado)) {
    echo '<option value="' . $row['raza_mascota'] . '">' . $row['raza_mascota'] . '</option>';
}

?>
