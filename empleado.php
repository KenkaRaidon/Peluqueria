<?php include "includes/header.php"; ?>

<div class="container">
    <br>
    <br>
    <div class="row">
        <div class="col-10">
            <h2>Empleados</h2>
        </div>
        <div class="col-2">
            <button id="btnNuevoEmpleado" type="button" class="btn btn-success" class="btn btn-primary" data-toggle="modal">
                <i class="far fa-plus-square"></i>&nbsp;AGREGAR</button>
        </div>
    </div>
    <table id="tabla" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ap. Paterno</th>
                <th>Ap. Materno</th>
                <th>email</th>
                <th>Telefono</th>
                <th>Fecha Empleo</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php include "bd/tabla_empleado.php";?>
        </tbody>
    </table>
</div>

<?php include "modal/modal_empleado.php"; ?>

<?php include "includes/footer.php"; ?>