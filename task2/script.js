const products = ['Ноутбук', 'Мышь', 'Клавиатура', 'Монитор', 'Наушники', 'Веб-камера'];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const catalog = document.getElementById('catalog');

function createCard(name) {
    return `<div class="card"><h3>${name}</h3></div>`;
}

function render(items) {
    catalog.innerHTML = '';


    if (items.length === 0) {
        catalog.innerHTML = '<p>Ничего не найдено</p>';
        return;
    }

    for (let i = 0; i < items.length; i++) {
        catalog.innerHTML += createCard(items[i]);
    }
}

searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase();


    const filtered = products.filter(product =>
        product.toLowerCase().includes(query)
    );

    render(filtered);
});


render(products);