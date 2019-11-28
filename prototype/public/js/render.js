var products = [
    {"title": "Zojirushi Rice Cooker", "img": "https://images-na.ssl-images-amazon.com/images/I/71rHK7JNfLL._SL1500_.jpg", "price": "$37.99", "rating": 5, "desc": "TODO"},
    {"title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer|6 Quart|11 One-Touch Programs ", "img": "/img/pot.jpg", "price": "$79.99", "rating": 4, "desc": "TODO"},
]
var productList = document.querySelector('.store');

for (let product of products) {
    let newElement = createProductElement(product)
}

function createProductElement(product) {
    let newProductElement = document.createElement('div');
    let title = document.createElement('h1');
    let price = document.createElement('p');
    let 



    return newProductElement;

}



