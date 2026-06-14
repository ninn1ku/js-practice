const products = [
  { title: 'Мышь', price: 1000, category: 'Периферия' },
  { title: 'Клавиатура', price: 3000, category: 'Периферия' },
  { title: 'Монитор', price: 15000, category: 'Техника' },
  { title: 'Ноутбук', price: 70000, category: 'Техника' },
  { title: 'Чехол', price: 500, category: 'Аксессуары' },
];

function filterByCategory(products, category) {
  return products.filter(p => p.category === category);
}

function searchProducts(products, query) {
  return products.filter(p =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );
}

function sortByPrice(products, direction) {
  return [...products].sort((a, b) =>
    direction === 'asc' ? a.price - b.price : b.price - a.price
  );
}

function formatProducts(products) {
  return products.map(p => ({ ...p, priceText: `${p.price} ₽` }));
}


function renderList(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  if (items.length === 0) {
    container.innerHTML = '<li>Ничего не найдено</li>';
    return;
  }
  items.forEach(p => {
    container.innerHTML += `<li>${p.title} — ${p.priceText || p.price + ' ₽'}</li>`;
  });
}

document.getElementById('categoryBtn').addEventListener('click', () => {
  const category = document.getElementById('categoryInput').value;
  const result = filterByCategory(products, category);
  renderList(result, 'categoryResult');
});

document.getElementById('searchBtn').addEventListener('click', () => {
  const query = document.getElementById('searchInput').value;
  const result = searchProducts(products, query);
  renderList(result, 'searchResult');
});

document.getElementById('sortBtn').addEventListener('click', () => {
  const direction = document.getElementById('sortInput').value;
  const result = sortByPrice(products, direction);
  renderList(result, 'sortResult');
});

document.getElementById('formatBtn').addEventListener('click', () => {
  const result = formatProducts(products);
  renderList(result, 'formatResult');
});