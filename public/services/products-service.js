
//GET
const products = () =>
    fetch("https://64e776dfb0fd9648b78ffd5c.mockapi.io/products").then(respuesta => respuesta.json());


//POST

const createProducts = (imgURL, categoria, name, price, descripcion) => {
    return fetch(`https://64e776dfb0fd9648b78ffd5c.mockapi.io/products`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ imgURL, categoria, name, price, descripcion, id: uuid.v4() })

    }).then(respuesta => respuesta.ok);
}

const eliminarProducto = (id) => {
    console.log("Eliminar a ---> ", id)
    return fetch(`https://64e776dfb0fd9648b78ffd5c.mockapi.io/products/${id}`, {
        method: "DELETE",
    })
}

const updateProducto = (id) => {
    return fetch(`https://64e776dfb0fd9648b78ffd5c.mockapi.io/products/${id}`).then((respuesta) =>
        respuesta.json()
    );
}

const productosActualizados = (imgURL, categoria, name, price, descripcion, id) => {
    return fetch(`https://64e776dfb0fd9648b78ffd5c.mockapi.io/products/${id}`, {
        method: "PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ imgURL, categoria, name, price, descripcion })
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