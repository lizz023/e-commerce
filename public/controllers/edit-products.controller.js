
import { productService } from "../services/products_mario-service.js"

const form = document.querySelector("[data-link]")

if(form){
    form.addEventListener("submit", (evento) => {
        evento.preventDefault()
    
        const imgURL = document.querySelector('[data-imgURL]').value
        const categoria = document.querySelector('[data-categoria]').value
        const name = document.querySelector('[data-name]').value
        const price = document.querySelector('[data-price]').value
        const descripcion = document.querySelector('[data-descripcion]').value
        

        productService.productsMario(imgURL,categoria,name,price,descripcion)
        .then(respuesta => {
            window.location.href = "/add-products"
            console.log(respuesta);
        }).catch((err) => console.log(err));
    })
    
}