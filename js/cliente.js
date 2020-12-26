$(document).ready(function () {
    var opcion;
    var idCliente=0;

    var table = $('#tablaCliente').DataTable({
        "destroy": true,
        "ajax": {
            "method": "POST",
            "url": "bd/listarCliente.php"
        },
        "columns": [
            { "data": "id_cliente" },
            { "data": "nombre" },
            { "data": "apellido_paterno" },
            { "data": "apellido_materno" },
            { "data": "email" },
            { "data": "telefono" },
            { "data": "colonia" },
            { "data": "calle" },
            { "data": "numero" },
            { "defaultContent": "<button id='btnEditarCliente' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarCliente' type='button' class='fas fa-search'></button><button id='btnEliminarCliente' type='button' class='fas fa-trash-alt'></button>" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });

    $("#btnGuardarCliente").click(function (e) {
        var valid = this.form.checkValidity();
        if (valid) {
            e.preventDefault();
            
            var nombreCliente = $('#nombreCliente').val();
            var ApellidoPaternoCliente = $('#ApellidoPaternoCliente').val();
            var ApellidoMaternoCliente = $('#ApellidoMaternoCliente').val();
            var emailCliente = $('#emailCliente').val();
            var telefonoCliente = $('#telefonoCliente').val();
            var colonia = $('#colonia').val();
            var calle = $('#calle').val();
            var numero = $('#numero').val();
     
            $.ajax({
                type: 'POST',
                url: 'bd/crudCliente.php',
                datatype: "json",
                data: {
                    idCliente: idCliente,
                    nombreCliente: nombreCliente,
                    ApellidoPaternoCliente: ApellidoPaternoCliente,
                    ApellidoMaternoCliente: ApellidoMaternoCliente,
                    emailCliente: emailCliente,
                    telefonoCliente: telefonoCliente,
                    colonia: colonia,
                    calle: calle,
                    numero: numero,
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
            $('#modalCliente').modal('hide');

        }
    });

    //Nuevo
    $("#btnNuevoCliente").click(function () {
        opcion = 1;
        $("#formCliente").trigger("reset");
        habilitar_inputs(2);
        $("#btnGuardarCliente").text("Guardar");
        $(".modal-title").text("Alta de Cliente");
        $('#modalCliente').modal('show');
    });

    //Editar
    $(document).on("click", "#btnEditarCliente", function () {
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
    $(document).on("click", "#btnEliminarCliente", function () {
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
    $(document).on("click", "#btnSeleccionarCliente", function () {
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