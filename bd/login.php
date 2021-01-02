<?php
include_once 'conexion.php';

if (isset($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    session_start();
    $sql = "SELECT * FROM usuario WHERE nombre_usuario='$username' AND password='$password';";
    $query = mysqli_query($conexion, $sql);
    $result = mysqli_num_rows($query);

    if ($result > 0) {
        $_SESSION['username'] = $username;
        //header("location: ../mascota.php");
        echo 1;
    } else {
        echo 'No se encontro usuario o contraseña';
    }
    //mysqli_close($conexion);
}
