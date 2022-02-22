/* const objectId = '234o2gb234g';

const baseURL = 'http://bedrockQuarry.com/' 

let fetchURL = baseURL + objectId;
console.log(fetchURL);

let someString = 'aeh4ehaerher';

fetch(fetchURL)
	.then((response) => response.json())
  .then((data) => {
    // do something with the data
    // data is a specific object related to the product
    makeProductCard(data);
  })
  .catch((err) => console.log(err));
  
  functionProductCard(dataObj) {
  	const img = document.getElementsByClassName('product')[0];
    img.setAttribute('src', dataObj.imgURL);

		// no appending except for color options!!!!
    createPulldown(dataObj);
  }
  
  function createPulldown(dataObj) {
  	const pulldown = document.getElementById('options-pulldown');
    
    for(let i = 0; i < dataObject.color.length; i++){
    	//make the option element
      // append to pulldown!
    }
  } */