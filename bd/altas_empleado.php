<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $nombre = $_POST['nombreEmpleado'];
    $apPaterno = $_POST['ApellidoPaternoEmpleado'];
    $apMaterno = $_POST['ApellidoMaternoEmpleado'];
    $email = $_POST['emailEmpleado'];
    $telefono = $_POST['telefonoEmpleado'];
    $fecha = $_POST['fechaEmpleo'];

    $sql = "insert into empleado values(0, '$nombre', '$apPaterno', '$apMaterno', '$email', '$telefono', '$fecha');";
    if (mysqli_query($conexion, $sql)) {
        echo "Se registro satisfactoriamente el empleado";
    } else {
        echo "ocurrio un error";
    }
}
?>
