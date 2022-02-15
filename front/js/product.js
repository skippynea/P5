// Page to display each product (one page per product)

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
