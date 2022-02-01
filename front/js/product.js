// Page to display each product (one page per product)


// getting the data from server with an URL
const dataURL = 'http://localhost:3000/api/products/'; 

// fetch is calling the server
fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayProduct(data);
    // this function create one card for each product
  })
  .catch((error) => console.log(error));

  // send an error message if something is wrong


  // Creating a function to make all the cards to displays the products

function displayProduct(dataArr) {
    // stash a reference to container on the page
    const item = document.getElementById('item');
  
  }

// Using the function to create a page with the product
function displayProduct(productPage) {
// create the elements with all parameters for the product
const img = document.createElement('item__img');
const title = document.createElement('item__content__titlePrice.title');
const price = document.createElement('item__content__titlePrice.price');
const description = document.createElement('item__content__description.description');
}
