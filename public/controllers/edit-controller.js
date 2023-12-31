import { productsGenericService } from "../services/products-service.js";

const Product = (name, imgURL, price, id ) =>{

    const cardMario = document.createElement("div");
    const container =
    `
    <div class="card__container--position">
        <img class="card__img" src="${imgURL}" alt="">
        <div class="controls__comand">
            <button class="controls__delete" type="button" id=${id}>
                <i class="icon-eliminar_negro_24dp-1-1" ></i>
            </button>
            
            <a class="controls__edit"  href="/update-products?id=${id}">
                <i class="icon-edit_black_24dp-1"></i>
            </a>
        </div>
        <h4>${price} USD</h4>
        <p>${name}</p>
        <a href="${id}">Ver producto</a>
        
    </div>`

    cardMario.innerHTML = container;
    const btn = cardMario.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productsGenericService.eliminarProducto(id).then((respuesta) =>{
            window.location.href = "/products-mario_bros"
            console.log(respuesta);
        }).catch(err => alert("Ocurrio un error eliza"))
    });
    
    return cardMario;
}

const targetas = document.querySelector("[data-mario]")

productsGenericService.products().then((data) => {
    data.forEach(({name, imgURL, price, id}) => {
        const editProducts = Product(name, imgURL, price, id)
        targetas.appendChild(editProducts)
    });
}).catch((error) => console.log(error))


const nintento = document.querySelector("[data-nintendo]")

productsGenericService.products().then((data) => {
    data.forEach(({name, imgURL, price, id}) => {
        const editProducts = Product(name, imgURL, price, id)
        nintento.appendChild(editProducts)
    });
}).catch((error) => console.log(error))

const gameBoard = document.querySelector("[data-gameBoard]")

productsGenericService.products().then((data) => {
    data.forEach(({name, imgURL, price, id}) => {
        const editProducts = Product(name, imgURL, price, id)
        gameBoard.appendChild(editProducts)
    });
}).catch((error) => console.log(error))

