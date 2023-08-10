
import { productsGenericService } from "../services/products-service.js"


const form = document.querySelector("[data-link]")

form && form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const imgURL = document.querySelector('[data-imgURL]').value
    const categoria = document.querySelector('[data-categoria]').value
    const name = document.querySelector('[data-name]').value
    const price = document.querySelector('[data-price]').value
    const descripcion = document.querySelector('[data-descripcion]').value
    

    productsGenericService.products(imgURL,categoria,name,price,descripcion ,"products-mario_bros")
    .then(respuesta => {
        window.location.href = "/products-mario_bros"
        console.log(respuesta);
    }).catch((err) => console.log(err));

    productsGenericService.products(imgURL,categoria,name,price,descripcion ,"products-video_game")
    .then(respuesta => {
        window.location.href = "/products-video_game"
        console.log(respuesta);
    }).catch((err) => console.log(err));

    productsGenericService.products(imgURL,categoria,name,price,descripcion ,"products-board_game")
    .then(respuesta => {
        window.location.href = "/products-board_game"
        console.log(respuesta);
    }).catch((err) => console.log(err));


})
    
