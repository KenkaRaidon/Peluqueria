$(document).ready(function () {
    var opcion;
    var idCita=0;

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
            { "defaultContent": "<button id='btnEditarCita' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarCita' type='button' class='fas fa-search'></button><button id='btnEliminarCita' type='button' class='fas fa-trash-alt'></button>" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });

    $('#dueño').on('change',function(){
        var idDueño = $(this).val();
        
        if(idDueño){
            
            $.ajax({
                type:'POST',
                url:'bd/selectMascota.php',
                data:{
                    idDueño:idDueño
                },
                success:function(data, html){
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
            var status = $('#status').val();
     
            $.ajax({
                type: 'POST',
                url: 'bd/crudCita.php',
                datatype: "json",
                data: {
                    idCita:idCita,
                    dueño: dueño,
                    mascota: mascota,
                    servicio: servicio,
                    fecha: fecha,
                    hora: hora,
                    status: status,
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
        habilitar_inputs(2);
        $("#btnGuardarCita").text("Guardar");
        $(".modal-title").text("Alta de Citas");
        $('#modalCita').modal('show');
    });

    //Editar
    $(document).on("click", "#btnEditarCita", function () {
        opcion = 2;
        fila = $(this).closest("tr");

        idCliente = parseInt(fila.find('td:eq(0)').text());
        nombreCliente = fila.find('td:eq(1)').text();
        ApellidoPaternoCliente = fila.find('td:eq(2)').text();
        ApellidoMaternoCliente = fila.find('td:eq(3)').text();
        emailCliente = fila.find('td:eq(4)').text();
        telefonoCliente = fila.find('td:eq(5)').text();
        colonia = fila.find('td:eq(6)').text();
        calle = fila.find('td:eq(7)').text();
        numero = fila.find('td:eq(8)').text();

        habilitar_inputs(2);

        $('#nombreCliente').val(nombreCliente);
        $('#ApellidoPaternoCliente').val(ApellidoPaternoCliente);
        $('#ApellidoMaternoCliente').val(ApellidoMaternoCliente);
        $('#emailCliente').val(emailCliente);
        $('#telefonoCliente').val(telefonoCliente);
        $('#colonia').val(colonia);
        $('#calle').val(calle);
        $('#numero').val(numero);

        $("#btnGuardarCliente").text("Guardar");

        $(".modal-title").text("Editar Cliente");
        $('#modalCliente').modal('show');

    });

    //Eliminar
    $(document).on("click", "#btnEliminarCita", function () {
        opcion = 3;
        fila = $(this).closest("tr");
        idCliente = parseInt(fila.find('td:eq(0)').text());
        nombreCliente = fila.find('td:eq(1)').text();
        ApellidoPaternoCliente = fila.find('td:eq(2)').text();
        ApellidoMaternoCliente = fila.find('td:eq(3)').text();
        emailCliente = fila.find('td:eq(4)').text();
        telefonoCliente = fila.find('td:eq(5)').text();
        colonia = fila.find('td:eq(6)').text();
        calle = fila.find('td:eq(7)').text();
        numero = fila.find('td:eq(8)').text();

        habilitar_inputs(1);

        $('#nombreCliente').val(nombreCliente);
        $('#ApellidoPaternoCliente').val(ApellidoPaternoCliente);
        $('#ApellidoMaternoCliente').val(ApellidoMaternoCliente);
        $('#emailCliente').val(emailCliente);
        $('#telefonoCliente').val(telefonoCliente);
        $('#colonia').val(colonia);
        $('#calle').val(calle);
        $('#numero').val(numero);

        $("#btnGuardarCliente").text("Eliminar");

        $(".modal-title").text("Eliminar Cliente");
        $('#modalCliente').modal('show');

    });

    //Seleccionar
    $(document).on("click", "#btnSeleccionarCita", function () {
        fila = $(this).closest("tr");
        idCliente = parseInt(fila.find('td:eq(0)').text());
        nombreCliente = fila.find('td:eq(1)').text();
        ApellidoPaternoCliente = fila.find('td:eq(2)').text();
        ApellidoMaternoCliente = fila.find('td:eq(3)').text();
        emailCliente = fila.find('td:eq(4)').text();
        telefonoCliente = fila.find('td:eq(5)').text();
        colonia = fila.find('td:eq(6)').text();
        calle = fila.find('td:eq(7)').text();
        numero = fila.find('td:eq(8)').text();

        habilitar_inputs(3);

        $('#nombreCliente').val(nombreCliente);
        $('#ApellidoPaternoCliente').val(ApellidoPaternoCliente);
        $('#ApellidoMaternoCliente').val(ApellidoMaternoCliente);
        $('#emailCliente').val(emailCliente);
        $('#telefonoCliente').val(telefonoCliente);
        $('#colonia').val(colonia);
        $('#calle').val(calle);
        $('#numero').val(numero);

        $(".modal-title").text("Informacion Cliente");
        $('#modalCliente').modal('show');
    });
});

function habilitar_inputs(valor) {
    switch (valor) {
        case 1:
            $('#nombreCliente').prop('readonly', true);
            $('#ApellidoPaternoCliente').prop('readonly', true);
            $('#ApellidoMaternoCliente').prop('readonly', true);
            $('#emailCliente').prop('readonly', true);
            $('#telefonoCliente').prop('readonly', true);
            $('#colonia').prop('disabled', true);
            $('#calle').prop('readonly', true);
            $('#numero').prop('readonly', true);
            $("#btnGuardarCliente").prop("disabled", false);
            break;
        case 2:
            $('#nombreCliente').prop('readonly', false);
            $('#ApellidoPaternoCliente').prop('readonly', false);
            $('#ApellidoMaternoCliente').prop('readonly', false);
            $('#emailCliente').prop('readonly', false);
            $('#telefonoCliente').prop('readonly', false);
            $('#colonia').prop('disabled', false);
            $('#calle').prop('readonly', false);
            $('#numero').prop('readonly', false);
            $("#btnGuardarCliente").prop("disabled", false);
            break;
        case 3:
            $('#nombreCliente').prop('readonly', true);
            $('#ApellidoPaternoCliente').prop('readonly', true);
            $('#ApellidoMaternoCliente').prop('readonly', true);
            $('#emailCliente').prop('readonly', true);
            $('#telefonoCliente').prop('readonly', true);
            $('#colonia').prop('disabled', true);
            $('#calle').prop('readonly', true);
            $('#numero').prop('readonly', true);
            $("#btnGuardarCliente").prop("disabled", true);
            break;
    }
}