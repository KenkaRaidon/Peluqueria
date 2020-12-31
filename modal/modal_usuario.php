<div id="modalUsuario" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formUsuario">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Nombre de Usuario:</div>
                            <div class="col-4">
                                <input type="text" name="nombreUsuario" id="nombreUsuario" class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Password:</div>
                            <div class="col-4">
                                <input type="text" name="password" id="password" class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Tipo de Usuario:</div>
                            <div class="col-4">
                                <select name="tipoUsuario" id="tipoUsuario" class="form-control form-control-lg">
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM tipo_usuario';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['tipo_usuario'] .
                                            '">' .
                                            $row['tipo_usuario'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Empleado:</div>
                            <div class="col-4">
                                <select name="empleado" id="empleado" class="form-control form-control-lg">
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM empleado';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['id_empleado'] .
                                            '">' .
                                            $row['nombre'] .' '. $row['apellido_paterno'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" id="btnGuardarUsuario"></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>