function onEnviar() {
  let form = document.getElementById("#loginForm");
  let email = document.forms["loginForm"]["email"].value;
  let password = document.forms["loginForm"]["password"].value;

  form.addEventListener('submit', event => {
    if (form.checkValidity()) {
    //   event.preventDefault()
    //   event.stopPropagation()
        
    }
    });
}
