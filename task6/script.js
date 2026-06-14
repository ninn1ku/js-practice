const order = {
  number: 'A-1001',
  date: '2026-05-31',
  client: {
    name: 'Иван Петров',
    email: 'ivan@example.com'
  },
  items: [
    { title: 'Мышь', price: 1000, count: 2 },
    { title: 'Клавиатура', price: 3000, count: 1 }
  ]
};

// считаем итоговую сумму
function getTotal(items) {
  let total = 0;
  items.forEach(item => {
    total += item.price * item.count;
  });
  return total;
}

// строим строки таблицы из массива товаров
function buildRows(items) {
  let rows = '';
  items.forEach(item => {
    rows += `
      <tr>
        <td>${item.title}</td>
        <td>${item.price} ₽</td>
        <td>${item.count}</td>
        <td>${item.price * item.count} ₽</td>
      </tr>
    `;
  });
  return rows;
}

const container = document.getElementById('order');

container.innerHTML = `
  <div class="order-card">
    <h2>Заказ ${order.number}</h2>
    <p>Дата: ${order.date}</p>
    <p>Клиент: ${order.client.name}</p>
    <p>Email: ${order.client.email}</p>

    <table>
      <thead>
        <tr>
          <th>Товар</th>
          <th>Цена</th>
          <th>Кол-во</th>
          <th>Сумма</th>
        </tr>
      </thead>
      <tbody>
        ${buildRows(order.items)}
      </tbody>
    </table>

    <p class="total">Итого: ${getTotal(order.items)} ₽</p>
  </div>
`;