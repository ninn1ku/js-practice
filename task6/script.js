const products = [
  { id: 1, title: 'Мышь', price: 1000 },
  { id: 2, title: 'Клавиатура', price: 3000 },
  { id: 3, title: 'Монитор', price: 15000 },
  { id: 4, title: 'Наушники', price: 5000 },
];

let cart = [];

const catalogList = document.getElementById('catalogList');
const cartList = document.getElementById('cartList');
const cartTotal = document.getElementById('cartTotal');

function getTotal() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price * cart[i].count;
  }
  return total;
}

function getCount() {
  let count = 0;
  for (let i = 0; i < cart.length; i++) {
    count += cart[i].count;
  }
  return count;
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(p => p.id === id);

  if (existing) {
    existing.count++; 
  } else {
    cart.push({ ...product, count: 1 }); 
  }

  renderCart();
}


function removeFromCart(id) {
  cart = cart.filter(p => p.id !== id); 
  renderCart();
}


function renderCatalog() {
  catalogList.innerHTML = '';
  products.forEach(p => {
    catalogList.innerHTML += `
      <div class="product-card">
        <h3>${p.title}</h3>
        <p>${p.price} ₽</p>
        <button onclick="addToCart(${p.id})">В корзину</button>
      </div>
    `;
  });
}


function renderCart() {
  cartList.innerHTML = '';

  if (cart.length === 0) {
    cartList.innerHTML = '<li class="empty">Корзина пуста</li>';
    cartTotal.innerHTML = '';
    return;
  }

  cart.forEach(p => {
    cartList.innerHTML += `
      <li class="cart-item">
        <span class="cart-title">${p.title}</span>
        <span class="cart-count">${p.count} шт.</span>
        <span class="cart-price">${p.price * p.count} ₽</span>
        <button class="btn-remove" onclick="removeFromCart(${p.id})">Х</button>
      </li>
    `;
  });

  cartTotal.innerHTML = `
    <p>Товаров: <strong>${getCount()}</strong></p>
    <p>Итого: <strong>${getTotal()} ₽</strong></p>
  `;
}

renderCatalog();
renderCart();