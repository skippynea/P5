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

function saveCart (basket) {
  localStorage.setItem("cart", JSON.stringify(basket));
  console.log(basket);
}

// declare a variable to store the TOTAL PRICE
let totalPrice=0;

// declare a variable to store the TOTAL Quantity
let totalQty=0;

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
  console.log("priceObj",priceObj);
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
  updateQtyTotal (cartArr);
  updatePriceTotal (cartArr);
  displayTotalCart();
})
.then(() => {
  addCartListeners();
})


.catch(err => console.log(err));


// managing the delete button for the cart page :
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
    

  }
  updateQtyTotal (cartArr);
  updatePriceTotal (cartArr);
  displayTotalCart();
 
  // delete from the DOM
  ancestor.remove();
}

// updating the "Total quantity" in cart
function updateQtyTotal(dataArray){
  // reset 
  totalQty=0;
  dataArray.forEach(
    (item) => totalQty+= parseInt(item.quantity)
  );
    console.log(totalQty);
    // may have to reset TOTAL QTY to zero
}

// updating the "Total price" in cart (cartArr)
function updatePriceTotal(dataArray){
  // reset
  totalPrice=0;
  dataArray.forEach(
    (item) => totalPrice+=(priceObj[item.id])*(parseInt(item.quantity))
  );
    console.log(totalPrice);
    // may have to reset TOTAL PRICE to zero
}



function handleQuantity(ev){
  console.log(ev.target);
  // update specific object in cartArray
    // traverse the DOM to article ancestor
    const ancestor=ev.target.parentElement.parentElement.parentElement.parentElement;
    console.log(ancestor);

    // after you find the ancestor, get the ID and the COLOR
    // this are the values of data attribute on the ancestor article
    const id = ancestor.dataset.id;
    const color = ancestor.dataset.color ;
    console.log(id);
    console.log(color);
    // How do i use this ID and COLOR to find this object from the cartArray ?
    for(let i = 0; i < cartArr.length; i++) {
      if(id===cartArr[i].id && color===cartArr[i].color) {
        const indexOfObject=cartArr.findIndex(object=>{
          return id===object.id && color===object.color
        }); 
        console.log(indexOfObject);
        //
        cartArr[indexOfObject].quantity=ev.target.value;
      }
      console.log(cartArr);
      // delete the localstorage ("localStorage.clear()")
      saveCart(cartArr); 
      

    }
    updateQtyTotal(cartArr);
    updatePriceTotal (cartArr);
  // convert to string => same as saveCart ?
    
  // update the localstorage
  // localStorage.setItem(ev,);

  // updated totalPrice and update totalQty to display on the page
  getCart();

  displayTotalCart();
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

  // get hold the "order" button
  const orderButton = document.getElementById('order');
  orderButton.addEventListener('click', handleOrder);

}


/* Control that all the inputs of the USER in the Cart Form are correct
and validated by testing the values inputs in each line of the form (put the line in green)
or message error for each wrong action (put the line in red)
*/

// regular expression for validation for email, name, address and city
let emailRegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 
let charAlphaRegExp = /^[A-Za-z -]{3,32}$/;
let addressRegExp = /^[A-Za-z0-9 ]{7,32}$/;

// Constante declaration and event listener for First Name
const firstName = document.getElementById('firstName');
firstName.addEventListener('input', checkFirstName);

// function to validate that user's inputs are correct in first name's line
function checkFirstName() {
  if (charAlphaRegExp.test(firstName.value)) {
      firstNameErrorMsg.innerHTML = null;
      firstName.style.border = '2px solid green';
      validFirstName = true;
  } else if (charAlphaRegExp.test(firstName.value) === false||firstName.value === '') {
      firstNameErrorMsg.innerHTML = 'Please enter a valid first name';
      firstName.style.border = '2px solid red';
      validFirstName = false;
  }
}

