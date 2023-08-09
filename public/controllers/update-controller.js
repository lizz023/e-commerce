import { productsGenericService } from "../services/products-service.js";


const formulario = document.querySelector("[data-update]")

const obtenerInformacion = async() => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    // if(id === null){
    //     console.log("hacer redireccion")
    // }

    const imgURL = document.querySelector("[data-imgURL]");
    const categoria = document.querySelector("[data-categoria]");
    const name = document.querySelector("[data-name]")
    const price = document.querySelector("[data-price]")
    const descripcion = document.querySelector("[data-descripcion]")

    try {  
        const datos = await productsGenericService.updateProducto(id, "products-mario_bros" )

        if(datos.imgURL && datos.categoria && datos.name && datos.price && datos.descripcion ){
            console.log(datos)
            imgURL.value = datos.imgURL;
            categoria.value = datos.categoria;
            name.value = datos.name;
            price.value = datos.price;
            descripcion.value = datos.descripcion;
        }else{
            throw new Error();
        }
        
    } catch (error) {
        console.log("hubo un error")
    }          
}

obtenerInformacion()

formulario && formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imgURL = document.querySelector("[data-imgURL]").value
    const categoria = document.querySelector("[data-categoria]").value
    const name = document.querySelector("[data-name]").value
    const price = document.querySelector("[data-price]").value
    const descripcion = document.querySelector("[data-descripcion]").value

    console.log(imgURL,categoria,name,price,descripcion)
    productsGenericService.productosActualizados(imgURL,categoria,name,price,descripcion, id ,"products-mario_bros").then (() =>{
        window.location.href = "/products-mario_bros"
    })

})