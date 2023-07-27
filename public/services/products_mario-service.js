
//GET
const productsMario = () =>
    fetch("http://localhost:3000/products-mario_bros").then(respuesta => respuesta.json());


//POST

const createProducts = (imgURL,categoria,name,price,descripcion) => {
    return fetch(`http://localhost:3000/products-mario_bros`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({imgURL,categoria,name,price,descripcion})
        
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No se pudo crear el producto")
}

// const eliminarProducto = (id) =>{
//     return fetch(`http://localhost:3000/products-mario_bros/${id}`, {
//         method: "DELETE",
//     })
// }

export const productService = {
    productsMario,
    createProducts,
    // eliminarProducto
}