// Constante declaration and event listener for Last Name
const lastName = document.getElementById('lastName');
lastName.addEventListener('input', checklastName);

// function to validate that user's inputs are correct in last name's line
function checklastName() {
  if (charAlphaRegExp.test(lastName.value)) {
      lastNameErrorMsg.innerHTML = null;
      lastName.style.border = '2px solid green';
      validlastName = true;
  } else if (charAlphaRegExp.test(lastName.value) === false||lastName.value === '') {
      lastNameErrorMsg.innerHTML = 'Please enter a valid last name';
      lastName.style.border = '2px solid red';
      validlastName = false;
  }
}

// Constante declaration and event listener for address
const address = document.getElementById('address');
address.addEventListener('input', checkaddress);

// function to validate that user's inputs are correct in address's line
function checkaddress() {
  if (addressRegExp.test(address.value)) {
      addressErrorMsg.innerHTML = null;
      address.style.border = '2px solid green';
      validaddress = true;
  } else if (addressRegExp.test(address.value) === false||address.value === '') {
      addressErrorMsg.innerHTML = 'Please enter a valid address';
      address.style.border = '2px solid red';
      validaddress = false;
  }
}

// Constante declaration and event listener for city
const city = document.getElementById('city');
city.addEventListener('input', checkcity);

// function to validate that user's inputs are correct in city's line
function checkcity() {
  if (charAlphaRegExp.test(city.value)) {
      cityErrorMsg.innerHTML = null;
      city.style.border = '2px solid green';
      validcity = true;
  } else if (charAlphaRegExp.test(city.value) === false||city.value === '') {
      cityErrorMsg.innerHTML = 'Please enter a valid city name';
      city.style.border = '2px solid red';
      validcity = false;
  }
}

// Constante declaration and event listener for email input by user
const email = document.getElementById('email');
email.addEventListener('input', checkemail);

// function to validate that user's inputs are correct in first name's line
function checkemail() {
  if (emailRegExp.test(email.value)) {
      emailErrorMsg.innerHTML = null;
      email.style.border = '2px solid green';
      validemail = true;
  } else if (emailRegExp.test(email.value) === false||email.value === '') {
      emailErrorMsg.innerHTML = 'Please enter a valid first name';
      email.style.border = '2px solid red';
      validemail = false;
  }
}

/* function to record all the informations 
(firstName, LastName, address, city, email) 
from the cart form after they've been validated (each line is tested)
and sending the values to the server
*/

function handleOrder(e) {
  e.preventDefault();
  
  // get values of input fields
      // get Id from products in the cart, and put them in an array 
  const userDetails = 
  {
    contact: {
     firstName: '',
     lastName: '',
     address: '',
     city: '',
     email: ''
   },
   products: []

  }
  
  // adding Id to products' Array :
  for(let i = 0; i < cartArr.length; i++) {
    userDetails.products.push(cartArr[i].id);
  }

  console.log(userDetails);

  // fetch post to the server :
  const orderURL = dataURL + 'order'
  fetch(orderURL, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userDetails),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    // for location.href need to use query parameters to link
    // each product to its specific id for ONE product page

    location.href = './confirmation.html?orderNumber=' + data.orderId;

  })
  .catch((error) => {
    console.error('Error:', error);
  });


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

  // return totalPrice;
  }

function clearCart(prodObj) {
// to clear the cart : reset number and selection
const buttonClearCart = document.querySelector(".deleteItem");
buttonClearCart.addEventListener("click",()=>{
  localStorage.clear();
});
}

function displayTotalCart(cartObj) {
   // Display Total Qty on the cart page
  const cartTotalQty=document.getElementById('totalQuantity');
  console.log(cartTotalQty);
  cartTotalQty.innerText = totalQty;
  // display the Total Price
  const cartTotalPrice=document.getElementById('totalPrice');
  console.log(cartTotalPrice);
  cartTotalPrice.innerText = totalPrice;

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



  