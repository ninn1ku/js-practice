const products = [
    { title: 'Мышь', price: 1000, category: 'Периферия' },
    { title: 'Клавиатура', price: 3000, category: 'Периферия' },
    { title: 'Монитор', price: 15000, category: 'Техника' },
    { title: 'Ноутбук', price: 70000, category: 'Техника' },
    { title: 'Чехол', price: 500, category: 'Аксессуары' },
];

const searchInput = document.querySelector('#searchInput');
const categorySelect = document.querySelector('#categorySelect');
const sortSelect = document.querySelector('#sortSelect');
const catalog = document.querySelector('#catalog');

function update() {
    const query = searchInput.value.toLowerCase();
    const category = categorySelect.value;
    const sort = sortSelect.value;

    let result = products.filter(p => {
        const matchQuery = p.title.toLowerCase().includes(query);
        const matchCategory = category === '' || p.category === category;
        return matchQuery && matchCategory;
    });

    if (sort === 'asc') result = [...result].sort((a, b) => a.price - b.price);
    if (sort === 'desc') result = [...result].sort((a, b) => b.price - a.price);

    catalog.innerHTML = '';

    if (result.length === 0) {
        catalog.innerHTML = '<p>Ничего не найдено</p>';
        return;
    }

    result.forEach(p => {
        catalog.innerHTML += `<div class="card">
        <span class="category">${p.category}</span>
        <h3>${p.title}</h3>
        <p class="price">${p.price} ₽</p>
      </div>`;
    });
}

searchInput.addEventListener('input', update);
categorySelect.addEventListener('change', update);
sortSelect.addEventListener('change', update);

update();