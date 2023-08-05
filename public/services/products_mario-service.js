
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
        body: JSON.stringify({imgURL,categoria,name,price,descripcion,id:uuid.v4()})
        
    }).then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    
}

const eliminarProducto = (id) =>{
    console.log("Eliminar a ---> ", id)
    return fetch(`http://localhost:3000/products-mario_bros/${id}`, {
        method: "DELETE",
    })
}

const updateProducto = (id) =>{
    return fetch(`http://localhost:3000/products-mario_bros/${id}`).then((respuesta) => 
    respuesta.json()
    );
}

const productosActualizados = (imgURL, categoria, name, price, descripcion, id) => {
    return fetch(`http://localhost:3000/products-mario_bros/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({imgURL, categoria, name, price, descripcion})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

export const productService = {
    productsMario,
    createProducts,
    eliminarProducto,
    updateProducto,
    productosActualizados
}