import { clientServices } from "../services/lista-usuarios-service.js";

const formulario = document.querySelector("[data-form]")

if (formulario) {
    formulario.addEventListener("submit", (evento) =>{
        evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;

    clientServices
        .crearUsuario(email, password)
        .then(() => {
            window.location.href = "/"
            
        })
        .catch((err) => console.log(err));
    })
}


