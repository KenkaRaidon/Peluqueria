<div id="modalEmpleado" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title"></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="formEmpleado">
                    <div class="form-group">
                        <div class="row">
                            <div class="col-4">Nombre:</div>
                            <div class="col-4">
                                <input type="text" name="nombreEmpleado" id="nombreEmpleado"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Apellido Paterno:</div>
                            <div class="col-4">
                                <input type="text" name="ApellidoPaternoEmpleado" id="ApellidoPaternoEmpleado"
                                    class="form-control form-control-lg" required />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Apellido Materno:</div>
                            <div class="col-4">
                                <input type="text" name="ApellidoMaternoEmpleado" id="ApellidoMaternoEmpleado"
                                    class="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">email:</div>
                            <div class="col-4">
                            <input type="text" name="emailEmpleado" id="emailEmpleado"
                                    class="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Telefono:</div>
                            <div class="col-4">
                            <input type="text" name="telefonoEmpleado" id="telefonoEmpleado"
                                    class="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Fecha de Empleo:</div>
                            <div class="col-4">
                            <input type="date" name="fechaEmpleo" id="fechaEmpleo"
                                    class="form-control form-control-lg"/>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="submit" class="btn btn-primary" id="btnGuardarEmpleado">GUARDAR</button>
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">CERRAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>