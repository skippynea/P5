/* <a href="./product.html?id=42">
    <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class ="productName">Kanap name1</h3>
        <p class ="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu.Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
</a> */

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

;

// Creating a function to make all the cards to displays the products

function makeCards(dataArr) {
    // stash a reference to container on the page
    const items = document.getElementById('items');
    
    // Boucle for iteration to make a card out of each data object
    // put the length of the array in variable 'lenght'
    const length = dataArr.length
    
    for(let i = 0; i < length; i++) {
      const card = makeCard(dataArr[i]);
      items.appendChild(card);
    }
  
}

// Using the function to create a card for each product
function makeCard(productObj) {
// create the elements with all parameters for each product
const card = document.createElement('a');
const cardInfo = document.createElement('article');
const cardImage = document.createElement('img');
const name = document.createElement('h3');
const description = document.createElement('p');

// add attributes setAttribute('type', button);
// setAttribute('type', button);

// add classes - classlist.add('')

// for the a href need to use query parameters to link
// each product to its specific id for ONE product page

const productUrl = './product.html?id=' + productObj._id;
const imageUrl = productObj.imageUrl;

card.setAttribute('href', productUrl);
card.classList.add('items');

cardImage.setAttribute('src', imageUrl);
cardImage.setAttribute('alt', productObj.altTxt);

name.innerHTML = productObj.name;
name.classList.add('productName');

description.classList.add('productDescription');
description.innerHTML = productObj.description;

// append tags to cardInfo
cardInfo.appendChild(cardImage);
cardInfo.appendChild(name);
cardInfo.appendChild(description);

// append cardInfo to a tag
card.appendChild(cardInfo);

return card;
}
