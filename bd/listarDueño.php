<?php
include_once 'conexion.php';

//$sql = "SELECT * FROM mascota";
$sql = "SELECT cliente.id_cliente, cliente.nombre nomCliente, cliente.apellido_paterno, mascota.id_mascota, mascota.nombre nomMasc FROM mascota,cliente,cliente_mascotas WHERE mascota.id_mascota=cliente_mascotas.id_mascota AND cliente.id_cliente=cliente_mascotas.id_cliente;";
$resultado = mysqli_query($conexion, $sql);
while ($data = mysqli_fetch_assoc($resultado)) {
    $arreglo["data"][] = $data;
}
echo json_encode($arreglo);

mysqli_free_result($resultado);
mysqli_close($conexion);
?>