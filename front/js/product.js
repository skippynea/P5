// Page to display each product (one page per product)

// find the 'id' of the object to display
let params = new URL(document.location).searchParams;
let objectId = params.get("id");






  
  
// creating a function to get only THE product to display

function getProduct() {

  // getting the 'id' of THE only product needed from server with the URL
  const productIdURL = 'http://localhost:3000/api/products/${id}'; 

  // fetch is calling the server to get 
  fetch(productIdURL)
    .then((response) => response.json())
    .then((productIdURL) => {
      console.log(productIdURL);
      displayProduct(productIdURL);
      // this function create one card for each product
    })
    .catch((error) => console.log(error));

    // send an error message if something is wrong
      // stash a reference to container on the page
      const item = document.getElementById('item');
}



// Using the function to create a page with the product
function displayProduct(productPage) {
// create the elements with all parameters for the product
const productCardImage = document.createElement('item__img');
const productCardName = document.createElement('item__content__titlePrice.title');
const productCardPrice = document.createElement('item__content__titlePrice.price');
const productCardDescription = document.createElement('item__content__description.description');
}




// Template in HTML :

{/* 
  
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

*/}

// End of template HTML //