//GET
const productsVideo = () =>{
    fetch("http://localhost:3000/products-video_game")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST


export const productService = {
    productsVideo
}