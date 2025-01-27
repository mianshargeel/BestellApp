
function init() {
  emptyBasket();
  renderRecipeTemplate();
}

function showSmallBasket() {
  let contentRef = document.querySelector('.content');
  let basketWrapperRef = document.querySelector('.basketWrapper');

  if (contentRef.style.display === 'none') {
    contentRef.style.display = 'block'; // showing
    basketWrapperRef.style.display = 'none'; // hiding
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
  basket.length = 0; //for dummy order to place making Basket empty
  emptyBasket(); 
  hideShowedMessage();
}





