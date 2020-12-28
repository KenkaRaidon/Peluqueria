<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $dueñoMascota = $_POST['dueñoMascota'];
    $idMascota = $_POST['idMascota'];
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "INSERT into cliente_mascotas values($dueñoMascota, $idMascota);";
            break;

        case 2:
            $sql = "UPDATE cliente_mascotas
            SET id_cliente=$dueñoMascota, id_mascota=$idMascota
            WHERE id_mascota=$idMascota";
            break;

        case 3:
            $sql = "DELETE FROM cliente_mascotas
            WHERE id_mascota=$idMascota and id_cliente=$dueñoMascota";
            break;
    }

    if (mysqli_query($conexion, $sql)) {
        echo "Guardado exitosamente";
    } else {
        echo "ocurrio un error";
    }

}
?>