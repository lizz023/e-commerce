import { clientServices } from "../services/lista-usuarios-service.js";

const login = document.querySelector("[data-form]");

login && login.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    clientServices.VerificarUsuario(email,password).then(() => {
                alert ("inicio Exitoso");
                window.location.href = "/"
            }).catch(err => alert(err));
   

            
})