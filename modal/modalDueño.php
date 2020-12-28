<div id="modalDueño" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formDueño">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Dueño:</div>
                            <div class="col-4">
                                <select name="dueñoMascota" id="dueñoMascota" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM cliente';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' . $row['id_cliente'] . '">' . $row['nombre'] . " " . $row['apellido_paterno'] . '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Mascota:</div>
                            <div class="col-4">
                                <select name="mascota" id="mascota" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM mascota';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['id_mascota'] .
                                            '">' .
                                            $row['nombre'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">

                            <button type="submit" class="btn btn-primary" id="btnGuardarDueño"></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>