const categories = ['Периферия', 'Техника', 'Аксессуары'];

const products = [
    { title: 'Мышь', price: 1000, category: 'Периферия' },
    { title: 'Клавиатура', price: 3000, category: 'Периферия' },
    { title: 'Монитор', price: 15000, category: 'Техника' },
    { title: 'Ноутбук', price: 70000, category: 'Техника' },
    { title: 'Чехол', price: 500, category: 'Аксессуары' },
];

const catalog = document.getElementById('catalog');

categories.forEach(category => {
    const filtered = products.filter(p => p.category === category);

    if (filtered.length === 0) return;

    let cards = '';
    filtered.forEach(p => {
        cards += `
      <div class="card">
        <h4>${p.title}</h4>
        <p class="price">${p.price} ₽</p>
      </div>
    `;
    });

    catalog.innerHTML += `
    <div class="category-block">
      <h3>${category}</h3>
      <div class="cards-row">${cards}</div>
    </div>
  `;
});