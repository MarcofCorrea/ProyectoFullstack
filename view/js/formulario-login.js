window.addEventListener("load", () => {
  const btnLogin = document.getElementById("btn-login");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  btnLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passValue = password.value;
    if (emailValue === "" || passValue === "") {
      swal("Error", "Debe ingresar usuario y contraseña", "error", {
        button: "Aceptar",
      });
    } else if (
      validarEmail(emailValue) &&
      passValue.length > 8 &&
      passValue.length < 12
    ) {
      swal({
        title: "Login exitoso",
        text: "El usuario se ha logueado correctamente",
        icon: "success",
        button: "Aceptar",
      }).then(function () {
        window.location.href = "../index.html";
      });
    } else {
      swal("Error", "Debe ingresar usuario y contraseña", "error", {
        button: "Aceptar",
      });
    }

    const validarEmail = (email) => {
      let re =
        /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i;
      return re.test(email);
    };
  });
});
