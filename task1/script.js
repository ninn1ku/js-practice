const products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];

const catalog = document.getElementById('catalog');

function createCard(name) {
  return `<div class="card"><h3>${name}</h3></div>`;
}

function render(items) {
  catalog.innerHTML = ''; 
  for (let i = 0; i < items.length; i++) {
    catalog.innerHTML += createCard(items[i]);
  }
}

render(products);