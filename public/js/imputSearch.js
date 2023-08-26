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
const productSearchMobile = document.getElementById('searchMobile');

product.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("searchDesctock").value;
    performSearch(userInput);
})

productSearchMobile.addEventListener("submit", (e) => {
    e.preventDefault();
    const userInput = document.getElementById("searchInputMobile").value;
    performSearch(userInput);
})

const performSearch = (userInput) => {
    const searchResultsList = document.getElementsByClassName('js-search-results')[0],
        listProducts = productsGenericService.products();

    listProducts.then( search => {
        const productsFiltered = search.filter(product => product.name.toLowerCase().includes(userInput.toLowerCase()))
        console.clear();
        const resultsList = document.createElement('ul');

        productsFiltered.forEach(product => {
            resultsList.innerHTML += `<li class="navbar__li"><a href="${product.id}" class="icon-Icone search-results__link">${product.name}</a></li>`   
        });

        searchResultsList.innerHTML = '';
        searchResultsList.append(resultsList);
        searchResultsList.classList.remove('hidden');
    });
}








