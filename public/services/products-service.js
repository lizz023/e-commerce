
//GET
const products = (endpoint) =>
    fetch("http://localhost:3000/" + endpoint).then(respuesta => respuesta.json());


//POST

const createProducts = (imgURL,categoria,name,price,descripcion, endpoint) => {
    return fetch(`http://localhost:3000/${endpoint}`, {
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

const eliminarProducto = (id, endpoint) =>{
    console.log("Eliminar a ---> ", id)
    return fetch(`http://localhost:3000/${endpoint}/${id}`, {
        method: "DELETE",
    })
}

const updateProducto = (id, endpoint) =>{
    return fetch(`http://localhost:3000/${endpoint}/${id}`).then((respuesta) => 
    respuesta.json()
    );
}

const productosActualizados = (imgURL, categoria, name, price, descripcion, id, endpoint) => {
    return fetch(`http://localhost:3000/${endpoint}/${id}`,{
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({imgURL, categoria, name, price, descripcion})
    })
    .then((respuesta) => respuesta)
    .catch((err) => console.log(err));
}

export const productsGenericService = {
    products,
    createProducts,
    eliminarProducto,
    updateProducto,
    productosActualizados
}