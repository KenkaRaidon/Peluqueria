$(document).ready(function () {
    $("#btnLogin").click(function (e) {
        var valid = this.form.checkValidity();
        if (valid) {
            e.preventDefault();

            var username = $('#username').val();
            var password = $('#password').val();
       
            $.ajax({
                type: 'POST',
                url: 'bd/login.php',
                datatype: "json",
                data: {
                    username: username,
                    password: password,
                },
                success: function (data) {
                    
                    if(data==1){
                        window.location.href = '../index.php';
                    }else{
                        Swal.fire(
                            'Error!',
                            'Usuario o password incorrecto',
                            'error'
                        )
                    }
                },
                error: function (data) {
                    Swal.fire(
                        'Error!',
                        'Hubo un error al guardar',
                        'error'
                    )
                }
            });
        }
    });

});