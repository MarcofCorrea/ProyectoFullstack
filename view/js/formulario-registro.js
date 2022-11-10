// Crear carga de datos de usuario en el formulario de registro
import { usuarios } from "./usuarios.js";

let btnRegister = document.getElementById("btnRegistro");
let name = document.getElementById("sign-name");
let apellido = document.getElementById("sign-apellido");
let email = document.getElementById("email");
let password = document.getElementById("sign-pass");
let password2 = document.getElementById("sign-pass2");

// Verificar campo vacío
btnRegister.addEventListener("click", function() {
    if (
        name.value === "" ||
        apellido.value === "" ||
        email.value === "" ||
        password.value === "" ||
        password2.value === "" 
    ) {
        swal("Error", "Todos los campos son obligatorios", "error", {
            button: "Aceptar",
        });
        // alert("Debe completar todos los campos");
    } else {
        // Verificar usuario existente
        if (usuarios[email.value] === undefined) {
            // Verificar que las contraseñas sean iguales
            if (password.value === password2.value) {
                // Validar email
                if (validateEmail(email.value)) {
                    // Agregar usuario
                    users[username.value] = password.value;

                    // Verifica si se guardo el usuario {Solo para devs} TODO: Borrar a posteriori
                    console.log(users);

                    swal({
                        title: "Registro exitoso",
                        text: "El usuario se ha registrado correctamente",
                        icon: "success",
                        button: "Aceptar",
                    }).then(function() {
                        window.location.href = "../login-registro.htmllogin.html";
                    });
                    // alert("Usuario registrado con exito");
                    // window.location.href = "./login.html";
                } else {
                    swal("Error", "El email no es valido", "error", {
                        button: "Aceptar",
                    });
                }
            } else {
                swal({
                    title: "Error",
                    text: "Las contraseñas no coinciden",
                    icon: "error",
                    button: "Aceptar",
                });
                // alert("Las contraseñas no coinciden");
            }
        } else {
            swal({
                title: "Error",
                text: "El usuario ya existe",
                icon: "error",
                button: "Aceptar",
            });
            // alert("El usuario ya existe");
        }
    }
});

// Validar email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

//