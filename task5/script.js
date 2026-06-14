const products = [
  { id: 1, title: 'Мышь', price: 1000 },
  { id: 2, title: 'Клавиатура', price: 3000 },
  { id: 3, title: 'Монитор', price: 15000 },
];

const catalog = document.querySelector('#catalog');
const message = document.querySelector('#message');

function render() {
  catalog.innerHTML = '';
  products.forEach(p => {
    catalog.innerHTML += `
      <div class="card" data-id="${p.id}">
        <h3>${p.title}</h3>
        <p>${p.price} ₽</p>
        <button class="cart-btn">В корзину</button>
        <button class="delete-btn">Удалить</button>
      </div>
    `;
  });
}

catalog.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  if (!card) return;

  const id = Number(card.dataset.id);
  const product = products.find(p => p.id === id);

  if (e.target.classList.contains('cart-btn')) {
    message.textContent = `Добавлено в корзину: ${product.title}`;
  }

  if (e.target.classList.contains('delete-btn')) {
    const index = products.findIndex(p => p.id === id);
    products.splice(index, 1); 
    render(); 
    message.textContent = `Удалено: ${product.title}`;
  }
});

render();