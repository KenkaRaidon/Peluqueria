$(document).ready(function () {
  var opcion;
  //var idEmpleado, nombreEmpleado, apellidoPaternoEmpleado, apellidoMaternoEmpleado, emailEmpleado, telefonoEmpleado, fechaEmpleo;

  $('#tabla').DataTable({
    "lengthMenu": [
      [10, 20, 50, -1],
      [10, 20, 50, "All"]
    ]
  });

  $("#btnGuardarEmpleado").click(function (e) {
    var valid = this.form.checkValidity();
    if (valid) {
      e.preventDefault();
    
      switch (opcion) {
        case 1:
          var nombreEmpleado = $('#nombreEmpleado').val();
          var ApellidoPaternoEmpleado = $('#ApellidoPaternoEmpleado').val();
          var ApellidoMaternoEmpleado = $('#ApellidoMaternoEmpleado').val();
          var emailEmpleado = $('#emailEmpleado').val();
          var telefonoEmpleado = $('#telefonoEmpleado').val();
          var fechaEmpleo = $('#fechaEmpleo').val();
          $.ajax({
            type: 'POST',
            url: 'bd/altas_empleado.php',
            datatype: "json",
            data: {
              nombreEmpleado: nombreEmpleado,
              ApellidoPaternoEmpleado: ApellidoPaternoEmpleado,
              ApellidoMaternoEmpleado: ApellidoMaternoEmpleado,
              emailEmpleado: emailEmpleado,
              telefonoEmpleado: telefonoEmpleado,
              fechaEmpleo: fechaEmpleo
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
          break;

        case 2:
          var nombreEmpleado = $('#nombreEmpleado').val();
          var apellidoPaternoEmpleado = $('#ApellidoPaternoEmpleado').val();
          var apellidoMaternoEmpleado = $('#ApellidoMaternoEmpleado').val();
          var emailEmpleado = $('#emailEmpleado').val();
          var telefonoEmpleado = $('#telefonoEmpleado').val();
          var fechaEmpleo = $('#fechaEmpleo').val();
          $.ajax({
            type: 'POST',
            url: 'bd/editar_empleado.php',
            datatype: "json",
            data: {
              idEmpleado: idEmpleado,
              nombreEmpleado: nombreEmpleado,
              apellidoPaternoEmpleado: apellidoPaternoEmpleado,
              apellidoMaternoEmpleado: apellidoMaternoEmpleado,
              emailEmpleado: emailEmpleado,
              telefonoEmpleado: telefonoEmpleado,
              fechaEmpleo: fechaEmpleo
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
          break;
      }

      $('#modalEmpleado').modal('hide');
    }
  });

  $("#btnNuevoEmpleado").click(function () {
    opcion = 1;
    $("#formEmpleado").trigger("reset");
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

    $('#nombreEmpleado').val(nombreEmpleado);
    $('#ApellidoPaternoEmpleado').val(apellidoPaternoEmpleado);
    $('#ApellidoMaternoEmpleado').val(apellidoMaternoEmpleado);
    $('#emailEmpleado').val(emailEmpleado);
    $('#telefonoEmpleado').val(telefonoEmpleado);
    $('#fechaEmpleo').val(fechaEmpleo);

    $(".modal-title").text("Editar Ciudad");
    $('#modalEmpleado').modal('show');

  });
});
