$(document).ready(function () {
    var opcion;
    var idCita = 0;

    var table = $('#tablaCita').DataTable({
        "destroy": true,
        "ajax": {
            "method": "POST",
            "url": "bd/listarCita.php"
        },
        "columns": [
            { "data": "id_cita" },
            { "data": "id_cliente" },
            { "data": "id_mascota" },
            { "data": "servicio" },
            { "data": "fecha_cita" },
            { "data": "hora_cita" },
            { "data": "status" },
            { "defaultContent": "<button id='btnEditarCita' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarCita' type='button' class='fas fa-search'></button><button id='btnEliminarCita' type='button' class='fas fa-trash-alt'></button><button id='btnFinalizarCita' type='button' class='fas fa-book-medical'></button>" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });

    $('#dueño').on('change', function () {
        var idDueño = $(this).val();
        $('#mascota').prop('disabled', false);
        if (idDueño) {

            $.ajax({
                type: 'POST',
                url: 'bd/selectMascota.php',
                data: {
                    idDueño: idDueño
                },
                success: function (data, html) {
                    $('#mascota').html(data);
                }
            });

        }
    });

    $("#btnGuardarCita").click(function (e) {
        var valid = this.form.checkValidity();
        if (valid) {
            e.preventDefault();

            var dueño = $('#dueño').val();
            var mascota = $('#mascota').val();
            var servicio = $('#servicio').val();
            var fecha = $('#fecha').val();
            var hora = $('#hora').val();
            var statusCita = $('#status').val();

            var empleado=$('#empleado').val();
            var correa= $('#correa').val();
            var collar=$('#collar').val();
            var horaFinal=$('#horaFinalizado').val();
            var precio=$('#precio').val();
            $.ajax({
                type: 'POST',
                url: 'bd/crudCita.php',
                datatype: "json",
                data: {
                    idCita: idCita,
                    dueño: dueño,
                    mascota: mascota,
                    servicio: servicio,
                    fecha: fecha,
                    hora: hora,
                    statusCita: statusCita,
                    empleado:empleado,
                    correa:correa,
                    collar:collar,
                    horaFinal:horaFinal,
                    precio:precio,
                    opcion: opcion
                },
                success: function (data) {
                    Swal.fire(
                        'Guardado!',
                        data,
                        'success'
                    )
                },
                error: function (data) {
                    Swal.fire(
                        'Error!',
                        'Hubo un error al guardar',
                        'error'
                    )
                }
            });

            table.ajax.reload();
            $('#modalCita').modal('hide');

        }
    });

    //Nuevo
    $("#btnNuevaCita").click(function () {
        opcion = 1;
        $("#formCita").trigger("reset");
        $('#mascota').prop('disabled', true);
        $('#status').prop('disabled', true);
        $('#status').val("EN PROCESO");
        habilitar_inputs("AGREGAR");
        $("#btnGuardarCita").text("Guardar");
        $(".modal-title").text("Alta de Citas");
        $('#modalCita').modal('show');
    });

    //FinalizarCita
    $(document).on("click", "#btnFinalizarCita", function () {
        opcion = 4;
        //$("#formFinalizar").trigger("reset");
        fila = $(this).closest("tr");
        idCita = parseInt(fila.find('td:eq(0)').text());
        dueño = fila.find('td:eq(1)').text();
        mascota = fila.find('td:eq(2)').text();
        servicio = fila.find('td:eq(3)').text();
        fecha = fila.find('td:eq(4)').text();
        hora = fila.find('td:eq(5)').text();
        statusCita = fila.find('td:eq(6)').text();

        habilitar_inputs("FINALIZAR");

        $('#dueño').val(dueño);
        $('#mascota').val(mascota);
        $('#servicio').val(servicio);
        $('#fecha').val(fecha);
        $('#hora').val(hora);
        $('#status').val("FINALIZADO");

        $("#btnGuardarCita").text("Registrar");
        $(".modal-title").text("Finalizar Cita");
        $('#modalCita').modal('show');
    });

    //Editar
    $(document).on("click", "#btnEditarCita", function () {
        opcion = 2;
        fila = $(this).closest("tr");

        idCita = parseInt(fila.find('td:eq(0)').text());
        dueño = fila.find('td:eq(1)').text();
        mascota = fila.find('td:eq(2)').text();
        servicio = fila.find('td:eq(3)').text();
        fecha = fila.find('td:eq(4)').text();
        hora = fila.find('td:eq(5)').text();
        statusCita = fila.find('td:eq(6)').text();

        habilitar_inputs("EDITAR");

        $('#dueño').val(dueño);
        $('#mascota').val(mascota);
        $('#servicio').val(servicio);
        $('#fecha').val(fecha);
        $('#hora').val(hora);
        $('#status').val(statusCita);

        $("#btnGuardarCita").text("Guardar");

        $(".modal-title").text("Editar Cita");
        $('#modalCita').modal('show');

    });

    //Eliminar
    $(document).on("click", "#btnEliminarCita", function () {
        opcion = 3;
        fila = $(this).closest("tr");
        idCita = parseInt(fila.find('td:eq(0)').text());
        dueño = fila.find('td:eq(1)').text();
        mascota = fila.find('td:eq(2)').text();
        servicio = fila.find('td:eq(3)').text();
        fecha = fila.find('td:eq(4)').text();
        hora = fila.find('td:eq(5)').text();
        statusCita = fila.find('td:eq(6)').text();

        habilitar_inputs("ELIMINAR");

        $('#dueño').val(dueño);
        $('#mascota').val(mascota);
        $('#servicio').val(servicio);
        $('#fecha').val(fecha);
        $('#hora').val(hora);
        $('#status').val(statusCita);

        $("#btnGuardarCita").text("Eliminar");

        $(".modal-title").text("Eliminar Cita");
        $('#modalCita').modal('show');

    });

    //Seleccionar
    $(document).on("click", "#btnSeleccionarCita", function () {
        fila = $(this).closest("tr");
        idCita = parseInt(fila.find('td:eq(0)').text());
        dueño = fila.find('td:eq(1)').text();
        mascota = fila.find('td:eq(2)').text();
        servicio = fila.find('td:eq(3)').text();
        fecha = fila.find('td:eq(4)').text();
        hora = fila.find('td:eq(5)').text();
        statusCita = fila.find('td:eq(6)').text();

        habilitar_inputs("SELECCIONAR");

        $('#dueño').val(dueño);
        $('#mascota').val(mascota);
        $('#servicio').val(servicio);
        $('#fecha').val(fecha);
        $('#hora').val(hora);
        $('#status').val(statusCita);

        $(".modal-title").text("Informacion Cita");
        $('#modalCita').modal('show');
    });

    function habilitar_inputs(valor) {
        switch (valor) {
            case "EDITAR":
                $('#dueño').prop('disabled', true);
                $('#mascota').prop('disabled', true);
                $('#servicio').prop('disabled', false);
                $('#fecha').prop('readonly', false);
                $('#hora').prop('readonly', false);
                $('#status').hide();

                $('#empleado').prop('disabled', true);
                $('#correa').prop('disabled', true);
                $('#collar').prop('disabled', true);
                $('#horaFinalizado').prop('readonly', true);
                $('#precio').prop('readonly', true);

                $("#btnGuardarCita").prop("disabled", false);
                break;
            case "AGREGAR":
                $('#dueño').prop('disabled', false);
                $('#mascota').prop('disabled', false);
                $('#servicio').prop('disabled', false);
                $('#fecha').prop('readonly', false);
                $('#hora').prop('readonly', false);
                $('#status').hide();

                $('#empleado').prop('disabled', true);
                $('#correa').prop('disabled', true);
                $('#collar').prop('disabled', true);
                $('#horaFinalizado').prop('readonly', true);
                $('#precio').prop('readonly', true);
                $("#btnGuardarCita").prop("disabled", false);
                break;
            case "SELECCIONAR":
                $('#dueño').prop('disabled', true);
                $('#mascota').prop('disabled', true);
                $('#servicio').prop('disabled', true);
                $('#fecha').prop('readonly', true);
                $('#hora').prop('readonly', true);
                $('#status').prop('disabled', true);
                $('#status').hide();

                $('#empleado').prop('disabled', true);
                $('#correa').prop('disabled', true);
                $('#collar').prop('disabled', true);
                $('#horaFinalizado').prop('readonly', true);
                $('#precio').prop('readonly', true);
                $("#btnGuardarCita").prop("disabled", true);
                break;
            case "ELIMINAR":
                $('#dueño').prop('disabled', true);
                $('#mascota').prop('disabled', true);
                $('#servicio').prop('disabled', true);
                $('#fecha').prop('readonly', true);
                $('#hora').prop('readonly', true);
                $('#status').hide();

                $('#empleado').prop('disabled', true);
                $('#correa').prop('disabled', true);
                $('#collar').prop('disabled', true);
                $('#horaFinalizado').prop('readonly', true);
                $('#precio').prop('readonly', true);
                $("#btnGuardarCita").prop("disabled", false);
                break;
            case "FINALIZAR":
                $('#dueño').prop('disabled', true);
                $('#mascota').prop('disabled', true);
                $('#servicio').prop('disabled', true);
                $('#fecha').prop('readonly', true);
                $('#hora').prop('readonly', true);
                $('#status').hide();

                $('#empleado').prop('disabled', false);
                $('#correa').prop('disabled', false);
                $('#collar').prop('disabled', false);
                $('#horaFinalizado').prop('readonly', false);
                $('#precio').prop('readonly', false);
                $("#btnGuardarCita").prop("disabled", false);

                $('#empleado').val('');
                $('#correa').val('');
                $('#collar').val('');
                $('#horaFinalizado').val('');
                $('#precio').val('');
                $("#btnGuardarCita").prop("disabled", false);
                break;
        }
    }
});

