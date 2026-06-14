const products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор'];
const container = document.getElementById('products');

function createCard(name) {
    return `<div class="card"><h3>${name}</h3></div>`;
}

container.innerHTML = '';
for (let i = 0; i < products.length; i++) {
    container.innerHTML += createCard(products[i]);
}