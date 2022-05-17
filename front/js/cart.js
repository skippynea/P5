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

function displayCart(prodObj) {
// displaying the object's selection in cart
  const prodImg = document.querySelector(".cart__item__img");
  const prodName = document.getElementById("product-ID");
  const prodColor = document.getElementById("product-color");
  const prodQuantity = document.getElementById("cart__item__content__settings__quantity");
  const prodDescription = document.getElementById("cart__item__content__description");
  const prodPrice = document.getElementById("cart__price");

  prodPrice.innerText = prodObj.price;
  prodName.innerText = prodObj.name;
  prodDescription.innerText = prodObj.description;
  // product's image displayed from url
  const img = document.createElement ('img');
  img.src = prodObj.imageUrl;
  img.alt = prodObj.altTxt;
  productImg.appendChild(img);
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


  

