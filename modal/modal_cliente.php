<div id="modalCliente" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formCliente">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Nombre:</div>
                            <div class="col-4">
                                <input type="text" name="nombreCliente" id="nombreCliente"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Apellido Paterno:</div>
                            <div class="col-4">
                                <input type="text" name="ApellidoPaternoCliente" id="ApellidoPaternoCliente"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Apellido Materno:</div>
                            <div class="col-4">
                                <input type="text" name="ApellidoMaternoCliente" id="ApellidoMaternoCliente"
                                    class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">email:</div>
                            <div class="col-4">
                                <input type="text" name="emailCliente" id="emailCliente"
                                    class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Telefono:</div>
                            <div class="col-4">
                                <input type="text" name="telefonoCliente" id="telefonoCliente"
                                    class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Colonia:</div>
                            <div class="col-4">
                                <select name="colonia" id="colonia" class="form-control form-control-lg">
                                    <option value="0">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM colonia_cliente';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['colonia'] .
                                            '">' .
                                            $row['colonia'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Calle:</div>
                            <div class="col-4">
                                <input type="text" name="calle" id="calle" class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Numero:</div>
                            <div class="col-4">
                                <input type="number" name="numero" id="numero" class="form-control form-control-lg" />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" id="btnGuardarCliente"></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>