window.addEventListener("load", () => {
  const form = document.getElementById("formRegistro");
  const nombre = document.getElementById("sign-name");
  const apellido = document.getElementById("sign-apellido");
  const email = document.getElementById("sign-mail");
  const password = document.getElementById("sign-pass");
  const passConfirmar = document.getElementById("sign-pass2");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validarCampos() === true ) {
      console.log("pasa");
      swal({
        title: "Registro exitoso",
        text: "El usuario se ha registrado correctamente",
        icon: "success",
        button: "Aceptar",
      }).then(function () {
        window.location.href = "./login-registro.html";
      });
      
    } 
  });

  const validarCampos = () => {
    // capturar valores
    // trim para remover espacios en blanco
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passConfirmarValue = passConfirmar.value.trim();

    // validar nombre

    if (!nombreValue) {
      validarFalla(nombre, "No puede dejar el campo vacío");
    } else {
      validarOk(nombre, " ");
    }

    // validar apellido
    if (!apellidoValue) {
      validarFalla(apellido, "No puede dejar el campo vacío");
    } else {
      validarOk(apellido, " ");
    }

    // validar email
    // - campo vacío
    // - expresiones regulares

    if (!emailValue) {
      validarFalla(email, "No puede dejar el campo vacío");
    } else if (!validaEmail(emailValue)) {
      validarFalla(email, "El e-mail no es válido");
    } else {
      validarOk(email, " ");
    }

    // validar password
    // - campo vacio
    // - longitud
    // - expresiones regulares
    //          - dígito
    //          - minúscula
    //          - mayúscula

    const er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

    if (!passwordValue) {
      validarFalla(password, "No puede dejar el campo vacío");
    } else if (passwordValue.length < 8 || passwordValue.length > 12) {
      validarFalla(password, "Debe tener entre 8 a 12 caracteres");
    } else if (!passwordValue.match(er)) {
      validarFalla(
        password,
        "Debe tener una mayúscula, una minúscula y un número"
      );
    } else {
      validarOk(password, " ");
    }

    if (!passConfirmarValue) {
      validarFalla(passConfirmar, "No puede dejar el campo vacío");
    } else if (
      passConfirmarValue.length < 8 ||
      passConfirmarValue.length > 12
    ) {
      validarFalla(passConfirmar, "Debe tener entre 8 a 12 caracteres");
    } else if (!passConfirmarValue.match(er)) {
      validarFalla(
        passConfirmar,
        "Debe tener una mayúscula, una minúscula y un número"
      );
    } else if (passwordValue != passConfirmarValue) {
      validarFalla(passConfirmar, "Las contraseñas no coinciden");
    } else {
      validarOk(passConfirmar, " ");
    }
  };

  // validar ok y falla
  const validarFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector(".aviso");
    aviso.innerText = msje;
    formControl.className = "form-control form-group falla mt-1";
  };

  const validarOk = (input, msje) => {
    const formControl = input.parentElement;
    formControl.className = "form-control form-group ok mt-2";
  };

  const validaEmail = (email) => {
    let re =
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
    return re.test(email);
  };
});
