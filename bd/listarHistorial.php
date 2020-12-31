<?php
include_once 'conexion.php';

//$sql = "SELECT * FROM mascota";
$sql = "SELECT historial.id_cita, CONCAT_WS(' ', cliente.nombre, cliente.apellido_paterno) nombreCliente, mascota.nombre, cita.servicio, CONCAT_WS(' ', empleado.nombre, empleado.apellido_paterno) nombreEmpleado, cita.fecha_cita ,cita.hora_cita, historial.hora_finalizacion, historial.correa, historial.collar, historial.precio
FROM historial, cita, cliente, mascota, empleado 
WHERE historial.id_cita=cita.id_cita AND cita.id_cliente=cliente.id_cliente AND cita.id_mascota=mascota.id_mascota AND historial.id_empleado=empleado.id_empleado;";
$resultado = mysqli_query($conexion, $sql);
while ($data = mysqli_fetch_assoc($resultado)) {
    $arreglo["data"][] = $data;
}
echo json_encode($arreglo);

mysqli_free_result($resultado);
mysqli_close($conexion);
?>