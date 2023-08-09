
import { initCarousels } from "../js/carrusel.js";
import { productsGenericService } from "../services/products-service.js";


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
const productos = document.querySelector("[data-mario_bros] > div");
// const productosConsola = document.querySelector("[data-video_game] > div");

//Productos Mario Bros
productsGenericService.products("products-mario_bros").then((data) => {
        data.forEach(({name, imgURL, price, id}) => {
            const newLinea = newProduct(name, imgURL, price, id)
            productos.appendChild(newLinea);
        });
        productos.classList.add("your-class")
        initCarousels();
}).catch((error) => console.log(error))

// Productos Consola
productsGenericService.products("products-video_game").then((data) => {
    data.forEach(({name, imgURL, price, id}) => {
        const newLinea = newProduct(name, imgURL, price, id)
        productosConsola.appendChild(newLinea);
    });
    productosConsola.classList.add("your-class")
    initCarousels();
}).catch((error) => console.log(error))


