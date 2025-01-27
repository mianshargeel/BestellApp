
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
    basketItem.amount++; //i replaced basket with basketItem [//making icreament only on that items, which we getting in basketItem through user-click]
  } else {
    basket.push({ ...dish});
  }
  // console.log(dish);
  // console.log(basket);
  renderBasket();
}
//making icreament only on that items, which we getting in basketItem through user-click
function delteItemFromBasket(index) {
  basket.splice(index, 1);
  
  if (basket.length === 0) {
    emptyBasket();
  } else {
    renderBasket();
  }
}

function increaseItemsInBasket(index) {
  console.log('plus button clicked');
  basket[index].amount++;
  renderBasket();
}

function decreaseItemsInBasket(index) {
  console.log('minus button clicked');

  if (basket[index].amount > 1) {
    basket[index].amount--;
  } else {
    basket.splice(index, 1);
  }
  renderBasket();
}






