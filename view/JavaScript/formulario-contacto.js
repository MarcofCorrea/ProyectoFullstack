const $form = document.querySelector("#form")

$form.addEventListener("submit", handlesubmit)

async function handlesubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "accept": "application/json"
        }

    })

    if (response.ok){
        this.reset()
        swal ({
            title:"Mensaje Enviado",
            icon:"success"
           })
    }


      
}