/* <a href="./product.html?id=42">
    <article>
        <img src=".../product01.jpg" alt="Lorem ipsum dolor sit amet, Kanap name1">
        <h3 class ="productName">Kanap name1</h3>
        <p class ="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu.Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
    </article>
</a> */

// Change for git test


// second test to make it clean



// getting the data from server with an URL
const dataURL = 'http://localhost:3000/api/products/'; 

// fetch is calling the server
fetch(dataURL)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    makeCards(data);
    // this function make the cards
  })
  .catch((error) => console.log(error));

  // send an error message if something is wrong


// Creating a function to make all the cards to displays the products

function makeCards(dataArr) {
    // stash a reference to container on the page
    const items = document.getElementById('items');
    
    // Boucle for iteration to make a card out of each data object
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
const article = document.createElement('article');
const img = document.createElement('img');
const title = document.createElement('h3');
const description = document.createElement('p');

// add attributes setAttribute('type', button);
// add classes - classlist.add('')

// for the a href need to use query parameters to link
// each product to its specific id for ONE product page

const productURL = './product.html?id=' + productObj._id;
card.setAttribute('href', productURL);
card.classList.add('items');

img.setAttribute('src', productObj.imageUrl);
img.setAttribute('alt', productObj.altTxt);

title.innerHTML = productObj.name;
title.classList.add('productName');

// append tags to article
article.appendChild(img);
article.appendChild(title);

// append article to a tag
card.appendChild(article);

return card;
}
