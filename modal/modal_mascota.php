<div id="modalMascota" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formMascota">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Nombre:</div>
                            <div class="col-4">
                                <input type="text" name="nombreMascota" id="nombreMascota" class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Edad:</div>
                            <div class="col-4">
                                <input type="number" name="edadMascota" id="edadMascota" class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Tipo de Pelo:</div>
                            <div class="col-4">
                                <select name="tipoPelo" id="tipoPelo" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM pelo_mascota';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['tipo_pelo'] .
                                            '">' .
                                            $row['tipo_pelo'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Raza:</div>
                            <div class="col-4">
                                <select name="razaMascota" id="razaMascota" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM raza_mascota';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['raza_mascota'] .
                                            '">' .
                                            $row['raza_mascota'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Sexo:</div>
                            <div class="col-4">
                                <select name="sexoMascota" id="sexoMascota" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM sexo_mascota';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['sexo'] .
                                            '">' .
                                            $row['sexo'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" id="btnGuardarMascota"></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>