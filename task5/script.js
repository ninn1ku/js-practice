const products = [
  { title: 'Мышь', price: 1000, category: 'Периферия' },
  { title: 'Клавиатура', price: 3000, category: 'Периферия' },
  { title: 'Монитор', price: 15000, category: 'Техника' },
  { title: 'Ноутбук', price: 70000, category: 'Техника' },
  { title: 'Чехол', price: 500, category: 'Аксессуары' },
  { title: 'Наушники', price: 5000, category: 'Периферия' },
];

const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const sortSelect = document.getElementById('sortSelect');
const catalog = document.getElementById('catalog');


function filterProducts(items, query, category) {
  return items.filter(p => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === '' || p.category === category;
    return matchQuery && matchCategory;
  });
}


function sortProducts(items, direction) {
  if (direction === '') return items;
  return [...items].sort((a, b) =>
    direction === 'asc' ? a.price - b.price : b.price - a.price
  );
}


function render(items) {
  catalog.innerHTML = '';

  if (items.length === 0) {
    catalog.innerHTML = '<p>Ничего не найдено</p>';
    return;
  }

  items.forEach(p => {
    catalog.innerHTML += `
      <div class="card">
        <span class="category">${p.category}</span>
        <h3>${p.title}</h3>
        <p class="price">${p.price} ₽</p>
      </div>
    `;
  });
}


function update() {
  const query = searchInput.value;
  const category = categorySelect.value;
  const sort = sortSelect.value;

  const filtered = filterProducts(products, query, category);
  const sorted = sortProducts(filtered, sort);
  render(sorted);
}


searchInput.addEventListener('input', update);
categorySelect.addEventListener('change', update);
sortSelect.addEventListener('change', update);

update();