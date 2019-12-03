

const itemImg = document.querySelector('.item-img');
const itemTitle = document.querySelector('.title');
const itemPrice = document.querySelector('.price');
const itemDesc = document.querySelector('.desc');

let currentlySelectedItem = JSON.parse(localStorage.getItem('currentProduct'));


itemImg.src = currentlySelectedItem.img;
itemTitle.innerHTML = currentlySelectedItem.title;
itemPrice.innerHTML = currentlySelectedItem.price;
itemDesc.innerHTML = currentlySelectedItem.desc;

