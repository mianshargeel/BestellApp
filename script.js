let recipeContentRef = document.getElementById('recipe-content');
let basketContentRef = document.getElementById('basketContent');
let basket = [];
let subTotal = 0;
let deliveryFee = 5.00;
let total = 0;

recipeContentRef.innerHTML = '';
basketContentRef.innerHTML = '';

function init() {
  emptyBasket();
  renderRecipeTemplate();
}

function renderRecipeTemplate() {
  myDishes.forEach((ele, index) => {
    recipeContentRef.innerHTML += renderRecipeTemplateHtml(ele, index)
  });
}

function renderBasket() {
  let basketContentHtml = '';
  
  basket.forEach((item, index) => {
    basketContentHtml += renderBasketHtml(item, index);
  });  
  basketContentRef.innerHTML = basketContentHtml + priceCalculation(); 
}

function priceCalculation() {
  for (let i = 0; i < basket.length; i++) {
    subTotal += (basket[i].price * basket[i].amount)
  }
  total = (parseFloat(subTotal + deliveryFee).toFixed(2));
  return priceCalculationHtml();
}

function showSmallBasket() {
  let contentRef = document.querySelector('.content');
  let basketWrapperRef = document.querySelector('.basketWrapper');

  if (contentRef.style.display === 'none') {
    contentRef.style.display = 'block'; 
    basketWrapperRef.style.display = 'none';
  } else {
    contentRef.style.display = 'none';
    basketWrapperRef.style.display = 'block';
    renderBasket(); 
  }
}

function addToBasket(index) {
  let dish = myDishes[index];
  let basketItem = basket.find(item => item.name === dish.name); 
    
  if (basketItem) {
    basketItem.amount++; 
  } else {
    basket.push({ ...dish});
  }
  renderBasket();
}

function delteItemFromBasket(index) {
  basket.splice(index, 1);
  
  if (basket.length === 0) {
    emptyBasket();
  } else {
    renderBasket();
  }
}

function increaseItemsInBasket(index) {
  basket[index].amount++;
  renderBasket();
}

function decreaseItemsInBasket(index) {
  if (basket[index].amount > 1) {
    basket[index].amount--;
  } else {
    basket.splice(index, 1);
  }
  renderBasket();
}

function placeOrder() {
  if (basket.length = 0) {
    total = 0;
    subTotal = 0;
  }
  emptyBasket(); 
  hideShowedMessage();
}

function showMessageAfterPlacingOrder() {
  let showMessageRef = document.getElementById('show-message');

  showMessageRef.innerHTML = `<p>Cuper!, Ihre Bestellung wurde erfolgreich aufgegeben</p>`;
  showMessageRef.style.display = 'block';
}

function hideShowedMessage() {
  showMessageAfterPlacingOrder();
  setTimeout(() => {
    let showMessageRef = document.getElementById('show-message');
    showMessageRef.style.display = 'none';
  }, 3000);
}



