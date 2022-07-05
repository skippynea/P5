// the page to display the CART 
// record all the parameters of each product 
// when user click on button 'add to cart'

// Things in the global score need to be done first !

// getting the data from server with an URL
const dataURL = 'http://localhost:3000/api/products/'; 

// managing local storage :
// get cart string from local storage
let cartStr = localStorage.getItem('cart') || '[]';
// parse into datastructure - array of obj
let cartArr = JSON.parse(cartStr);

// declare a variable to store the TOTAL PRICE
let totalPrice=
// initialization of the variable to store the object's values
const priceObj = {
  _id: '',
  price : ''
}

// initialize the product's object parameters
function initPriceObj(obj) {
  // this function need to create Property and Value
  // Property _id & Object _price
  cartArr.forEach(priceObj => {
    _id=
    price=
  }); 

}

// fetch is calling the server
fetch(dataURL)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  initPriceObj(data);
  prodCards(data);
  // this function is to put product's information in an array
})
.catch((error) => console.log(error));

// send an error message if something is wrong
;


// Milestone #8: "Displaying a recap table of purchases on the cart page"
manageCart();

function manageCart() {
  displayCart();
  totalCart();
  clearCart ();
  checkAndConfirmCart ();
}






// Get the cart data from localStorage


function prodCards(dataArr) {
// stash a reference to container on the page
const items = document.getElementById('items');

// Boucle for iteration to make a card out of each data object
// put the length of the array in variable 'lenght'
const length = dataArr.length

for(let i = 0; i < length; i++) {
  const card = prodCard(dataArr[i]);
  items.appendChild(card);
}


}


function displayCart(prodObj) {
// displaying the object's selection in cart
  const prodImg = document.querySelector(".cart__item__img");
  const prodName = document.getElementById("product-ID");
  const prodColor = document.getElementById("product-color");
  const prodQuantity = document.getElementById("cart__item__content__settings__quantity");
  const prodDescription = document.getElementById("cart__item__content__description");
  const prodPrice = document.getElementById("cart__price");

  //prodPrice.innerText = prodObj.price;
  prodName.innerText = prodObj.name;
  prodDescription.innerText = prodObj.description;
  // product's image displayed from url
  const img = document.createElement ('img');
  img.src = prodObj.imgUrL;
  img.alt = prodObj.altTxt;
  prodImg.appendChild(img);
  
  // add listener to qty input
  prodQuantity.addEventListener('change', updateQty);

}

function totalCart() {
// counting the total number and total price of selection in the cart

}

function clearCart(prodObj) {
// to clear the cart : reset number and selection
const buttonClearCart = document.querySelector(".deleteItem");
buttonClearCart.addEventListener("click",()=>{
  localStorage.clear();
});
}

function checkAndConfirmCart() {
  // to confirm selection and send the command to server


}

/* 
            <section id="cart__items">
             <article class="cart__item" data-id="{product-ID}" data-color="{product-color}">
                <div class="cart__item__img">
                  <img src="../images/product01.jpg" alt="Photo of a sofa">
                </div>
                <div class="cart__item__content">
                  <div class="cart__item__content__description">
                    <h2>Name of the product</h2>
                    <p>Green</p>
                    <p>€42.00</p>
                  </div>
                  <div class="cart__item__content__settings">
                    <div class="cart__item__content__settings__quantity">
                      <p>Qté : </p>
                      <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="42">
                    </div>
                    <div class="cart__item__content__settings__delete">
                      <p class="deleteItem">Delete</p>
                    </div>
                  </div>
                </div>
              </article>
            </section> 
            
*/



  

