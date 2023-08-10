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
        
    }     
    
    try {  
        const dataUp = await productsGenericService.updateProducto(id, "products-video_game" )

        if(dataUp.imgURL && dataUp.categoria && dataUp.name && dataUp.price && dataUp.descripcion ){
            console.log(dataUp)
            imgURL.value = dataUp.imgURL;
            categoria.value = dataUp.categoria;
            name.value = dataUp.name;
            price.value = dataUp.price;
            descripcion.value = dataUp.descripcion;
        }else{
            throw new Error();
        }
       
    } catch (error) {
        
    }  

    try {  
        const dataBoard = await productsGenericService.updateProducto(id, "products-board_game" )

        if(dataBoard.imgURL && dataBoard.categoria && dataBoard.name && dataBoard.price && dataBoard.descripcion ){
            console.log(dataBoard)
            imgURL.value = dataBoard.imgURL;
            categoria.value = dataBoard.categoria;
            name.value = dataBoard.name;
            price.value = dataBoard.price;
            descripcion.value = dataBoard.descripcion;
        }else{
            throw new Error();
        }
       
    } catch (error) {
        
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

    productsGenericService.productosActualizados(imgURL,categoria,name,price,descripcion, id ,"products-video_game").then (() =>{
        window.location.href = "/products-video_game"
    })

    productsGenericService.productosActualizados(imgURL,categoria,name,price,descripcion, id ,"products-board_game").then (() =>{
        window.location.href = "/products-board_game"
    })

})