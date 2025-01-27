function init() {
  emptyBasket();
  renderRecipeTemplate();
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
  basket.length = 0; 
  emptyBasket(); 
  hideShowedMessage();
}

function showMessageAfterPlacingOrder() {
  let showMessageRef = document.getElementById('show-message');

  showMessageRef.innerHTML = `Congratulation, Your Order is Placed Successfully`;
  showMessageRef.style.display = 'block';
}

function hideShowedMessage() {
  showMessageAfterPlacingOrder();
  setTimeout(() => {
    let showMessageRef = document.getElementById('show-message');
    showMessageRef.style.display = 'none';
  }, 3000);
}



