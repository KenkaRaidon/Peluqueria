$(document).ready(function () {
  var opcion;
  var idEmpleado=0;

  var table = $('#tablaEmpleado').DataTable({
    "destroy": true,
    "ajax": {
      "method": "POST",
      "url": "bd/listarEmpleado.php"
    },
    "columns": [
      { "data": "id_empleado" },
      { "data": "nombre" },
      { "data": "apellido_paterno" },
      { "data": "apellido_materno" },
      { "data": "email" },
      { "data": "telefono" },
      { "data": "fecha_empleo" },
      { "defaultContent": "<button id='btnEditarEmpleado' type='button' class='fas fa-pencil-alt'></button><button id='btnSeleccionarEmpleado' type='button' class='fas fa-search'></button><button id='btnEliminarEmpleado' type='button' class='fas fa-trash-alt'></button>" }
    ],
    "lengthMenu": [
      [10, 20, 50, -1],
      [10, 20, 50, "All"]
    ]
  });

  $("#btnGuardarEmpleado").click(function (e) {
    var valid = this.form.checkValidity();
    if (valid) {
      e.preventDefault();
      var nombreEmpleado = $('#nombreEmpleado').val();
      var apellidoPaternoEmpleado = $('#ApellidoPaternoEmpleado').val();
      var apellidoMaternoEmpleado = $('#ApellidoMaternoEmpleado').val();
      var emailEmpleado = $('#emailEmpleado').val();
      var telefonoEmpleado = $('#telefonoEmpleado').val();
      var fechaEmpleo = $('#fechaEmpleo').val();
      $.ajax({
        type: 'POST',
        url: 'bd/crudEmpleado.php',
        datatype: "json",
        data: {
          idEmpleado: idEmpleado,
          nombreEmpleado: nombreEmpleado,
          apellidoPaternoEmpleado: apellidoPaternoEmpleado,
          apellidoMaternoEmpleado: apellidoMaternoEmpleado,
          emailEmpleado: emailEmpleado,
          telefonoEmpleado: telefonoEmpleado,
          fechaEmpleo: fechaEmpleo,
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
      $('#modalEmpleado').modal('hide');

    }
  });

  //Nuevo
  $("#btnNuevoEmpleado").click(function () {
    opcion = 1;
    $("#formEmpleado").trigger("reset");
    habilitar_inputs(2);
    $("#btnGuardarEmpleado").text("Guardar");
    $(".modal-title").text("Alta de Empleado");
    $('#modalEmpleado').modal('show');
  });

  //Editar
  $(document).on("click", "#btnEditarEmpleado", function () {
    opcion = 2;
    fila = $(this).closest("tr");
    idEmpleado = parseInt(fila.find('td:eq(0)').text());
    nombreEmpleado = fila.find('td:eq(1)').text();
    apellidoPaternoEmpleado = fila.find('td:eq(2)').text();
    apellidoMaternoEmpleado = fila.find('td:eq(3)').text();
    emailEmpleado = fila.find('td:eq(4)').text();
    telefonoEmpleado = fila.find('td:eq(5)').text();
    fechaEmpleo = fila.find('td:eq(6)').text();

    habilitar_inputs(2);

    $('#nombreEmpleado').val(nombreEmpleado);
    $('#ApellidoPaternoEmpleado').val(apellidoPaternoEmpleado);
    $('#ApellidoMaternoEmpleado').val(apellidoMaternoEmpleado);
    $('#emailEmpleado').val(emailEmpleado);
    $('#telefonoEmpleado').val(telefonoEmpleado);
    $('#fechaEmpleo').val(fechaEmpleo);

    $("#btnGuardarEmpleado").text("Guardar");

    $(".modal-title").text("Editar Empleado");
    $('#modalEmpleado').modal('show');

  });

  //Eliminar
  $(document).on("click", "#btnEliminarEmpleado", function () {
    opcion = 3;
    fila = $(this).closest("tr");
    idEmpleado = parseInt(fila.find('td:eq(0)').text());
    nombreEmpleado = fila.find('td:eq(1)').text();
    apellidoPaternoEmpleado = fila.find('td:eq(2)').text();
    apellidoMaternoEmpleado = fila.find('td:eq(3)').text();
    emailEmpleado = fila.find('td:eq(4)').text();
    telefonoEmpleado = fila.find('td:eq(5)').text();
    fechaEmpleo = fila.find('td:eq(6)').text();

    habilitar_inputs(1);

    $('#nombreEmpleado').val(nombreEmpleado);
    $('#ApellidoPaternoEmpleado').val(apellidoPaternoEmpleado);
    $('#ApellidoMaternoEmpleado').val(apellidoMaternoEmpleado);
    $('#emailEmpleado').val(emailEmpleado);
    $('#telefonoEmpleado').val(telefonoEmpleado);
    $('#fechaEmpleo').val(fechaEmpleo);

    $("#btnGuardarEmpleado").text("Eliminar");

    $(".modal-title").text("Eliminar Empleado");
    $('#modalEmpleado').modal('show');

  });

  //Seleccionar
  $(document).on("click", "#btnSeleccionarEmpleado", function () {
    fila = $(this).closest("tr");
    idEmpleado = parseInt(fila.find('td:eq(0)').text());
    nombreEmpleado = fila.find('td:eq(1)').text();
    apellidoPaternoEmpleado = fila.find('td:eq(2)').text();
    apellidoMaternoEmpleado = fila.find('td:eq(3)').text();
    emailEmpleado = fila.find('td:eq(4)').text();
    telefonoEmpleado = fila.find('td:eq(5)').text();
    fechaEmpleo = fila.find('td:eq(6)').text();

    habilitar_inputs(3);

    $('#nombreEmpleado').val(nombreEmpleado);
    $('#ApellidoPaternoEmpleado').val(apellidoPaternoEmpleado);
    $('#ApellidoMaternoEmpleado').val(apellidoMaternoEmpleado);
    $('#emailEmpleado').val(emailEmpleado);
    $('#telefonoEmpleado').val(telefonoEmpleado);
    $('#fechaEmpleo').val(fechaEmpleo);

    $(".modal-title").text("Informacion Empleado");
    $('#modalEmpleado').modal('show');
  });

  function habilitar_inputs(valor) {
    switch (valor) {
      case 1:
        $('#nombreEmpleado').prop('readonly', true);
        $('#ApellidoPaternoEmpleado').prop('readonly', true);
        $('#ApellidoMaternoEmpleado').prop('readonly', true);
        $('#emailEmpleado').prop('readonly', true);
        $('#telefonoEmpleado').prop('readonly', true);
        $('#fechaEmpleo').prop('readonly', true);
        $("#btnGuardarEmpleado").prop("disabled", false);
        break;
      case 2:
        $('#nombreEmpleado').prop('readonly', false);
        $('#ApellidoPaternoEmpleado').prop('readonly', false);
        $('#ApellidoMaternoEmpleado').prop('readonly', false);
        $('#emailEmpleado').prop('readonly', false);
        $('#telefonoEmpleado').prop('readonly', false);
        $('#fechaEmpleo').prop('readonly', false);
        $("#btnGuardarEmpleado").prop("disabled", false);
        break;
      case 3:
        $('#nombreEmpleado').prop('readonly', true);
        $('#ApellidoPaternoEmpleado').prop('readonly', true);
        $('#ApellidoMaternoEmpleado').prop('readonly', true);
        $('#emailEmpleado').prop('readonly', true);
        $('#telefonoEmpleado').prop('readonly', true);
        $('#fechaEmpleo').prop('readonly', true);
        $("#btnGuardarEmpleado").prop("disabled", true);
        break;
    }
  }
});

