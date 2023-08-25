
import { initCarousels } from "../js/carrusel.js";
import { productsGenericService } from "../services/products-service.js";


//POST --> CREATE
const newProduct = (name, imgURL, price, id) => {
    const card = document.createElement("div");
    //card.classList.add("card__container", "card__img")

    const container =
        `<div class="card__container">
        <img class="card__img" src="${imgURL}" alt="">
        <h4>${price} USD</h4>
        <p>${name}</p>
        <a href="${id}">Ver producto</a>
    </div>`

    card.innerHTML = container;
    return card;
}
const productosMario = document.querySelector("[data-mario_bros] > div");
const productosConsola = document.querySelector("[data-video_game] > div");
const productosJuegos = document.querySelector("[data-board_game] > div");

//Render all products in their categories
const allProductsCall = productsGenericService.products();
allProductsCall.then((data) => {
    data.forEach(({ name, imgURL, price, id, categoria }) => {
        const newLinea = newProduct(name, imgURL, price, id)

        switch (categoria) {
            case "products-mario_bros":
                productosMario.appendChild(newLinea);
                break;
            case "products-video_game":
                productosConsola.appendChild(newLinea);
                break;
            case "products-board_game":
                productosJuegos.appendChild(newLinea);
                break;
        }
    });
    productosMario.classList.add("your-class")
    productosConsola.classList.add("your-class")
    productosJuegos.classList.add("your-class")
    initCarousels();
}).catch(() => console.log(error));
