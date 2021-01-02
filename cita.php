<?php include "includes/header.php"; ?>
<div class="container">
    <a id="btnReturn" href="index.php" class="fas fa-undo-alt">Regresar</a>
    <br>
    <br>
    <div class="row">
        <div class="col-10">
            <h2>Citas</h2>
        </div>
        <div class="col-2">
            <button id="btnNuevaCita" type="button" class="btn btn-success" class="btn btn-primary" data-toggle="modal">
                <i class="far fa-plus-square"></i>&nbsp;AGREGAR</button>
        </div>
    </div>
    <table id="tablaCita" class="table table-striped table-bordered" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>ID Cliente</th>
                <th>ID Mascota</th>
                <th>Servicio</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Status</th>
                <th>Acciones</th>
            </tr>
        </thead>
    </table>
</div>

<?php include "modal/modal_cita.php"; ?>

<?php include "includes/footer.php"; ?>