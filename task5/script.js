const products = [
  { title: 'Мышь', price: 1000 },
  { title: 'Клавиатура', price: 3000 },
  { title: 'Монитор', price: 15000 },
  { title: 'Наушники', price: 5000 },
];

const catalog = document.querySelector('#catalog');
const renderBtn = document.querySelector('#renderBtn');

function createCard(product) {
  const card = document.createElement('div'); 
  card.className = 'card';                   

  const title = document.createElement('h3');
  title.textContent = product.title;

  const price = document.createElement('p');
  price.textContent = `${product.price} ₽`;
  price.className = 'price';

  card.append(title, price); 
  return card;
}

function render() {
  catalog.innerHTML = ''; 

  products.forEach(p => {
    catalog.append(createCard(p)); 
  });
}

function renderBad() {
  products.forEach(p => {
    catalog.append(createCard(p));
  });
}

document.querySelector('#duplicateBtn').addEventListener('click', renderBad);

renderBtn.addEventListener('click', render);

render();