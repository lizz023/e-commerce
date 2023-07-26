const newProduct = (name, imgURL, price, id ) =>{
    const card = document.createElement("div");
    const container = 
    `<div class="card__container">
        <img class="card__img" src="${imgURL}" alt="">
        <h4>${price}</h4>
        <p>${name}</p>
        <a href="">${id}</a>
    </div>`

    card.innerHTML = contenido
    card.dataset.id = id

    return card;
}
const productos = document.querySelector('[data-mario_bros]')


