<?php include "includes/header.php"; ?>

<h1>Hola</h1>
<div class="container">
    <br>
    <br>
    <div class="row">
        <div class="col-10">
            <h2>Empleados</h2>
        </div>
        <div class="col-2">
            <!-- Button trigger modal -->
            <button id="btnNuevo" type="button" class="btn btn-success" class="btn btn-primary" data-toggle="modal">
                <i class="far fa-plus-square"></i>&nbsp;AGREGAR</button>
        </div>
    </div>
    <table id="tabla" class="table table-dark table-striped table-bordered table-hover" style="width:100%">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Ap. Paterno</th>
                <th>Ap. Materno</th>
                <th>email</th>
                <th>Telefono</th>
            </tr>
        </thead>
        <tbody>
            <?php include "bd/tabla_empleado.php"; ?>
        </tbody>
    </table>
</div>

<div id="app">
    {{ message }}
</div>

<div id="app-2">
    <span v-bind:title="message">
        Hover your mouse over me for a few seconds
        to see my dynamically bound title!
    </span>
</div>

<div>
    <button id="button" aria-describedby="tooltip">My button</button>
    <div id="tooltip" role="tooltip">
        My tooltip
        <div id="arrow" data-popper-arrow></div>
    </div>
</div>

<?php include "includes/footer.php"; ?>