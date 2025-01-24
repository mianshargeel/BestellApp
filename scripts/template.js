let recipeContentRef = document.getElementById('recipe-content');
let basketContentRef = document.getElementById('basketContent');
let basket = [];

recipeContentRef.innerHTML = '';

function renderRecipeTemplate() {
  myDishes.forEach((ele, index) => {
    recipeContentRef.innerHTML += `
      <div class="card card-hover mb-2">
        <div class="card-body">
          <div class='choose-recipe'>
          <h4><bold>${ele.name}</bold></h4> <img id='addBtn' onclick='addToBasket(${index})' src="./assets/img/plus.png" alt="" /></div>
          <p>${ele.description}</p>
          <b class='pizza-price'>${ele.price}€</b>
        </div>
      </div>
    `;
  });
}

function renderBasket() {
  let basketHtml = '';
  let subTotal = 0;
  let deliveryFee = 5.00;
  
  basket.forEach((item, index) => {
    basketHtml += `
      <div className="basketItem">
        <p><strong>${item.name}</strong></p>
       <div class='subItems'>
          <img class='plusMinus' onclick='decreaseItemsInBasket(${index})' src="assets/img/minus.png" alt="" />${item.amount}x  
          <img class='plusMinus' onclick='increaseItemsInBasket(${index})' src="assets/img/plus.png" alt="" />${item.price}€
          <img onclick='delteItemFromBasket(${index})' class='removeBtn' src="./assets/img/delete.png" alt="" />
        </div>
      </div>
    `;
  });

  for (let i = 0; i < basket.length; i++) {
    subTotal += (basket[i].price * basket[i].amount)
  }
  let total = parseFloat(subTotal + deliveryFee).toFixed(2);
  
  //calculating total
  basketHtml += `
    <div class='sumDetails'>
      <p><span>Zwischenzumme: ${subTotal.toFixed(2)}€</span></p>
      <p><span>Lieferkosten: ${deliveryFee}€</span></p>
      <p><span><strong>Gesamt:</strong> ${total}€</span></p>
    </div>
  `;
  basketContentRef.innerHTML = basketHtml;
}

function emptyBasket() {
  basketContentRef.innerHTML = `
    <img class='empty-cart' src="./assets/img/cart.png" alt="" />
    <p> Fügen Sie Ihre Lieblingspizza hinzu</p>
  `;
}
