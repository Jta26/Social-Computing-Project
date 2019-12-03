var products = [
    {"title": "Zojirushi Rice Cooker", "img": "https://images-na.ssl-images-amazon.com/images/I/71rHK7JNfLL._SL1500_.jpg", "price": "$37.99", "rating": 5, "desc": `Easy-to-use single switch control
    See-through glass lid with stay cool knob
    Stay cool handles for easy transport
    Durable nonstick inner cooking pan
    Every Zojirushi rice cooker comes with a plastic measuring cup. This cup has a capacity of 6-ounces, or about 3/4 of a U.S. measuring cup. The capacity of the rice cooker is counted in these 6-ounce cups of uncooked short grain white rice. One 6-ounce cup of raw rice makes about 2 to 3, 6-ounce cups of cooked rice`},
    {"title": "Instant Pot Duo 7-in-1 Electric Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Saute, Yogurt Maker, and Warmer|6 Quart|11 One-Touch Programs ", "img": "./img/pot.jpg", "price": "$79.99", "rating": 4, "desc": `Best selling model: America’s Most loved multi cooker, built with the latest 3rd generation technology, the microprocessor monitors pressure, temperature, keeps time, and adjusts heating intensity and duration to achieve desired results every time
    Cooks fast & saves time: The Instant Pot Duo Multi-Cooker combines 7 Appliances in one: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer – and cooks up to 70% faster
    Consistently delicious: 14 one-touch smart programs put cooking ribs, soups, beans, rice, poultry, yogurt, desserts and more on autopilot – with tasty results`},
    {"title": "Hamilton Beach 10-Cup Food Processor & Vegetable Chopper with Bowl Scraper, Stainless Steel (70730)", "img":"./img/processor.jpg", "price": "$39.99", "rating": 4, "desc": `BOWL SCRAPER ATTACHMENT: Special attachment scrapes the sides of the bowl to keep ingredients close to the blades for more even results and to save you time when chopping or pureeing — no need to stop and remove the lid to use a spatula
    10 CUP CAPACITY: The generous 10 cup bowl can handle large volumes of foods without having to stop to empty it
    LARGE FEED CHUTE: Can fit large foods like a whole block of cheese for quick, easy processing and less prep time
    VERSATILITY OF A FOOD PROCESSOR, FOOD CHOPPER AND VEGETABLE CHOPPER: Reversible stainless steel disc slices and shreds, while the stainless steel s blade chops, mixes and purees
    2 SPEEDS PLUS PULSE AND 450 WATTS OF POWER: Food processor's low and high speeds plus pulse gives you the control you need for a variety of recipes`},
    {"title": "Holstein Housewares HH-0937012SS Omelet Maker - Black", "img": "./img/omlet.jpg", "price": "$19.99", "rating": 4, "desc": `With the Omelet Maker, using your fry pan is a thing of the past
    Easily make delicious and fluffy omelets without flipping
    Cooking and cleaning is easy with non-stick coated cooking surfaces
    Know when the maker is on, preheated, and ready to cook with the handy indicator light
    Innovative design allows you to make different Omelets recipes at the same time`},
    {"title": "Cuisinart 5-in-1 Griddler, GR-4N, Silver with Silver/Black Dials", "img": "./img/grill.jpg", "price": "$49.99", "rating": 5, "desc": `5-in-1 countertop unit works as a contact grill, panini press, full grill, full griddle and half grill/half griddle. Dimensions: 13.50 L x 11.50 W x 7.12 H inches
    Brushed stainless-steel housing; sturdy panini-style handle; floating cover to adjust to thickness of food. BPA Free
    Removable and reversible 11" x 9" dishwasher-safe nonstick cooking plates drain grease for healthy cooking into the integrated drip tray.
    Adjustable temperature controls with indicator lights; gourmet recipes and scraping tool included
    Please refer to the Product Video and the User Manual before use.`},
    // {"title":, "img":, "price":, "rating", "desc":},
    // {"title":, "img":, "price":, "rating", "desc":},
];

var surveyType = "new";


var productList = document.querySelector('.store');

for (let product of products) {
    let newElement = createProductElement(product);
    productList.appendChild(newElement);
}

function createProductElement(product) {
    let newProductElement = document.createElement('div');
    newProductElement.className = 'store-item interactable';

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


    newProductElement.addEventListener('click', async function() {
        //Sets current selected item in localstorage
        localStorage.setItem('currentProduct', JSON.stringify(product));
        await uploadFirebaseClick(product)
        window.location = '/item.html';

    });
    //shows the tracking notification
    newProductElement.addEventListener('mouseenter', showTrackingNotification);
    //sets a timeout that hides the tracking notification on end.
    newProductElement.addEventListener('mouseleave', hideTrackingNotification);
    newProductElement.append(imgContainer, contentContainer);
    return newProductElement;
}

var trackingNotificationElement = document.querySelector('.trackerNotificationB');
var timeout;
function showTrackingNotification() {
    console.log('enter');
    trackingNotificationElement.style.display = 'flex';
    clearTimeout(timeout)
}
function hideTrackingNotification() {
    console.log('exit');
    if (!timeout) {
        timeout = setTimeout(function() {
            trackingNotificationElement.style.display = 'none';
            timeout = null;
        }, 5000);        
    }
    else {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            trackingNotificationElement.style.display = 'none';
            timeout = null;
        }, 5000);   
    }


}

function debounce(func, time) {
    

    return function() {
        let timeout;

        timeout = setTimeout(function() {
            timeout = null;
            func();
        })
    }
}


