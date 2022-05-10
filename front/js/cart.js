// the page to display the CART 
// record all the parameters of each product 
// when user click on button 'add to cart'

// Milestone #8: "Displaying a recap table of purchases on the cart page"
manageCart();

function manageCart() {
  displayCart();
  totalCart();
  clearCart ();
  checkAndConfirmCart ();
}

function displayCart() {
// displaying the object's selection in cart
let test = 

}

function totalCart() {
// counting the total number and total price of selection in the cart

}

function clearCart() {
// to clear the cart : reset number and selection
const buttonClearCart = document.querySelector("deleteItem")

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

// getting the data from server with an URL
const dataURL = 'http://localhost:3000/api/products/'; 

// fetch is calling the server
fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    makeCards(data);
    // this function create one card for each product
  })
  .catch((error) => console.log(error));

  // send an error message if something is wrong


  

