<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $idCita = $_POST['idCita'];
    $dueño = $_POST['dueño'];
    $mascota = $_POST['mascota'];
    $servicio = $_POST['servicio'];
    $fecha = $_POST['fecha'];
    $hora = $_POST['hora'];


    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "INSERT INTO cita VALUES(0, '$dueño', '$mascota', '$servicio', '$fecha', '$hora', 'EN PROCESO');";
            break;

        case 2:
            $status = $_POST['statusCita'];
            $sql = "UPDATE cita
            SET id_cliente='$dueño', id_mascota='$mascota', servicio='$servicio',
            fecha_cita='$fecha', hora_cita='$hora', status='$status'
            WHERE id_cita=$idCita";
            break;

        case 3:
            $sql = "DELETE FROM cita
            WHERE id_cita=$idCita";
            break;

        case 4:
            $empleado = $_POST['empleado'];
            $correa = $_POST['correa'];
            $collar = $_POST['collar'];
            $horaFinal = $_POST['horaFinal'];
            $precio = $_POST['precio'];
            $sql = "UPDATE cita SET status='FINALIZADO' WHERE id_cita=$idCita";
            $sql2= "INSERT INTO historial VALUES($idCita, $empleado, $correa, $collar, '$horaFinal', $precio);";
            mysqli_query($conexion, $sql2);
            break;
    }

    if (mysqli_query($conexion, $sql)) {
        echo "Guardado exitosamente";
    } else {
        echo "ocurrio un error ";
    }
}
?>