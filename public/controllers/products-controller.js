import { productService } from "../services/products_mario-service.js";
import { initCarousels } from "../js/carrusel.js";


//POST --> CREATE
const newProduct = (name, imgURL, price, id ) =>{
    const card = document.createElement("div");
    //card.classList.add("card__container", "card__img")

    const container =
    `<div class="card__container">
        <img class="card__img" src="${imgURL}" alt="">
        <h4>${price}</h4>
        <p>${name}</p>
        <a href="${id}">Ver producto</a>
    </div>`

    card.innerHTML = container;
    return card;
}
const productos = document.querySelector("[data-mario_bros] > div")

productService.productsMario().then((data) => {

        data.forEach(({name, imgURL, price, id}) => {
            const newLinea = newProduct(name, imgURL, price, id)
            productos.appendChild(newLinea);
        });
        productos.classList.add("your-class")
        initCarousels();
}).catch((error) => console.log(error))



