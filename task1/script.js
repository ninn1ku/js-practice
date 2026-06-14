const products = [
  { title: 'Мышь', price: 1000, category: 'Периферия' },
  { title: 'Монитор', price: 15000, category: 'Техника' }
];

const prepared = products.map(p => ({
  ...p,                                        
  priceText: `${p.price} ₽`,                  
  categoryText: `Категория: ${p.category}`,  
  label: `${p.title} — ${p.category}`         
}));

const catalog = document.getElementById('catalog');

catalog.innerHTML = '';
prepared.forEach(p => {
  catalog.innerHTML += `
    <div class="card">
      <span class="category">${p.categoryText}</span>
      <h3>${p.title}</h3>
      <p class="label">${p.label}</p>
      <p class="price">${p.priceText}</p>
    </div>
  `;
});

console.log(products);