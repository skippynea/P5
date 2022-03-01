// "The product Page" : Page to display each product (one page for one product)

// #1: "Collecting the ID of a product you wish to display"

// Stocking the base of the URL in a constante
const baseURL = 'http://localhost:3000/api/products/' 

// find the 'id' of the object to display with params
let params = new URL(document.location).searchParams;
let objectId = params.get("id");

// Constante declaration and stocked the value
const productImage = document.querySelector(".item__img");
const productName = document.querySelector(".item__content__titlePrice title");
const productPrice = document.querySelector(".item__content__titlePrice price");
// Execute the function to get the product ID and display it on product page
getProduct();

// creating a function to get only THE product to display

function getProduct() {

  // getting the 'id' of THE only product needed from server with the URL
  let productIdURL = baseURL + objectId;
  console.log(productIdURL);
  // stash a reference to container on the page
  const item = document.getElementById('item');
  
  // fetch is calling the server to get the URL of the Product's Id and display product details
  fetch(productIdURL)
    .then(function (response) {
      console.log('infetch');
      return response.json();
    })
    .then(function (response){
    // calling the function to display the product on page
    displayProduct(item);
    })

    // send an error message if something is wrong
    .catch((error) => {
      console.log(error);
    })
    
  ;

  

}

// #2 : "Inserting a product and its details into a product page"

// Using the function to create a page with the product
function displayProduct() {
  // create the elements with all parameters for the product
  // const productImage = document.getElementsByClassName('item item__img')
  console.log(productImage);
  productImage.innerHTML = ${image};
  console.log(productName);
  productName.innerHTML = item;
  console.log(productPrice);
  productPrice.innerHTML = item;
  // 


  /* const productCardName = document.createElement('item__content__titlePrice.title');
  const productCardPrice = document.createElement('item__content__titlePrice.price');
  const productCardDescription = document.createElement('item__content__description.description'); */
  //console.log(productCardName);
  



}

// #3 : "Adding products to the cart"

// creating the 'adding to cart' fonction when click the 'add' button
function addToCart() {


}


// Template in HTML :

/* 
  
    <section class="item">
    <article>
      <div class="item__img">
        <!-- <img src="../images/logo.png" alt="Photographie d'un canapé"> -->
      </div>
      <div class="item__content">

        <div class="item__content__titlePrice">
          <h1 id="title"><!-- Nom du produit --></h1>
          <p>Prix : <span id="price"><!-- 42 --></span>€</p>
        </div>

        <div class="item__content__description">
          <p class="item__content__description__title">Description:</p>
          <p id="description"><!-- Dis enim malesuada risus sapien gravida nulla nisl arcu. --></p>
        </div>

        <div class="item__content__settings">
          <div class="item__content__settings__color">
            <label for="color-select">Chose your color:</label>
            <select name="color-select" id="colors">
                <option value="">--Please, select a color --</option>
    <!--                       <option value="vert">vert</option>
                <option value="blanc">blanc</option> -->
            </select>
          </div>

          <div class="item__content__settings__quantity">
            <label for="itemQuantity">Number of articles (1-100):</label>
            <input type="number" name="itemQuantity" min="1" max="100" value="0" id="quantity">
          </div>
        </div>

        <div class="item__content__addButton">
          <button id="addToCart">Add to cart</button>
        </div>

      </div>
    </article>
    </section> 

*/

// End of template HTML //