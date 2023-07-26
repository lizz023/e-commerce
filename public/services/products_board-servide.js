//GET
const productsBoard = () =>{
    fetch("http://localhost:3000/products-board_game")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST


export const productService = {
    productsBoard
}