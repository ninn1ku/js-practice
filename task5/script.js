const product = {
  title: 'Новенький xiaomi redmi poco x4 5g pro max saudi chicken mc nugets ultra se с 18 камерами',
  price: 676767,
  category: 'Электроника',
  description: 'Мощный самсунг для учёбы. RTX 5060, ryzen gold.'
};

const container = document.getElementById('card');

container.innerHTML = `
  <div class="card">
    <span class="category">${product.category}</span>
    <h2>${product.title}</h2>
    <p>${product.description}</p>
    <p class="price">${product.price} ₽</p>
    <button>Купить</button>
  </div>
`;