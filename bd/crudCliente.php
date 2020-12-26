<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $idCliente = $_POST['idCliente'];
    $nombreCliente = $_POST['nombreCliente'];
    $ApellidoPaternoCliente = $_POST['ApellidoPaternoCliente'];
    $ApellidoMaternoCliente = $_POST['ApellidoMaternoCliente'];
    $emailCliente = $_POST['emailCliente'];
    $telefonoCliente = $_POST['telefonoCliente'];
    $colonia = $_POST['colonia'];
    $calle = $_POST['calle'];
    $numero = $_POST['numero'];
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "INSERT INTO cliente VALUES(0, '$nombreCliente', '$ApellidoPaternoCliente', '$ApellidoMaternoCliente', '$emailCliente', '$telefonoCliente', '$colonia', '$calle', '$numero');";
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