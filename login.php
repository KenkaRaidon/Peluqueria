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
    <link rel="stylesheet" href="../css/login.css">
</head>

<body>
    <form name="login" id="login">
        <h5>Login</h5>
        <i class="fa fa-users" aria-hidden="true">Username</i>
        <input type="text" name="username" id="username" placeholder="Username" class="form-control form-control-lg" required/>
        <i class="fas fa-key"aria-hidden="true">Password</i>
        <input type="password" name="password" id="password" placeholder="Password" class="form-control form-control-lg" required/>
        <br>
        <input type="submit" class="btn btn-primary" id="btnLogin">
    </form>


    <!--jsQuery-->
    <script type="text/javascript" language="javascript" src="https://code.jquery.com/jquery-3.5.1.js"></script>
    <!--Select2-->
    <script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"></script>
    <!--Datatables-->
    <script type="text/javascript" language="javascript"
        src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js"></script>
    <!--Popper-->
    <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
    <!--Bootstrap-->
    <script src="../plugins/bootstrap/js/bootstrap.min.js"></script>
    <!--Vue Js-->
    <script src="../plugins/vuejs/vue.js"></script>
    <!--Axios-->
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <!--Sweet Alert 2-->
    <script src="../plugins/sweetalert2/js/sweetalert2.all.min.js"></script>
    <!--Mi js-->
    <script src="../js/login.js"></script>

</body>

</html>