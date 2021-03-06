<?php
    session_start();
    $user=$_SESSION['username'];
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le Paticure</title>
    <!--Bootstrap 4-->
    <link rel="stylesheet" href="../plugins/bootstrap/css/bootstrap.min.css">
    <!--Datatable-->
    <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css">
    <!--Font Awesome-->
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <!--Sweet Alert 2-->
    <link rel="stylesheet" href="../plugins/sweetalert2/css/sweetalert2.min.css">
    <!--Select2-->
    <link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css" rel="stylesheet" />
    <!--Mi CSS-->
    <link rel="stylesheet" href="../css/main.css">
</head>

<body>
    
<?php
if ($_SESSION['username'] == "") {
    echo "<script>window.location.href = 'login.php';</script>";
} // if ($_SESSION["id_session"] == "")
?>