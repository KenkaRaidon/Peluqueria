<?php
include_once 'conexion.php';
$sql = "SELECT * FROM empleado";
$result = mysqli_query($conexion, $sql);
while ($row = mysqli_fetch_array($result)) {
    $id_empleado = $row['id_empleado'];
    $nombre = $row['nombre'];
    $apellido_paterno = $row['apellido_paterno'];
    $apellido_materno = $row['apellido_materno'];
    $email = $row['email'];
    $telefono = $row['telefono'];
    $fecha_empleo = $row['fecha_empleo'];
    echo "<tr><td>$id_empleado</td><td>$nombre</td><td>$apellido_paterno</td><td>$apellido_materno</td><td>$email</td><td>$telefono</td></tr>";
}
mysqli_close($conexion);
?>
