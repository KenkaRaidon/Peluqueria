<div id="modalCita" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formCita">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Dueño:</div>
                            <div class="col-4">
                                <select name="dueño" id="dueño" class="form-control form-control-lg" required>
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT cliente_mascotas.id_cliente, cliente.nombre, cliente.apellido_paterno FROM cliente_mascotas,cliente WHERE cliente.id_cliente=cliente_mascotas.id_cliente group BY cliente_mascotas.id_cliente;';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['id_cliente'] .
                                            '">' .
                                            $row['nombre'] ." ".$row['apellido_paterno'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Mascota:</div>
                            <div class="col-4">
                                <select name="mascota" id="mascota" class="form-control form-control-lg" required>
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT cliente_mascotas.id_mascota, mascota.nombre FROM cliente_mascotas, mascota WHERE mascota.id_mascota=cliente_mascotas.id_mascota;';
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
                        <div class="row">
                            <div class="col-4">Servicio:</div>
                            <div class="col-4">
                                <select name="servicio" id="servicio" class="form-control form-control-lg" required>
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM servicio_cita';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['servicio'] .
                                            '">' .
                                            $row['servicio'] .
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Fecha:</div>
                            <div class="col-4">
                                <input type="date" name="fecha" id="fecha" class="form-control form-control-lg" required/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Hora:</div>
                            <div class="col-4">
                                <input type="time" name="hora" id="hora" class="form-control form-control-lg" required/>
                            </div>
                        </div>
                        <div class="row">
                            <!--<div class="col-4">Status:</div>-->
                            <div class="col-4">
                                <select name="status" id="status" class="form-control form-control-lg">
                                    <option value="">Selecciona</option>
                                    <?php
                                    include_once 'bd/conexion.php';
                                    $sql = 'SELECT * FROM status_cita';
                                    $resultado = mysqli_query($conexion, $sql);
                                    while (
                                        $row = mysqli_fetch_array($resultado)
                                    ) {
                                        echo '<option value="' .
                                            $row['status'] .
                                            '">' .
                                            $row['status'] .
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
                                            $row['nombre'] .' '.$row['apellido_paterno'].
                                            '</option>';
                                    }
                                    ?>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Correa:</div>
                            <div class="col-4">
                                <select name="correa" id="correa" class="form-control form-control-lg">
                                    <option value="">Selecciona</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Collar:</div>
                            <div class="col-4">
                                <select name="collar" id="collar" class="form-control form-control-lg">
                                    <option value="">Selecciona</option>
                                    <option value="true">Si</option>
                                    <option value="false">No</option>
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Hora de finalizacion:</div>
                            <div class="col-4">
                                <input type="time" name="horaFinalizado" id="horaFinalizado"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Precio:</div>
                            <div class="col-4">
                                <input type="number" step="any" name="precio" id="precio"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" id="btnGuardarCita"></button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
