<?php include "includes/header.php"; ?>

<div class="container">
    <br>
    <br>
    <div class="row">
        <div class="col-10">
            <h2>Mascotas</h2>
        </div>
        <div class="col-2">
            <button id="btnNuevaMascota" type="button" class="btn btn-success" class="btn btn-primary" data-toggle="modal">
                <i class="far fa-plus-square"></i>&nbsp;AGREGAR</button>
        </div>
    </div>
    <table id="tablaMascota" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Tipo Pelo</th>
                <th>Raza</th>
                <th>Sexo</th>
                <th>Acciones</th>
            </tr>
        </thead>
    </table>
</div>

<?php include "modal/modal_mascota.php"; ?>

<?php include "includes/footer.php"; ?>