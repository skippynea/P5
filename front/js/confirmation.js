// find the 'orderNumber' of the object to display with params
let params = new URLSearchParams(window.location.search);
let orderNumb = params.get("orderNumber");
const orderId = document.getElementById('orderId');
// displaying the order Number in the DOM
orderId.innerText = orderNumb;
// clear the cart
localStorage.clear();