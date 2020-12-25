<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $idEmpleado = $_POST['idEmpleado'];
    $nombre = $_POST['nombreEmpleado'];
    $apPaterno = $_POST['apellidoPaternoEmpleado'];
    $apMaterno = $_POST['apellidoMaternoEmpleado'];
    $email = $_POST['emailEmpleado'];
    $telefono = $_POST['telefonoEmpleado'];
    $fecha = $_POST['fechaEmpleo'];
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "insert into empleado values(0, '$nombre', '$apPaterno', '$apMaterno', '$email', '$telefono', '$fecha');";
            break;

        case 2:
            $sql = "UPDATE empleado
            SET nombre='$nombre', apellido_paterno='$apPaterno', apellido_materno='$apMaterno',
            email='$email', telefono='$telefono', fecha_empleo='$fecha'
            WHERE id_empleado=$idEmpleado";
            break;

        case 3:
            $sql = "DELETE FROM empleado
            WHERE id_empleado=$idEmpleado";
            break;

    }

    if (mysqli_query($conexion, $sql)) {
        echo "Guardado exitosamente";
    } else {
        echo "ocurrio un error";
    }

}
?>