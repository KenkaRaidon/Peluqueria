<?php
include_once 'conexion.php';

//$sql = "SELECT * FROM mascota";
$sql = "SELECT * FROM usuario";
$resultado = mysqli_query($conexion, $sql);
while ($data = mysqli_fetch_assoc($resultado)) {
    $arreglo["data"][] = $data;
}
echo json_encode($arreglo);

mysqli_free_result($resultado);
mysqli_close($conexion);
?>