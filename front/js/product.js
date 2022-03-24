// "The product Page" : Page to display each product (one page for one product)

// #1: "Collecting the ID of a product you wish to display"
// Milestone #5: "Collecting the ID of a product you wish to display"

// Stocking the base of the URL in a constante
const baseURL = 'http://localhost:3000/api/products/' 

// find the 'id' of the object to display with params
let params = new URL(document.location).searchParams;
let objectId = params.get("id");



// Execute the function to get the product ID and display it on product page
getProduct();

// creating a function to get only THE product to display

function getProduct() {

  // getting the 'id' of THE only product needed from server with the URL
  let productIdURL = baseURL + objectId;
  console.log(productIdURL);
 
 
 // declaring the variable to store the values selected
  const productObj = {
    color : '',
    name : '',
    price : '',
    quantity :'',
    _id: id,
  }

  // fetch is calling the server to get the URL of the Product's Id and display product details
  fetch(productIdURL)
    .then((response)=> {
      console.log('infetch');
      return response.json();
    })
    .then((data)=> {
    // calling the function to display the product on page
    console.log(data);
    displayProduct(data);
    })

    // send an error message if something is wrong
    .catch((error) => {console.log(error);})
  ;
}

// #2 : "Inserting a product and its details into a product page"
//Milestone #6: "Inserting a product and its details into a product page"
 


// Using the function to create a page with the product
function displayProduct(dataObject) {
    // Constante declaration and stocked the value in the variable
    const productImg = document.querySelector(".item__img");
    //const productImg = document.querySelector(".item__img img");
    const productName = document.getElementById("title");
    const productPrice = document.getElementById("price");
    const productDescription = document.getElementById("description");
    const pullDownArr = document.getElementById("colors");
    
  productPrice.innerText = dataObject.price;
  productName.innerText = dataObject.name;
  productDescription.innerText = dataObject.description;
  // product's image displayed from url
  const img = document.createElement ('img');
  //img = dataObject.imageUrl;
  //document.body.appendChild(dataObject.imageUrl);
  
  console.log(dataObject.imageUrl);
  img.src = dataObject.imageUrl;
  img.alt = dataObject.altTxt;
  // productImg.src = dataObject.imageUrl;
  // productImg.alt = dataObject.altTxt;
  console.log(productImg);
  // displayImage (img);  //img.src = productImg ;
  
  productImg.appendChild(img);

  // Add option tags to pullDown menu
  makePullDown (dataObject.colors);

  // Getting the colors' values of "productObject" from fetch call to insert in menu

  // productObject.innerText = dataObject.description;


}

function displayImage (img) {
  productImg.innerHTML = img;
}


// Pulldown menu for choosing the color

function makePullDown(pullDownArr) {
  // create variable 
  const select = document.getElementById('colors');
  // addEventListener to handle pulldown
  select.addEventListener('change', handlePullDown);
  
  const length = pullDownArr.length;
  
  for(let i=0; i<length; i++) {
    // create element
    const option = document.createElement('option');
    
    // add value attribute
    console.log(pullDownArr[i]);
    option.value = pullDownArr[i]; // adds the color to the attribute
    option.innerText = pullDownArr[i]; // adds content to option tag
    
    // append to select
    select.appendChild(option);
  }
}

function handlePullDown(e) {
  dataObject.option = e.target.value;
  console.log(dataObject);
}


// #3 : "Adding products to the cart"
// Milestone #7: "Adding products to the cart"


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