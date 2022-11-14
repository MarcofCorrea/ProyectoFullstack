window.addEventListener("load", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  var validar = false;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCampos();
    if (validar == true) {
      // alert(
      //   "ok"
      // )
      swal({
        title: "Login exitoso",
        text: "El usuario se ha logueado correctamente",
        icon: "success",
        button: "Aceptar",
      }).then(function () {
        window.location.href = "../index.html";
      });
    } else {
      swal("Error", "Revise los datos", "error", {
        button: "Aceptar" });
  }});

  const validarCampos = () => {
    // capturar valores
    // trim para remover espacios en blanco
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // validar email
    // - campo vacío
    // - expresiones regulares

    if (!emailValue) {
      validarFalla(email, "No puede dejar el campo vacío");
      validar = false;
    } else if (!validaEmail(emailValue)) {
      validarFalla(email, "El e-mail no es válido");
      validar = false;
    } else {
      validarOk(email, " ");
      validar = true;
    }
    validar = false;

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
      validar = false;
    } else if (passwordValue.length < 8 || passwordValue.length > 12) {
      validarFalla(password, "Debe tener entre 8 a 12 caracteres");
      validar = false;
    } else if (!passwordValue.match(er)) {
      validarFalla(
        password,
        "Contraseña incorrecta"
      );
      validar = false;
    } else {
      validarOk(password, " ");
      validar = true;
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

