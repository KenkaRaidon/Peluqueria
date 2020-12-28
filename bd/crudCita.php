<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $dueño = $_POST['dueño'];
    $mascota = $_POST['mascota'];
    $servicio = $_POST['servicio'];
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];
    $status = $_POST['status'];
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "INSERT INTO cita VALUES(0, '$dueño', '$mascota', '$servicio', '$fecha', '$hora', '$status');";
            break;

        case 2:
            $sql = "UPDATE cliente
            SET nombre='$nombreCliente', apellido_paterno='$ApellidoPaternoCliente', apellido_materno='$ApellidoMaternoCliente',
            email='$emailCliente', telefono='$telefonoCliente', colonia='$colonia', calle='$calle', numero='$numero'
            WHERE id_cliente=$idCliente";
            break;

        case 3:
            $sql = "DELETE FROM cliente
            WHERE id_cliente=$idCliente";
            break;
    }

    if (mysqli_query($conexion, $sql)) {
        echo "Guardado exitosamente";
    } else {
        echo "ocurrio un error ". $idCliente.$nombreCliente.$opcion;
    }

}
?>