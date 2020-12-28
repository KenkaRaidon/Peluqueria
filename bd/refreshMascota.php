<?php
include_once 'conexion.php';
$sql = 'SELECT * FROM mascota';
$resultado = mysqli_query($conexion, $sql);
while (
    $row = mysqli_fetch_array($resultado)
) {
    echo '<option value="' .
        $row['id_mascota'] .
        '">' .
        $row['nombre'] .
        '</option>';
}
?>
