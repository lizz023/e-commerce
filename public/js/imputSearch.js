import { productsGenericService } from "../services/products-service.js";

const product = document.getElementById("search");

product.addEventListener("submit", (e) => {
    e.preventDefault()

    const userInput = document.getElementById("searchInput").value;

    Promise.all([
        productsGenericService.products("products-mario_bros"),
        productsGenericService.products("products-video_game"),
        productsGenericService.products("products-board_game")
    ]).then(([mario, consola, juegos]) => {

        const concaTable = mario.concat(consola,juegos);
        
        const productsFiltered = concaTable.filter(product => product.name.toLowerCase().includes(userInput.toLowerCase()))
        console.log(productsFiltered);

    });

  
    
    // productsGenericService.products("products-mario_bros").then(res => {
    //     mario = res
    // }); 
    
    // productsGenericService.products("products-video_game").then(res => {
    //     consola = res
    // });
    
    // productsGenericService.products("products-board_game").then(res => {
    //     juegos = res
    // });

   
    
   


    // const mario = pgs.products('mario')....... = [{productso}]
    // const consolas = pgs.products('consolas')....... = [{productso}]
    // const allProducts = [...mario, ...consolas, ...otro];
    // const filteredProducts = allproducts.filter(product => product.name.toLowerCase().contains(userInput.toLowerCase()))
    // const data = fetch('../db.json').then(res=>res.json())
    // console.log(data)
    // const result = data.filter((word) => word)

    // console.log(result);
})

