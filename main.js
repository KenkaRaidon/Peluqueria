$(document).ready(function () {
  $('#tabla').DataTable({
    "lengthMenu": [
      [10, 20, 50, -1],
      [10, 20, 50, "All"]
    ]
  });
});
