$(document).ready(function () {

    $('#tablaHistorial').DataTable({
        "destroy": true,
        "ajax": {
            "method": "POST",
            "url": "bd/listarHistorial.php"
        },
        "columns": [
            { "data": "id_cita" },
            { "data": "nombreCliente" },
            { "data": "nombre" },
            { "data": "servicio" },
            { "data": "nombreEmpleado" },
            { "data": "fecha_cita" },
            { "data": "hora_cita" },
            { "data": "hora_finalizacion" },
            {
                "data": "correa",
                "render": function (data) {
                    return (data == true) ? '<span class="far fa-smile"></span>' : '<span class="far fa-frown"></span>';
                }
            },
            {
                "data": "collar",
                "render": function (data) {
                    return (data == true) ? '<span class="far fa-smile"></span>' : '<span class="far fa-frown"></span>';
                }
            },
            { "data": "precio" }
        ],
        "lengthMenu": [
            [10, 20, 50, -1],
            [10, 20, 50, "All"]
        ]
    });


});