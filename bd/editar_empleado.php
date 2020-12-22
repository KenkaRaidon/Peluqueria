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

    $sql = "UPDATE empleado 
            SET nombre='$nombre', apellido_paterno='$apPaterno', apellido_materno='$apMaterno', 
            email='$email', telefono='$telefono', fecha_empleo='$fecha' 
            WHERE id_empleado=$idEmpleado";
    if (mysqli_query($conexion, $sql)) {
        echo "Se edito correctamente el Empleado ";
    } else {
        echo "No se guardo.";
    }

}
?>