<?php
include_once '../conexion.php';
$sql = "SELECT * FROM sexo_mascota";
$resultado = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($resultado)) {
    echo '<option value="' . $row['sexo'] . '">' . $row['sexo'] . '</option>';
}

?>