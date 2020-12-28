<?php
include_once 'conexion.php';
$idDueño = $_POST['idDueño'];
$sql = "SELECT cliente_mascotas.id_mascota, mascota.nombre FROM cliente_mascotas,mascota WHERE mascota.id_mascota=cliente_mascotas.id_mascota AND cliente_mascotas.id_cliente=$idDueño";
$resultado = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($resultado)) {
    echo '<option value="' .
        $row['id_mascota'] .
        '">' .
        $row['nombre'] .
        '</option>';
}
?>