const priceInput = document.getElementById('priceInput');
const priceBtn = document.getElementById('priceBtn');
const priceResult = document.getElementById('priceResult');

priceBtn.addEventListener('click', () => {
  const price = Number(priceInput.value);

  if (priceInput.value === '') {
    priceResult.textContent = 'Введите цену';
    return;
  }

  switch (true) {
    case price < 0:
      priceResult.textContent = 'Ошибка';
      break;
    case price === 0:
      priceResult.textContent = 'Бесплатно';
      break;
    case price < 1000:
      priceResult.textContent = 'Дешёвый товар';
      break;
    case price <= 10000:
      priceResult.textContent = 'Обычный товар';
      break;
    default:
      priceResult.textContent = 'Дорогой товар';
  }
});