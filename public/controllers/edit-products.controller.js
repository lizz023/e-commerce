
import { productsGenericService } from "../services/products-service.js"


const form = document.querySelector("[data-link]")

form && form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const imgURL = document.querySelector('[data-imgURL]').value
    const categoria = document.querySelector('[data-categoria]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    

    productsGenericService.products(imgURL,categoria,name,price,descripcion)
    .then(respuesta => {
        window.location.href = "/"
        console.log(respuesta);
    }).catch((err) => console.log(err));

})
    
