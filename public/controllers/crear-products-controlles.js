import { productService } from "../services/products_mario-service"

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const imgURL = document.querySelector('[data-imgURL]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value

    products-mario-service.createProducts(imgURL,name,price)
    .then(respuesta => {

        window.location.href = "/home"
        console.log(respuesta);
    }).catch(error => {
        console.log(error);
    })
})
