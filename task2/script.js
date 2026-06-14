const product = {
  title: 'Ноутбук',
  price: 70000,
  specs: {
    cpu: 'Intel Core i5',
    ram: '16 GB',
    storage: '512 GB SSD'
  }
};

const container = document.getElementById('product');

container.innerHTML = `
  <div class="product-card">
    <h2>${product.title}</h2>
    <p class="price">${product.price} ₽</p>
    <ul class="specs">
      <li>Процессор: ${product.specs.cpu}</li>
      <li>Оперативная память: ${product.specs.ram}</li>
      <li>Накопитель: ${product.specs.storage}</li>
    </ul>
    <button>Купить</button>
  </div>
`;