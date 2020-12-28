<?php
include_once 'conexion.php';
if (isset($_POST)) {
    $idMascota = $_POST['idMascota'];
    $nombreMascota = $_POST['nombreMascota'];
    $edadMascota = $_POST['edadMascota'];
    $tipoPelo = $_POST['tipoPelo'];
    $razaMascota = $_POST['razaMascota'];
    $sexoMascota = $_POST['sexoMascota']; 
    $opcion = $_POST['opcion'];

    switch ($opcion) {
        case 1:
            $sql = "INSERT into mascota values(NULL, '$nombreMascota', $edadMascota, '$tipoPelo', '$razaMascota', '$sexoMascota');";
            break;

        case 2:
            $sql = "UPDATE mascota
            SET nombre='$nombreMascota', edad=$edadMascota, tipo_pelo='$tipoPelo',
            raza_mascota='$razaMascota', sexo='$sexoMascota'
            WHERE id_mascota=$idMascota";
            break;

        case 3:
            $sql = "DELETE FROM mascota
            WHERE id_mascota=$idMascota";
            break;
    }

    if (mysqli_query($conexion, $sql)) {
        $idMascota=mysqli_insert_id($conexion);
        echo $ultimo_id;
    } else {
        echo "ocurrio un error";
    }

}
?>