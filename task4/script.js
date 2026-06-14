const prices = [500, 1200, 3000, 700];

const discounted = prices.map(price => price * 0.9);

const formatted = prices.map(price => `Цена товара: ${price} ₽`);
const formattedDiscounted = discounted.map(price => `Цена со скидкой: ${price} ₽`);

function render(items, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    container.innerHTML += `<li>${item}</li>`;
  });
}

render(formatted, 'original');
render(formattedDiscounted, 'discounted');