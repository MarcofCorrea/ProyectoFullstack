window.addEventListener("load", () => {
  const form = document.getElementById("formRegistro");
  const nombre = document.getElementById("sign-name");
  const apellido = document.getElementById("sign-apellido");
  const email = document.getElementById("sign-mail");
  const password = document.getElementById("sign-pass");
  const passConfirmar = document.getElementById("sign-pass2");
  //   console.log(nombre)
  //   console.log(apellido)
  //   console.log(form)
  //   console.log(email)
  //   console.log(password)
  //   console.log(password2)
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarCampos();
  });

  const validarCampos = () => {
    // capturar valores
    // trim para remover espacios en blanco
    const nombreValor = nombre.value.trim();
    const nombreValue = nombre.value.trim();
    const apellidoValue = apellido.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passConfirmarValue = passConfirmar.value.trim();

    // verificar que no haya campos vacíos

    // validar nombre
    if (!nombreValue) {
      //   console.log("CAMPO VACIO");
      validarFalla(nombre, "No puede dejar el campo vacío");
    } else {
      validarOk(nombre, "");
    }

    // validar apellido
    if (!apellidoValue) {
      //   console.log("CAMPO VACIO");
      validarFalla(apellido, "No puede dejar el campo vacío");
    } else {
      validarOk(apellido);
    }

    // validar email
    // - campo vacío
    // - expresiones regulares
    if (!emailValue) {
      // console.log("CAMPO VACIO");
      validarFalla(email, "No puede dejar el email en blanco");
    } else if (!validaEmail()) {
      validarFalla(email, "El email es inválido");
    }else {
        validarOk(email);
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
      validarOk(password);
    }
    // - campo vacio
    // - contraseñas iguales
    if (!passConfirmarValue) {
      validarFalla(passConfirmar, "Confirme su contraseña");
    } else if (passwordValue != passConfirmarValue) {
      validarFalla(passConfirmar, "Las contraseñas no coinciden");
    } else {
      validarOk(passConfirmar);
    }
  };

  const validarFalla = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector(".aviso");
    aviso.innerText = msje;
    formControl.className = "form-control form-group falla";
  };

  const validarOk = (input, msje) => {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector(".aviso");
    formControl.className = "form-control form-group ok";
  };

  const validaEmail = (email) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email);
    // return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    //   email
    // );
  };
});