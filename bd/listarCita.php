<?php
include_once 'conexion.php';

$sql = "SELECT * FROM cita";
$resultado = mysqli_query($conexion, $sql);
while ($data = mysqli_fetch_assoc($resultado)) {
    $arreglo["data"][] = $data;
}
echo json_encode($arreglo);

mysqli_free_result($resultado);
mysqli_close($conexion);
?>