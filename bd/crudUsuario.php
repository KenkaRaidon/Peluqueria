<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $idUsuario = $_POST['idUsuario'];
    $nombreUsuario = $_POST['nombreUsuario'];
    $password = $_POST['password'];
    $tipoUsuario = $_POST['tipoUsuario'];
    $empleado = $_POST['empleado'];
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "insert into usuario values(0, '$nombreUsuario', '$password', '$tipoUsuario', $empleado);";
            break;

        case 2:
            $sql = "UPDATE usuario
            SET nombre_usuario='$nombreUsuario', password='$password', tipo_usuario='$tipoUsuario', id_empleado=$empleado
            WHERE id_usuario=$idUsuario";
            break;

        case 3:
            $sql = "DELETE FROM usuario
            WHERE id_usuario=$idUsuario";
            break;
    }

    if (mysqli_query($conexion, $sql)) {
        echo "Guardado exitosamente";
    } else {
        echo "ocurrio un error";
    }
}
