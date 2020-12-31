$(document).ready(function () {
    var opcion;
    var idUsuario = 0;

    var table = $('#tablaUsuario').DataTable({
        "destroy": true,
        "ajax": {
            "method": "POST",
            "url": "bd/listarUsuario.php"
        },
        "columns": [
            { "data": "id_usuario" },
            { "data": "nombre_usuario" },
            { "data": "password" },
            { "data": "tipo_usuario" },
            { "data": "id_empleado" },
            { "defaultContent": "<button id='btnEditarUsuario' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarUsuario' type='button' class='fas fa-search'></button><button id='btnEliminarUsuario' type='button' class='fas fa-trash-alt'></button>" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });

    $("#btnGuardarUsuario").click(function (e) {
        var valid = this.form.checkValidity();
        if (valid) {
            e.preventDefault();
            var nombreUsuario = $('#nombreUsuario').val();
            var password = $('#password').val();
            var tipoUsuario = $('#tipoUsuario').val();
            var empleado = $('#empleado').val();
            $.ajax({
                type: 'POST',
                url: 'bd/crudUsuario.php',
                datatype: "json",
                data: {
                    idUsuario: idUsuario,
                    nombreUsuario: nombreUsuario,
                    password: password,
                    tipoUsuario: tipoUsuario,
                    empleado: empleado,
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
            $('#modalUsuario').modal('hide');

        }
    });

    //Nuevo
    $("#btnNuevoUsuario").click(function () {
        opcion = 1;
        $("#formUsuario").trigger("reset");
        habilitar_inputs(2);
        $("#btnGuardarUsuario").text("Guardar");
        $(".modal-title").text("Alta de Usuario");
        $('#modalUsuario').modal('show');
    });

    //Editar
    $(document).on("click", "#btnEditarUsuario", function () {
        opcion = 2;
        fila = $(this).closest("tr");
        idUsuario = parseInt(fila.find('td:eq(0)').text());
        nombreUsuario = fila.find('td:eq(1)').text();
        password = fila.find('td:eq(2)').text();
        tipoUsuario = fila.find('td:eq(3)').text();
        empleado = fila.find('td:eq(4)').text();

        habilitar_inputs(2);

        $('#nombreUsuario').val(nombreUsuario);
        $('#password').val(password);
        $('#tipoUsuario').val(tipoUsuario);
        $('#empleado').val(empleado);

        $("#btnGuardarUsuario").text("Guardar");

        $(".modal-title").text("Editar Usuario");
        $('#modalUsuario').modal('show');

    });

    //Eliminar
    $(document).on("click", "#btnEliminarUsuario", function () {
        opcion = 3;
        fila = $(this).closest("tr");
        idUsuario = parseInt(fila.find('td:eq(0)').text());
        nombreUsuario = fila.find('td:eq(1)').text();
        password = fila.find('td:eq(2)').text();
        tipoUsuario = fila.find('td:eq(3)').text();
        empleado = fila.find('td:eq(4)').text();

        habilitar_inputs(1);

        $('#nombreUsuario').val(nombreUsuario);
        $('#password').val(password);
        $('#tipoUsuario').val(tipoUsuario);
        $('#empleado').val(empleado);

        $("#btnGuardarUsuario").text("Eliminar");

        $(".modal-title").text("Eliminar Usuario");
        $('#modalUsuario').modal('show');

    });

    //Seleccionar
    $(document).on("click", "#btnSeleccionarUsuario", function () {
        fila = $(this).closest("tr");
        idUsuario = parseInt(fila.find('td:eq(0)').text());
        nombreUsuario = fila.find('td:eq(1)').text();
        password = fila.find('td:eq(2)').text();
        tipoUsuario = fila.find('td:eq(3)').text();
        empleado = fila.find('td:eq(4)').text();

        habilitar_inputs(3);

        $('#nombreUsuario').val(nombreUsuario);
        $('#password').val(password);
        $('#tipoUsuario').val(tipoUsuario);
        $('#empleado').val(empleado);

        $(".modal-title").text("Informacion Usuario");
        $('#modalUsuario').modal('show');
    });

    function habilitar_inputs(valor) {
        switch (valor) {
            case 1:
                $('#nombreUsuario').prop('readonly', true);
                $('#password').prop('readonly', true);
                $("#tipoUsuario").prop("disabled", true);
                $("#empleado").prop("disabled", true);
                $("#btnGuardarUsuario").prop("disabled", false);
                break;
            case 2:
                $('#nombreUsuario').prop('readonly', false);
                $('#password').prop('readonly', false);
                $("#tipoUsuario").prop("disabled", false);
                $("#empleado").prop("disabled", false);
                $("#btnGuardarUsuario").prop("disabled", false);
                break;
            case 3:
                $('#nombreUsuario').prop('readonly', true);
                $('#password').prop('readonly', true);
                $("#tipoUsuario").prop("disabled", true);
                $("#empleado").prop("disabled", true);
                $("#btnGuardarUsuario").prop("disabled", true);
                break;
        }
    }
});

