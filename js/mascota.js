$(document).ready(function () {
    var opcion;

    var table = $('#tablaMascota').DataTable({
        "destroy": true,
        "ajax": {
            "method": "POST",
            "url": "bd/listarMascota.php"
        },
        "columns": [
            { "data": "id_mascota" },
            { "data": "nombre" },
            { "data": "edad" },
            { "data": "tipo_pelo" },
            { "data": "raza_mascota" },
            { "data": "sexo" },
            { "defaultContent": "<button id='btnEditarMascota' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarMascota' type='button' class='fas fa-search'></button><button id='btnEliminarMascota' type='button' class='fas fa-trash-alt'></button>" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });

    $("#btnGuardarMascota").click(function (e) {
        var valid = this.form.checkValidity();
        if (valid) {
            e.preventDefault();
            var nombreMascota = $('#nombreMascota').val();
            var edadMascota = $('#edadMascota').val();
            var tipoPelo = $('#tipoPelo').val();
            var razaMascota = $('#razaMascota').val();
            var sexoMascota = $('#sexoMascota').val();
            $.ajax({
                type: 'POST',
                url: 'bd/crudMascota.php',
                datatype: "json",
                data: {
                    idMascota: idMascota,
                    nombreMascota: nombreMascota,
                    edadMascota: edadMascota,
                    tipoPelo: tipoPelo,
                    razaMascota: razaMascota,
                    sexoMascota: sexoMascota,
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
            $('#modalMascota').modal('hide');

        }
    });

    //Nuevo
    $("#btnNuevaMascota").click(function () {
        opcion = 1;
        $("#formMascota").trigger("reset");
        habilitar_inputs(2);
        $("#btnGuardarMascota").text("Guardar");
        $(".modal-title").text("Alta de Mascota");
        $('#modalMascota').modal('show');
    });

    //Editar
    $(document).on("click", "#btnEditarMascota", function () {
        opcion = 2;
        fila = $(this).closest("tr");
        idMascota = parseInt(fila.find('td:eq(0)').text());
        nombreMascota = fila.find('td:eq(1)').text();
        edadMascota = fila.find('td:eq(2)').text();
        tipoPelo = fila.find('td:eq(3)').text();
        razaMascota = fila.find('td:eq(4)').text();
        sexoMascota = fila.find('td:eq(5)').text();

        habilitar_inputs(2);

        $('#nombreMascota').val(nombreMascota);
        $('#edadMascota').val(edadMascota);
        $('#tipoPelo').val(tipoPelo);
        $('#razaMascota').val(razaMascota);
        $('#sexoMascota').val(sexoMascota);

        $("#btnGuardarMascota").text("Guardar");

        $(".modal-title").text("Editar Mascota");
        $('#modalMascota').modal('show');

    });

    //Eliminar
    $(document).on("click", "#btnEliminarMascota", function () {
        opcion = 3;
        fila = $(this).closest("tr");
        idMascota = parseInt(fila.find('td:eq(0)').text());
        nombreMascota = fila.find('td:eq(1)').text();
        edadMascota = fila.find('td:eq(2)').text();
        tipoPelo = fila.find('td:eq(3)').text();
        razaMascota = fila.find('td:eq(4)').text();
        sexoMascota = fila.find('td:eq(5)').text();

        habilitar_inputs(1);

        $('#nombreMascota').val(nombreMascota);
        $('#edadMascota').val(edadMascota);
        $('#tipoPelo').val(tipoPelo);
        $('#razaMascota').val(razaMascota);
        $('#sexoMascota').val(sexoMascota);

        $("#btnGuardarMascota").text("Eliminar");

        $(".modal-title").text("Eliminar Mascota");
        $('#modalMascota').modal('show');

    });

    //Seleccionar
    $(document).on("click", "#btnSeleccionarMascota", function () {
        fila = $(this).closest("tr");
        idMascota = parseInt(fila.find('td:eq(0)').text());
        nombreMascota = fila.find('td:eq(1)').text();
        edadMascota = fila.find('td:eq(2)').text();
        tipoPelo = fila.find('td:eq(3)').text();
        razaMascota = fila.find('td:eq(4)').text();
        sexoMascota = fila.find('td:eq(5)').text();

        habilitar_inputs(3);

        $('#nombreMascota').val(nombreMascota);
        $('#edadMascota').val(edadMascota);
        $('#tipoPelo').val(tipoPelo);
        $('#razaMascota').val(razaMascota);
        $('#sexoMascota').val(sexoMascota);

        $(".modal-title").text("Informacion Mascota");
        $('#modalMascota').modal('show');
    });
});

function habilitar_inputs(valor) {
    switch (valor) {
        case 1:
            $('#nombreMascota').prop('readonly', true);
            $('#edadMascota').prop('readonly', true);
            $('#tipoPelo').prop('disabled', true);
            $('#razaMascota').prop('disabled', true);
            $('#sexoMascota').prop('disabled', true);
            $("#btnGuardarMascota").prop("disabled", false);
            break;
        case 2:
            $('#nombreMascota').prop('readonly', false);
            $('#edadMascota').prop('readonly', false);
            $('#tipoPelo').prop('disabled', false);
            $('#razaMascota').prop('disabled', false);
            $('#sexoMascota').prop('disabled', false);
            $("#btnGuardarMascota").prop("disabled", false);
            break;
        case 3:
            $('#nombreMascota').prop('readonly', true);
            $('#edadMascota').prop('readonly', true);
            $('#tipoPelo').prop('disabled', true);
            $('#razaMascota').prop('disabled', true);
            $('#sexoMascota').prop('disabled', true);
            $("#btnGuardarMascota").prop("disabled", true);
            break;
    }
}