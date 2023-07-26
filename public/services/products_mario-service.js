
//GET
const productsMario = () =>{
    fetch("http://localhost:3000/products-mario_bros")
    .then(respuesta => respuesta.json())
    .catch(error => console.log(error))
}

//POST

const createProducts = (imgURL,name,price) => {
    fetch(`http://localhost:3000/products-mario_bros/${id}`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            imgURL,
            name,
            price
        })

    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.value
        }
    })
    throw new Error("No se puedo crear el producto")
}


export const productService = {
    productsMario,
    createProducts
}