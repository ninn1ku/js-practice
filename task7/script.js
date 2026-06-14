const products = [
    { title: 'Мышь', price: 1000 },
    { title: 'Монитор', price: 15000 },
    { title: 'Клавиатура', price: 3000 },
    { title: 'Наушники', price: 5000 },
    { title: 'Веб-камера', price: 2000 },
];

const productList = document.getElementById('productList');
const originalBtn = document.getElementById('originalBtn');
const ascBtn = document.getElementById('ascBtn');
const descBtn = document.getElementById('descBtn');

function render(items) {
    productList.innerHTML = '';
    items.forEach(p => {
        productList.innerHTML += `<li>${p.title} — ${p.price} ₽</li>`;
    });
}


originalBtn.addEventListener('click', () => {
    render(products);
});

ascBtn.addEventListener('click', () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    render(sorted);
});

descBtn.addEventListener('click', () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    render(sorted);
});

render(products);