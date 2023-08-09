import { clientServices } from "../services/lista-usuarios-service.js";

const singup = document.querySelector("[data-singup]");

singup && singup.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    clientServices.crearUsuario(email,password).then(() => {
                alert ("Usuario creado");
                window.location.href = "/login"
            }).catch(err => alert(err));
   
})