import { clientServices } from "../services/lista-usuarios-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    console.log (email, "---", password);

    clientServices
        .crearUsuario(email, password)
        .then((respuesta) => {
            window.location.href = "/products-mario_bros"
            console.log(respuesta)
        })
        .catch((err) => console.log(err));
})


