<?php include "includes/header.php"; ?>

<div class="container">
    <a id="btnReturn" href="index.php" class="fas fa-undo-alt">Regresar</a>
    <br>
    <br>
    <div class="row">
        <div class="col-10">
            <h2>Usuarios</h2>
        </div>
        <div class="col-2">
            <button id="btnNuevoUsuario" type="button" class="btn btn-success" class="btn btn-primary"
                data-toggle="modal">
                <i class="far fa-plus-square"></i>&nbsp;AGREGAR</button>
        </div>
    </div>
    <table id="tablaUsuario" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre de Usuario</th>
                <th>Password</th>
                <th>Tipo de Usuario</th>
                <th>ID Empleado</th>
                <th>Acciones</th>
            </tr>
        </thead>
    </table>
</div>

<?php include "modal/modal_usuario.php"; ?>

<?php include "includes/footer.php"; ?>