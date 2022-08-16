// the page to display the CART 
// record all the parameters of each product 
// when user click on button 'add to cart'

// Things in the global score need to be done first !

// getting the data from server with an URL
const dataURL = 'http://localhost:3000/api/products/'; 

let cartArr;
let cartStr;

// managing local storage :
function getCart() {
  // get cart string from local storage
  cartStr = localStorage.getItem('cart') || '[]';
  
  // parse into datastructure - array of obj
  cartArr = JSON.parse(cartStr);
  console.log(cartArr);
}

// declare a variable to store the TOTAL PRICE
let totalPrice=0;


// initialization of the variable to store the object's values
const priceObj = {
}

// initialize the price object
function initPriceObj(dataArray) {
  // this function need to create Property and Value
  // Property _id & Object _price
  dataArray.forEach(
    function(prodObj) 
    {
      priceObj[prodObj._id]=prodObj.price;
    }
  ); 
  console.log(priceObj);
}

// fetch is calling the server
fetch(dataURL)
.then((response) => response.json())
.then((data) => {
  initPriceObj(data);
  // this function is to put price information in an object (priceObject)
  console.log(data);
})
.then(()=> {
  getCart();
  prodCards(cartArr);
  updateQtyTotal ();
  updatePriceTotal ();
})
.then(() => {
  addCartListeners();
})

.catch(err => console.log(err));

function handleDelete(ev){
  console.log(ev.target);
  
  // use id and color to remove "Object" from cartArr

  // traverse the DOM to article ancestor
  const ancestor=ev.target.parentElement.parentElement.parentElement.parentElement;
  console.log(ancestor);

  // after you find the ancestor, get the ID and the COLOR
  // this are the values of data attribute on the ancestor article
  const id = ancestor.dataset.id;
  const color = ancestor.dataset.color ;
  console.log(id);
  console.log(color);
  // How do i use this ID and COLOR to delete this object from the cartArray ?
  for(let i = 0; i < cartArr.length; i++) {
    if(id===cartArr[i].id && color===cartArr[i].color) {
      const indexOfObject=cartArr.findIndex(object=>{
        return id===object.id && color===object.color
      }); 
      console.log(indexOfObject);
      // delete from the cartArr "cart array"
      cartArr.splice(indexOfObject, 1);
    }
    console.log(cartArr);
    // delete the localstorage
    saveCart(cartArr);
    updateQtyTotal();
    updatePriceTotal ();

  }
  // delete from the DOM
  ancestor.remove();
}

function updatePriceTotal(dataArray){
  dataArray.forEach(
    function(prodObj) 
    {
      totalPriceObj[prodObj._id]=++prodObj.price;
    }
  );
}

function updateQtyTotal(dataArray){
  dataArray.forEach(
    function(prodObj) 
    {
      quantityObj[prodObj._id]=prodObj.quantity;
    }
  );
}

function saveCart (basket) {
  localStorage.setItem("cart", JSON.stringify(basket));
  console.log(basket);
}

function handleQuantity(ev){
  console.log(ev.target);
}

// all this function does is add the listeners
function addCartListeners(){
  // find the elements that need the listeners
  const deleteCollection = document.getElementsByClassName('deleteItem');
  const inputCollection = document.getElementsByClassName('itemQuantity');
  console.log(deleteCollection);
    // add the listeners to those elements
    for (let i=0; i<deleteCollection.length; i++){
      deleteCollection[i].addEventListener('click', handleDelete);
    }
    for (let j=0; j<inputCollection.length; j++){
      inputCollection[j].addEventListener('change', handleQuantity);
    }
}

// send an error message if something is wrong



// Milestone #8: "Displaying a recap table of purchases on the cart page"
// manageCart(); 

// Get the cart data from localStorage

function prodCards(dataArr) {
  // stash a reference to container on the page
  const items = document.getElementById('cart__items');

  // Boucle for iteration to make a card out of each data object
  // put the length of the array in variable 'lenght'
  const length = dataArr.length

  for(let i = 0; i < length; i++) {
    const card = displayCart(dataArr[i]);
    items.insertAdjacentHTML('beforeEnd',card);
  }
}


function displayCart(prodObj) {
  // declare the template to display the productObject on the cart page
  let template = `
    <article class="cart__item" data-id=${prodObj.id} data-color=${prodObj.color}>
    <div class="cart__item__img">
      <img src=${prodObj.imageUrl} alt="">
    </div>
    <div class="cart__item__content">
      <div class="cart__item__content__description">
        <h2>${prodObj.name}</h2>
        <p>${prodObj.color}</p>
        <p>€${priceObj[prodObj.id]}</p>
      </div>
      <div class="cart__item__content__settings">
        <div class="cart__item__content__settings__quantity">
          <p>Qté : </p>
          <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${prodObj.quantity}>
        </div>
        <div class="cart__item__content__settings__delete">
          <p class="deleteItem">Delete</p>
        </div>
      </div>
    </div>
    </article>        
  `;
    return template;


}

function totalCart(prodObj, quantity) {
  // counting the total number and total price of selection in the cart
  
  const items = document.getElementById('cart__items');
  const length = dataArr.length;
  
  for (let i = 0; i < length; i++) {
    const card = Cart(dataArr[i]);
  } 
  return totalPrice;
  }

function clearCart(prodObj) {
// to clear the cart : reset number and selection
const buttonClearCart = document.querySelector(".deleteItem");
buttonClearCart.addEventListener("click",()=>{
  localStorage.clear();
});
}

function removeProduct(ProdObj){
// to remove only one product from cart

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



  

