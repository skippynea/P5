// find the 'orderNumber' of the object to display with params
let params = new URL(document.location).searchParams;
let orderNumb = params.get("orderNumber");
const orderId = document.getElementById('orderId');
// displaying the order Number in the DOM
orderNumb.innerText = `<br>${orderNumber}<br>Thank you for your order !`;