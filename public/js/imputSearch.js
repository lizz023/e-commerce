import { productsGenericService } from "../services/products-service.js";

// const search = (id, name) => {
//     const searchImput = document.createElement("li");
//     const restulFilter =
//     `
//     <li><a href="${id}" class="icon-Icone">${name}</a></li>
//     `
//     searchImput.innerHTML = restulFilter;
//     return searchImput;
// }

const product = document.getElementById("search");

product.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInput = document.getElementById("searchInput").value;

    const listProducts = productsGenericService.products();

    listProducts.then( search => {
        const productsFiltered = search.filter(product => product.name.toLowerCase().includes(userInput.toLowerCase()))
        console.log(productsFiltered);
    });
  
})









