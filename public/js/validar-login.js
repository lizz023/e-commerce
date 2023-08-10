const email = document.querySelector("[data-email]");
const password = document.querySelector('[data-password');

email.addEventListener('blur', (evento) => {
    validaEmail(evento.target);
});
password.addEventListener('blur', (evento) => {
    validaPassword(evento.target);
});

const loguear = async() => {
    const email = document.querySelector("[data-email]").value
    const password = document.querySelector('[data-password').value

    if (email == "eliiza.023@gmail.com" && password== ""){
        window.location.href = "/home"
    }else{
        alert("Datos incorrectos")
    }
}
