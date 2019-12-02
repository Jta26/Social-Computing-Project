var products = [
    {"title": "Zojirushi Rice Cooker", "img": "https://images-na.ssl-images-amazon.com/images/I/71rHK7JNfLL._SL1500_.jpg", "price": "$37.99", "rating": 5, "desc": "TODO"},
    {"title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer|6 Quart|11 One-Touch Programs ", "img": "./img/pot.jpg", "price": "$79.99", "rating": 4, "desc": "TODO"},
    {"title": "Hamilton Beach 10-Cup Food Processor & Vegetable Chopper with Bowl Scraper, Stainless Steel (70730)", "img":"./img/processor.jpg", "price": "$39.99", "rating": 4, "desc": "TODO"},
    {"title": "Holstein Housewares HH-0937012SS Omelet Maker - Black", "img": "./img/omlet.jpg", "price": "$19.99", "rating": 4, "desc": "TODO"},
    {"title": "Cuisinart 5-in-1 Griddler, GR-4N, Silver with Silver/Black Dials", "img": "./img/grill.jpg", "price": "$49.99", "rating": 5, "desc": `5-in-1 countertop unit works as a contact grill, panini press, full grill, full griddle and half grill/half griddle. Dimensions: 13.50 L x 11.50 W x 7.12 H inches
    Brushed stainless-steel housing; sturdy panini-style handle; floating cover to adjust to thickness of food. BPA Free
    Removable and reversible 11" x 9" dishwasher-safe nonstick cooking plates drain grease for healthy cooking into the integrated drip tray.
    Adjustable temperature controls with indicator lights; gourmet recipes and scraping tool included
    Please refer to the Product Video and the User Manual before use.`},
    // {"title":, "img":, "price":, "rating", "desc":},
    // {"title":, "img":, "price":, "rating", "desc":},
]
var productList = document.querySelector('.store');

for (let product of products) {
    let newElement = createProductElement(product);
    productList.appendChild(newElement);
}

function createProductElement(product) {
    let newProductElement = document.createElement('div');
    newProductElement.className = 'store-item';

    let contentContainer = document.createElement('div');
    contentContainer.className='content';
    let title = document.createElement('h1');
    title.className = 'title';
    title.innerHTML = product.title;
    let price = document.createElement('p');
    price.className = 'price';
    price.innerHTML = product.price;
    
    //rating
    let ratingContainer = document.createElement('div');
    ratingContainer.className = 'rating';
    for (let i = 0; i < product.rating; i++) {
        let starElement = document.createElement('img');
        starElement.className = 'star'
        starElement.src = './img/rating/star.png';
        ratingContainer.appendChild(starElement)
    }

    contentContainer.append(title, ratingContainer, price);


    //image
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img';
    let img = document.createElement('img');
    img.src = product.img;
    imgContainer.appendChild(img);


    newProductElement.addEventListener('click', function() {
        //Sets current selected item in localstorage
        localStorage.setItem('currentProduct', JSON.stringify(product));
        window.location = '/item.html';
    });
    newProductElement.append(imgContainer, contentContainer);
    return newProductElement;

}






