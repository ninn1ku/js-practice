const cart = [
    { title: 'Мышь', price: 1000, count: 2 },
    { title: 'Клавиатура', price: 3000, count: 1 },
    { title: 'Монитор', price: 15000, count: 1 }
];

const cartList = document.getElementById('cartList');
const result = document.getElementById('result');

function getTotalPrice() {
    let total = 0;

    for (let item of cart) {
        total += item.price * item.count;
    }

    return total;
}

function getTotalCount() {
    let count = 0;

    for (let item of cart) {
        count += item.count;
    }

    return count;
}

function getMostExpensive() {
    let expensive = cart[0];

    for (let item of cart) {
        if (item.price > expensive.price) {
            expensive = item;
        }
    }

    return expensive;
}

function renderCart() {
    for (let item of cart) {
        cartList.innerHTML += `
            <li>
                ${item.title} -
                ${item.count} шт. -
                ${item.price} ₽
            </li>
        `;
    }

    const expensive = getMostExpensive();

    result.innerHTML = `
        <p>Общее количество товаров: ${getTotalCount()}</p>
        <p>Общая сумма: ${getTotalPrice()} ₽</p>
        <p>Самый дорогой товар: ${expensive.title} (${expensive.price} ₽)</p>
    `;
}

renderCart();