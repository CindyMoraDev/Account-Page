var nombre = document.getElementById('nombreTXT');
var correo = document.getElementById('correoTXT');
var area = document.getElementById('areaTXT');


function completo() {


    //asignaciones de los campos form a variables
    nombre = nombreTXT.value;
    correo = correoTXT.value;
    area = areaTXT.value;

    if (nombre == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su nombre',
        })
        return;
    }

    if (correo == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su correo electrónico',
        })
        return;
    } else {
        correoValid = document.login.c2.value;
        if (correoValid.length < 10) {
            Swal.fire({
                icon: 'warning',
                title: 'El correo es muy corto, debe ser de mas de 10 caracteres',
            })
            return;
        }
    }
    if (area == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su mensaje deseado',
        })
        return;
    }

    comentario = document.login.c3.value;
    if (comentario.length < 12) {
        Swal.fire({
            icon: 'warning',
            title: 'El comentario debe tener mas de 12 letras',
        })
        return;
    } else {
        Swal.fire({
            icon: 'success',
            title: 'Mensaje Enviado',
            text: 'Nos pondremos en contacto pronto',
        })
        nombreTXT.value = "";
        correoTXT.value = "";
        areaTXT.value = "";
        return;
    }

}

function completoCorto() {


    //asignaciones de los campos form a variables
    nombre = nombreTXT.value;
    correo = correoTXT.value;


    if (nombre == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su nombre',
        })
        return;
    }

    if (correo == "") {
        Swal.fire({
            icon: 'warning',
            title: 'Digite su correo electrónico',
        })
        return;
    } else {
        correoValid = document.login.c2.value;
        if (correoValid.length < 10) {
            Swal.fire({
                icon: 'warning',
                title: 'El correo es muy corto, debe ser de mas de 10 caracteres',
            })
            return;
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje Enviado',
                text: 'Nos pondremos en contacto pronto',
            })
            nombreTXT.value = "";
            correoTXT.value = "";
            return;
        }
    }

}