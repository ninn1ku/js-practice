const orders = [
  {
    number: 'A-1',
    client: 'Иван Василькой',
    items: [
      { title: 'Чебупицца', price: 1000, count: 2 },
      { title: 'Тако', price: 3000, count: 1 }
    ],
    status: 'Доставлен'
  },
  {
    number: 'A-2',
    client: 'Владислав Никифоров',
    items: [
      { title: 'Большой БМТ', price: 15000, count: 1 }
    ],
    status: 'В пути'
  },
  {
    number: 'A-3',
    client: 'Ярик Уколов',
    items: [
      { title: 'Такояки', price: 5000, count: 1 },
      { title: 'Бургер', price: 2000, count: 1 },
      { title: 'Кола', price: 1000, count: 3 }
    ],
    status: 'Обрабатывается'
  }
];

function getCount(items) {
  let count = 0;
  items.forEach(item => count += item.count);
  return count;
}


function getTotal(items) {
  let total = 0;
  items.forEach(item => total += item.price * item.count);
  return total;
}

const tbody = document.getElementById('tbody');

tbody.innerHTML = '';
orders.forEach(order => {
  tbody.innerHTML += `
    <tr>
      <td>${order.number}</td>
      <td>${order.client}</td>
      <td>${getCount(order.items)} шт.</td>
      <td>${getTotal(order.items)} ₽</td>
      <td><span class="status ${order.status}">${order.status}</span></td>
    </tr>
  `;
});