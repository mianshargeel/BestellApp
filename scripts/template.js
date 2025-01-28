function renderRecipeTemplateHtml(ele, index) {
  return `
      <div class="card card-hover mb-2">
        <div class="card-body">
          <div class='choose-recipe'>
          <h4><bold>${ele.name}</bold></h4> <img id='addBtn' onclick='addToBasket(${index})' src="./assets/img/plus.png" alt="" /></div>
          <p>${ele.description}</p>
          <b class='pizza-price'>${(ele.price.toFixed(2)).replace('.', ',')}€</b>
        </div>
      </div>
    `;
}

function renderBasketHtml(item, index) {
  return `<div className="basketItem"> <p><strong>${item.name}</strong></p>
        <div class='subItems'>
          <img class='plusMinus' onclick='decreaseItemsInBasket(${index})' src="assets/img/minus.png" alt="" />${item.amount}x  
          <img class='plusMinus' onclick='increaseItemsInBasket(${index})' src="assets/img/plus.png" alt="" />${(item.price.toFixed(2)).replace('.', ',')}€
          <img onclick='delteItemFromBasket(${index})' class='removeBtn' src="./assets/img/delete.png" alt="" /></div>
      </div>
    `;
}

function priceCalculationHtml() {
  return `<div class='sumDetails'> <p><span>Zwischenzumme: ${(subTotal.toFixed(2)).replace('.', ',')}€</span></p>
      <p><span>Lieferkosten: ${(deliveryFee.toFixed(2)).replace('.', ',')}€</span></p> <p><span><strong>Gesamt:</strong> ${total.replace('.', ',')}€</span></p></div>
      <div><button class='btn btn-primary place-order-btn' onclick="placeOrder()">Bestellen</button>
      </div>
  `;
} 

function emptyBasket() {
  basketContentRef.innerHTML = `
    <img class='empty-cart' src="./assets/img/cart.png" alt="" />
    <p> Fügen Sie Ihre Lieblingspizza hinzu</p>
  `;
}


