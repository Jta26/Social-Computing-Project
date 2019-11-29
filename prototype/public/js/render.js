var products = [
    {"title": "Zojirushi Rice Cooker", "img": "https://images-na.ssl-images-amazon.com/images/I/71rHK7JNfLL._SL1500_.jpg", "price": "$37.99", "rating": 5, "desc": "TODO"},
    {"title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer|6 Quart|11 One-Touch Programs ", "img": "./img/pot.jpg", "price": "$79.99", "rating": 4, "desc": "TODO"},
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
    let desc = document.createElement('p');
    desc.className = 'description';
    desc.innerHTML = product.desc;
    contentContainer.append(title, price, desc);

    //image
    let imgContainer = document.createElement('div');
    imgContainer.className = 'img';
    let img = document.createElement('img');
    img.src = product.img;
    imgContainer.appendChild(img);

    newProductElement.append(imgContainer, contentContainer);

    return newProductElement;

}



